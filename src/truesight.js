import * as THREE from 'three';

// TrueSight：自機から見えない範囲を暗くし、視界外の物体を隠す視界システム
// 放射状のレイで可視範囲（多角形）を求め、上から見たマスクテクスチャに描き込む。
// ワールドのマテリアルはこのテクスチャを参照して視界外を暗くする。

export const VIS_RANGE = 85;          // 視界の最大距離
const VIS_SIZE = VIS_RANGE * 2 + 6;   // マスクテクスチャが覆う範囲（ワールド単位）
const RAYS = 540;
const STEP = 0.35;
const BLOCK_H = 3;                    // この高さ以上の障害物が視線を遮る（木箱や低い柵は越して見える）
const PENETRATE = 0.8;                // 壁の手前の面を照らすため、少し食い込ませる

export const visUniforms = {
  uVisTex: { value: null },
  uVisCenter: { value: new THREE.Vector2() },
  uVisSize: { value: VIS_SIZE },
  uVisOn: { value: 0 },
  uVisStrength: { value: 0.85 },
  uVisSoft: { value: 0.9 },
};

// ワールド座標 vCutW を持つマテリアルの最終色に視界処理を足す GLSL
export const VIS_FRAG_PARS = `
uniform sampler2D uVisTex; uniform vec2 uVisCenter; uniform float uVisSize; uniform float uVisOn; uniform float uVisStrength; uniform float uVisSoft;`;
export const VIS_FRAG = `
if (uVisOn > 0.5) {
  vec2 vuv = (vCutW.xz - uVisCenter) / uVisSize + 0.5;
  float vis = 0.0;
  if (vuv.x > 0.0 && vuv.x < 1.0 && vuv.y > 0.0 && vuv.y < 1.0) {
    float o = uVisSoft / uVisSize;
    vis = texture2D(uVisTex, vuv).r * 0.4
      + (texture2D(uVisTex, vuv + vec2(o, 0.0)).r + texture2D(uVisTex, vuv - vec2(o, 0.0)).r
      + texture2D(uVisTex, vuv + vec2(0.0, o)).r + texture2D(uVisTex, vuv - vec2(0.0, o)).r) * 0.15;
  }
  float hk = 1.0 - smoothstep(3.0, 9.0, vCutW.y) * 0.65;
  float dk = (1.0 - vis) * uVisStrength * hk;
  float lum = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
  gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(lum) * vec3(0.45, 0.52, 0.72) * 0.1, dk);
}`;

export class TrueSight {
  constructor(map, renderer) {
    this.map = map;
    this.renderer = renderer;
    this.eye = new THREE.Vector2();
    this.dist = new Float32Array(RAYS);
    this.cos = new Float32Array(RAYS);
    this.sin = new Float32Array(RAYS);
    for (let i = 0; i < RAYS; i++) {
      const a = (i / RAYS) * Math.PI * 2;
      this.cos[i] = Math.cos(a);
      this.sin[i] = Math.sin(a);
    }
    const res = window.matchMedia && window.matchMedia('(pointer: coarse)').matches ? 512 : 1024;
    this.rt = new THREE.WebGLRenderTarget(res, res, { depthBuffer: false });
    this.rt.texture.minFilter = THREE.LinearFilter;
    this.rt.texture.magFilter = THREE.LinearFilter;
    this.rt.texture.generateMipmaps = false;

    // 可視多角形（扇形メッシュ）
    const pos = new Float32Array((RAYS + 1) * 3);
    const idx = [];
    for (let i = 0; i < RAYS; i++) idx.push(0, 1 + i, 1 + ((i + 1) % RAYS));
    this.geo = new THREE.BufferGeometry();
    this.posAttr = new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage);
    this.geo.setAttribute('position', this.posAttr);
    this.geo.setIndex(idx);
    this.fan = new THREE.Mesh(this.geo, new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide }));
    this.fan.frustumCulled = false;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);
    this.scene.add(this.fan);
    const h = VIS_SIZE / 2;
    this.cam = new THREE.OrthographicCamera(-h, h, h, -h, -1, 1);
    this.active = false;
  }

  update(ex, ez) {
    const map = this.map;
    this.eye.set(ex, ez);
    // 自機が壁際で占有セルに重なっている場合は、近距離の遮蔽を無視する
    const eyeBlocked = map.occAt(ex, ez) >= BLOCK_H;
    const P = this.posAttr.array;
    P[0] = 0; P[1] = 0; P[2] = 0;
    for (let i = 0; i < RAYS; i++) {
      const dx = this.cos[i], dz = this.sin[i];
      let d = VIS_RANGE;
      for (let t = STEP; t < VIS_RANGE; t += STEP) {
        if (eyeBlocked && t < 1.0) continue;
        if (map.occAt(ex + dx * t, ez + dz * t) >= BLOCK_H) { d = Math.min(VIS_RANGE, t + PENETRATE); break; }
      }
      this.dist[i] = d;
      const k = 3 + i * 3;
      P[k] = dx * d; P[k + 1] = dz * d; P[k + 2] = 0;
    }
    this.posAttr.needsUpdate = true;
    this.geo.computeBoundingSphere();

    const r = this.renderer;
    const prev = r.getRenderTarget();
    r.setRenderTarget(this.rt);
    r.render(this.scene, this.cam);
    r.setRenderTarget(prev);

    visUniforms.uVisTex.value = this.rt.texture;
    visUniforms.uVisCenter.value.set(ex, ez);
    this.active = true;
  }

  // 点(x,z)が半径 rad を含めて視界内にあるか
  isVisible(x, z, rad = 0) {
    if (!this.active) return true;
    const dx = x - this.eye.x, dz = z - this.eye.y;
    const d = Math.hypot(dx, dz);
    if (d <= 1.5 + rad) return true;
    if (d - rad > VIS_RANGE) return false;
    let a = Math.atan2(dz, dx);
    if (a < 0) a += Math.PI * 2;
    const step = (Math.PI * 2) / RAYS;
    const idx = Math.round(a / step);
    const span = Math.min(12, Math.ceil(Math.asin(Math.min(1, rad / d)) / step));
    for (let k = -span; k <= span; k++) {
      const j = ((idx + k) % RAYS + RAYS) % RAYS;
      if (d - rad <= this.dist[j]) return true;
    }
    return false;
  }

  dispose() {
    this.rt.dispose();
    this.geo.dispose();
    this.fan.material.dispose();
    this.active = false;
  }
}
