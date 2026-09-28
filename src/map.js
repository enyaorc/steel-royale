import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { MAP_HALF } from './config.js';
import { mulberry32, clamp } from './util.js';
import * as TX from './textures.js';
import { visUniforms, VIS_FRAG_PARS, VIS_FRAG } from './truesight.js';

// 工業都市マップ：生成・衝突・視線・経路探索

const N = MAP_HALF * 2;       // 占有グリッド(1unit)
const NAV_CELL = 2;
const NN = N / NAV_CELL;      // ナビグリッド
const HASH = 8;
const HN = N / HASH;

// 建物の手前を透過させるカットアウェイ用ユニフォーム
export const cutUniforms = {
  uCutTarget: { value: new THREE.Vector3() },
  uCutCam: { value: new THREE.Vector3(0, 100, 0) },
  uCutR: { value: 6.0 },
  uCutOn: { value: 1.0 },
};

// ワールド用マテリアルにシェーダ処理を追加する
// cut=true : 自機と カメラの間にある建物上部を透過（カットアウェイ）
// 常に    : TrueSight の視界外を暗くする
function patchWorld(mat, cut = true) {
  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, cutUniforms, visUniforms);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vCutW;')
      .replace('#include <project_vertex>', '#include <project_vertex>\nvCutW = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    let fs = shader.fragmentShader
      .replace('#include <common>', `#include <common>
varying vec3 vCutW;
uniform vec3 uCutTarget; uniform vec3 uCutCam; uniform float uCutR; uniform float uCutOn;${VIS_FRAG_PARS}`)
      .replace('#include <opaque_fragment>', `#include <opaque_fragment>${VIS_FRAG}`);
    if (cut) {
      fs = fs.replace('void main() {', `void main() {
  if (uCutOn > 0.5 && vCutW.y > 2.4) {
    vec3 ab = uCutCam - uCutTarget; vec3 ap = vCutW - uCutTarget;
    float t = clamp(dot(ap, ab) / dot(ab, ab), 0.0, 1.0);
    float d = length(ap - ab * t);
    if (t > 0.015) {
      float n = fract(sin(dot(floor(gl_FragCoord.xy), vec2(12.9898, 78.233))) * 43758.5453);
      float k = smoothstep(uCutR * 0.55, uCutR, d);
      if (n > k) discard;
    }
  }`);
    }
    shader.fragmentShader = fs;
  };
  mat.customProgramCacheKey = () => (cut ? 'world-cut' : 'world');
  return mat;
}
const addCutaway = (mat) => patchWorld(mat, true);

function scaleBoxUV(geo, sx, sy, sz, s) {
  const uv = geo.attributes.uv;
  const dims = [[sz, sy], [sz, sy], [sx, sz], [sx, sz], [sx, sy], [sx, sy]];
  for (let f = 0; f < 6; f++) {
    const [du, dv] = dims[f];
    for (let v = 0; v < 4; v++) {
      const i = f * 4 + v;
      uv.setXY(i, uv.getX(i) * du / s, uv.getY(i) * dv / s);
    }
  }
  uv.needsUpdate = true;
}

export class GameMap {
  constructor(seed = 20260928) {
    this.rng = mulberry32(seed);
    this.rects = [];
    this.circles = [];
    this.occ = new Uint8Array(N * N);
    this.nav = new Uint8Array(NN * NN);
    this.hash = Array.from({ length: HN * HN }, () => []);
    this.group = new THREE.Group();
    this.buckets = new Map();
    this.pickupSpots = [];
    this.lights = [];
    this.makeMaterials();
    this.generate();
    this.buildMeshes();
    this.rasterize();
    this.buildNav();
    this.buildGround();
    this.buildMinimap();
    // A* 用ワーク
    this.g = new Float32Array(NN * NN);
    this.came = new Int32Array(NN * NN);
    this.stamp = new Uint32Array(NN * NN);
    this.closed = new Uint32Array(NN * NN);
    this.curStamp = 1;
  }

  makeMaterials() {
    const std = (o) => new THREE.MeshStandardMaterial(o);
    const fa = TX.facadeTextures(1, 0x6b6f75);
    const fb = TX.facadeTextures(2, 0x7a6a5a);
    const fc = TX.facadeTextures(3, 0x4f5a60);
    this.mats = {
      facadeA: addCutaway(std({ map: fa.map, emissiveMap: fa.emissive, emissive: 0xffffff, emissiveIntensity: 0.9, roughness: 0.85, metalness: 0.1 })),
      facadeB: addCutaway(std({ map: fb.map, emissiveMap: fb.emissive, emissive: 0xffffff, emissiveIntensity: 0.9, roughness: 0.85, metalness: 0.1 })),
      facadeC: addCutaway(std({ map: fc.map, emissiveMap: fc.emissive, emissive: 0xffffff, emissiveIntensity: 0.9, roughness: 0.8, metalness: 0.15 })),
      roof: addCutaway(std({ map: TX.roofTexture(), roughness: 0.9 })),
      metal: addCutaway(std({ map: TX.metalTexture(0x6a6d70), roughness: 0.6, metalness: 0.5 })),
      metalWarm: addCutaway(std({ map: TX.metalTexture(0x7a5a40), roughness: 0.65, metalness: 0.45 })),
      stripe: addCutaway(std({ map: TX.metalTexture(0x55585c, true), roughness: 0.6, metalness: 0.4 })),
      tank: addCutaway(std({ map: TX.metalTexture(0x9a9c9e), roughness: 0.45, metalness: 0.6 })),
      concrete: addCutaway(std({ map: TX.concreteTexture(0x8a8a86), roughness: 0.95 })),
      concreteDark: addCutaway(std({ map: TX.concreteTexture(0x5e5e5c), roughness: 0.95 })),
      dark: addCutaway(std({ color: 0x2a2c30, roughness: 0.5, metalness: 0.7 })),
      crate: patchWorld(std({ map: TX.crateTexture(0x8a6a3a), roughness: 0.85 }), false),
      crateG: patchWorld(std({ map: TX.crateTexture(0x5a6a3a), roughness: 0.85 }), false),
      contR: patchWorld(std({ map: TX.containerTexture(0x8c3326), roughness: 0.7, metalness: 0.3 }), false),
      contB: patchWorld(std({ map: TX.containerTexture(0x2f5d8c), roughness: 0.7, metalness: 0.3 }), false),
      contG: patchWorld(std({ map: TX.containerTexture(0x3f7040), roughness: 0.7, metalness: 0.3 }), false),
      contY: patchWorld(std({ map: TX.containerTexture(0xb08a2a), roughness: 0.7, metalness: 0.3 }), false),
      carBody: patchWorld(std({ color: 0x55504a, roughness: 0.5, metalness: 0.6 }), false),
      glowO: patchWorld(std({ color: 0xffa040, emissive: 0xff8a30, emissiveIntensity: 2.2 }), false),
      glowB: patchWorld(std({ color: 0x60c8ff, emissive: 0x40b0ff, emissiveIntensity: 2.5 }), false),
      glowR: patchWorld(std({ color: 0xff4040, emissive: 0xff2020, emissiveIntensity: 2.0 }), false),
    };
  }

  // ---- ジオメトリ登録 ----
  addBox(key, cx, cy, cz, sx, sy, sz, uvs = 4, rotY = 0) {
    const g = new THREE.BoxGeometry(sx, sy, sz);
    scaleBoxUV(g, sx, sy, sz, uvs);
    if (rotY) g.rotateY(rotY);
    g.translate(cx, cy, cz);
    this.push(key, g);
  }
  addCyl(key, cx, cy, cz, rt, rb, h, seg = 16, uvs = 4, rx = 0, rz = 0) {
    const g = new THREE.CylinderGeometry(rt, rb, h, seg);
    const uv = g.attributes.uv;
    const circ = Math.PI * 2 * Math.max(rt, rb);
    for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * circ / uvs, uv.getY(i) * h / uvs);
    if (rx) g.rotateX(rx);
    if (rz) g.rotateZ(rz);
    g.translate(cx, cy, cz);
    this.push(key, g);
  }
  addSphere(key, cx, cy, cz, r, half = false) {
    const g = new THREE.SphereGeometry(r, 16, 8, 0, Math.PI * 2, 0, half ? Math.PI / 2 : Math.PI);
    g.translate(cx, cy, cz);
    this.push(key, g);
  }
  push(key, g) {
    if (g.index) g = g.toNonIndexed();
    if (!this.buckets.has(key)) this.buckets.set(key, []);
    this.buckets.get(key).push(g);
  }

  // ---- 衝突形状 ----
  rect(x0, z0, x1, z1, h) {
    const r = { x0: Math.min(x0, x1), z0: Math.min(z0, z1), x1: Math.max(x0, x1), z1: Math.max(z0, z1), h };
    this.rects.push(r);
    this.addToHash(r, r.x0, r.z0, r.x1, r.z1);
  }
  circle(x, z, r, h) {
    const c = { x, z, r, h };
    this.circles.push(c);
    this.addToHash(c, x - r, z - r, x + r, z + r);
  }
  addToHash(s, x0, z0, x1, z1) {
    const a = clamp(Math.floor((x0 + MAP_HALF) / HASH), 0, HN - 1), b = clamp(Math.floor((x1 + MAP_HALF) / HASH), 0, HN - 1);
    const c = clamp(Math.floor((z0 + MAP_HALF) / HASH), 0, HN - 1), d = clamp(Math.floor((z1 + MAP_HALF) / HASH), 0, HN - 1);
    for (let i = a; i <= b; i++) for (let j = c; j <= d; j++) this.hash[j * HN + i].push(s);
  }

  // ---- 部品 ----
  building(cx, cz, w, d, h) {
    const r = this.rng;
    const fac = ['facadeA', 'facadeB', 'facadeC'][Math.floor(r() * 3)];
    this.addBox(fac, cx, h / 2, cz, w, h, d, 12);
    this.addBox('roof', cx, h + 0.05, cz, w - 0.1, 0.12, d - 0.1, 8);
    // 手すり壁
    const pw = 0.4, ph = 0.8;
    this.addBox('concreteDark', cx, h + ph / 2, cz - d / 2 + pw / 2, w, ph, pw, 4);
    this.addBox('concreteDark', cx, h + ph / 2, cz + d / 2 - pw / 2, w, ph, pw, 4);
    this.addBox('concreteDark', cx - w / 2 + pw / 2, h + ph / 2, cz, pw, ph, d, 4);
    this.addBox('concreteDark', cx + w / 2 - pw / 2, h + ph / 2, cz, pw, ph, d, 4);
    // 1階
    this.addBox('concreteDark', cx, 1.4, cz, w + 0.3, 2.8, d + 0.3, 4);
    this.addBox('glowO', cx, 2.9, cz + d / 2 + 0.2, w * 0.5, 0.15, 0.1);
    // 屋上設備
    const n = 1 + Math.floor(r() * 3);
    for (let i = 0; i < n; i++) {
      const ax = cx + (r() - 0.5) * (w - 4), az = cz + (r() - 0.5) * (d - 4);
      if (r() < 0.35) {
        this.addCyl('tank', ax, h + 1.8, az, 1.2, 1.2, 2.4, 12);
        this.addCyl('dark', ax, h + 3.1, az, 1.3, 1.3, 0.2, 12);
      } else this.addBox('metal', ax, h + 0.8, az, 1.5 + r() * 2, 1.6, 1.5 + r() * 2, 2);
    }
    this.rect(cx - w / 2 - 0.15, cz - d / 2 - 0.15, cx + w / 2 + 0.15, cz + d / 2 + 0.15, Math.min(255, h));
  }

  hall(cx, cz, w, d, h) {
    this.addBox('metalWarm', cx, h / 2, cz, w, h, d, 6);
    this.addBox('metal', cx, h + 0.6, cz, w + 0.6, 1.2, d + 0.6, 6);
    this.addBox('stripe', cx, 0.6, cz, w + 0.2, 1.2, d + 0.2, 4);
    // 窓の帯
    this.addBox('glowO', cx, h - 1.5, cz + d / 2 + 0.05, w * 0.8, 0.5, 0.1);
    this.addBox('glowO', cx, h - 1.5, cz - d / 2 - 0.05, w * 0.8, 0.5, 0.1);
    // 屋上ダクト
    for (let i = 0; i < 3; i++) this.addBox('dark', cx - w / 3 + (i * w) / 3, h + 1.6, cz, 1.4, 0.8, d * 0.7, 2);
    this.rect(cx - w / 2 - 0.3, cz - d / 2 - 0.3, cx + w / 2 + 0.3, cz + d / 2 + 0.3, h);
  }

  chimney(x, z, r, h) {
    this.addCyl('metal', x, h / 2, z, r * 0.85, r, h, 14, 3);
    this.addCyl('stripe', x, h - 1.2, z, r * 0.9, r * 0.9, 2.4, 14, 2.4);
    this.addCyl('dark', x, h + 0.15, z, r * 0.95, r * 0.95, 0.3, 14);
    this.addCyl('concreteDark', x, 0.6, z, r * 1.3, r * 1.4, 1.2, 14);
    this.lights.push({ x, y: h + 0.8, z, kind: 'smoke' });
    this.circle(x, z, r * 1.35, h);
  }

  tank(x, z, r, h) {
    this.addCyl('tank', x, h / 2, z, r, r, h, 20, 4);
    this.addSphere('tank', x, h, z, r, true);
    this.addCyl('dark', x, h * 0.3, z, r + 0.08, r + 0.08, 0.3, 20);
    this.addCyl('dark', x, h * 0.7, z, r + 0.08, r + 0.08, 0.3, 20);
    this.circle(x, z, r + 0.1, h + r);
  }

  pipeRack(x0, z0, x1, z1) {
    const alongX = Math.abs(x1 - x0) > Math.abs(z1 - z0);
    const len = alongX ? Math.abs(x1 - x0) : Math.abs(z1 - z0);
    const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
    const steps = Math.max(2, Math.floor(len / 5));
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const px = alongX ? x0 + (x1 - x0) * t : cx, pz = alongX ? cz : z0 + (z1 - z0) * t;
      this.addBox('dark', px, 2.4, pz, 0.4, 4.8, 0.4, 2);
    }
    for (const [off, y, r] of [[-0.4, 4.2, 0.35], [0.4, 4.3, 0.28], [0, 5.0, 0.4]]) {
      if (alongX) this.addCyl('metal', cx, y, cz + off, r, r, len, 10, 3, 0, Math.PI / 2);
      else this.addCyl('metal', cx + off, y, cz, r, r, len, 10, 3, Math.PI / 2, 0);
    }
    if (alongX) this.rect(Math.min(x0, x1) - 0.5, cz - 0.9, Math.max(x0, x1) + 0.5, cz + 0.9, 5.4);
    else this.rect(cx - 0.9, Math.min(z0, z1) - 0.5, cx + 0.9, Math.max(z0, z1) + 0.5, 5.4);
  }

  container(cx, cz, alongX, key) {
    const w = alongX ? 7.2 : 2.6, d = alongX ? 2.6 : 7.2;
    this.addBox(key, cx, 1.35, cz, w, 2.7, d, 3);
    this.rect(cx - w / 2, cz - d / 2, cx + w / 2, cz + d / 2, 2.7);
  }

  crate(cx, cz, s) {
    this.addBox(this.rng() < 0.5 ? 'crate' : 'crateG', cx, s / 2, cz, s, s, s, s);
    this.rect(cx - s / 2, cz - s / 2, cx + s / 2, cz + s / 2, s);
  }

  barrier(cx, cz, alongX, len = 3.2) {
    const w = alongX ? len : 0.8, d = alongX ? 0.8 : len;
    this.addBox('concrete', cx, 0.6, cz, w, 1.2, d, 2);
    this.addBox('stripe', cx, 1.25, cz, w * 0.98, 0.1, d * 0.98, 2);
    this.rect(cx - w / 2, cz - d / 2, cx + w / 2, cz + d / 2, 1.2);
  }

  car(cx, cz, alongX) {
    const w = alongX ? 4.4 : 2.0, d = alongX ? 2.0 : 4.4;
    this.addBox('carBody', cx, 0.75, cz, w, 0.9, d, 2);
    this.addBox('dark', cx, 1.45, cz, alongX ? 2.4 : 1.8, 0.6, alongX ? 1.8 : 2.4, 2);
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      const wx = cx + (alongX ? sx * 1.4 : sx * 1.0), wz = cz + (alongX ? sz * 1.0 : sz * 1.4);
      this.addCyl('dark', wx, 0.4, wz, 0.4, 0.4, 0.3, 10, 2, alongX ? Math.PI / 2 : 0, alongX ? 0 : Math.PI / 2);
    }
    this.rect(cx - w / 2, cz - d / 2, cx + w / 2, cz + d / 2, 1.8);
  }

  streetLight(x, z) {
    this.addCyl('dark', x, 3.5, z, 0.12, 0.16, 7, 8);
    this.addBox('dark', x, 7, z, 0.2, 0.2, 1.6, 2);
    this.addBox('glowO', x, 6.85, z + 0.6, 0.4, 0.12, 0.5);
    this.circle(x, z, 0.35, 7);
  }

  ruinWall(cx, cz, alongX, len) {
    const r = this.rng;
    const segs = Math.max(2, Math.floor(len / 2));
    for (let i = 0; i < segs; i++) {
      const t = (i + 0.5) / segs - 0.5;
      const h = 1.5 + r() * 5;
      const x = alongX ? cx + t * len : cx, z = alongX ? cz : cz + t * len;
      this.addBox('concrete', x, h / 2, z, alongX ? len / segs : 0.8, h, alongX ? 0.8 : len / segs, 4);
    }
    this.rect(alongX ? cx - len / 2 : cx - 0.4, alongX ? cz - 0.4 : cz - len / 2, alongX ? cx + len / 2 : cx + 0.4, alongX ? cz + 0.4 : cz + len / 2, 3);
  }

  rubble(cx, cz, s) {
    const r = this.rng;
    for (let i = 0; i < 6; i++) {
      const g = new THREE.BoxGeometry(0.6 + r() * s * 0.5, 0.4 + r() * 1.0, 0.6 + r() * s * 0.5);
      g.rotateX((r() - 0.5) * 0.6); g.rotateZ((r() - 0.5) * 0.6); g.rotateY(r() * 3);
      g.translate(cx + (r() - 0.5) * s, 0.3, cz + (r() - 0.5) * s);
      this.push('concreteDark', g);
    }
    this.rect(cx - s * 0.45, cz - s * 0.45, cx + s * 0.45, cz + s * 0.45, 1.4);
  }

  // ---- 生成 ----
  generate() {
    const r = this.rng;
    const BS = 36, ROAD = 12;
    this.blockSize = BS; this.road = ROAD;
    this.blocks = [];
    const kinds = [];
    for (let j = 0; j < 5; j++) for (let i = 0; i < 5; i++) {
      const x0 = -MAP_HALF + 6 + i * (BS + ROAD), z0 = -MAP_HALF + 6 + j * (BS + ROAD);
      let kind;
      if (i === 2 && j === 2) kind = 'plaza';
      else {
        const v = r();
        kind = v < 0.34 ? 'tower' : v < 0.64 ? 'factory' : v < 0.86 ? 'yard' : 'ruins';
      }
      kinds.push(kind);
      this.blocks.push({ x0, z0, x1: x0 + BS, z1: z0 + BS, kind });
    }
    for (const b of this.blocks) {
      const cx = (b.x0 + b.x1) / 2, cz = (b.z0 + b.z1) / 2;
      switch (b.kind) {
        case 'plaza': this.genPlaza(cx, cz); break;
        case 'tower': this.genTower(b); break;
        case 'factory': this.genFactory(b); break;
        case 'yard': this.genYard(b); break;
        case 'ruins': this.genRuins(b); break;
      }
    }
    // 道路の障害物・街灯・補給地点
    const inter = [-72, -24, 24, 72];
    for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) {
      const x = inter[i], z = inter[j];
      if ((i + j) % 2 === 0) this.pickupSpots.push({ x, z, type: (i + j) % 4 === 0 ? 'repair' : 'core' });
      this.streetLight(x + 5.2, z + 5.2);
      this.streetLight(x - 5.2, z - 5.2);
    }
    this.pickupSpots.push({ x: 0, z: -10, type: 'core' }, { x: 0, z: 10, type: 'repair' });
    for (let k = 0; k < 18; k++) {
      const alongX = r() < 0.5;
      const lane = inter[Math.floor(r() * 4)];
      const t = -100 + r() * 200;
      if (inter.some((v) => Math.abs(v - t) < 10) || Math.abs(t) < 12) continue;
      const off = (r() < 0.5 ? -1 : 1) * 3.2;
      if (alongX) {
        if (r() < 0.6) this.car(t, lane + off, true); else this.barrier(t, lane + off, true);
      } else {
        if (r() < 0.6) this.car(lane + off, t, false); else this.barrier(lane + off, t, false);
      }
    }
    // 外周の壁（見た目）
    for (const s of [-1, 1]) {
      this.addBox('concreteDark', 0, 2, s * (MAP_HALF + 1), N + 4, 4, 2, 4);
      this.addBox('concreteDark', s * (MAP_HALF + 1), 2, 0, 2, 4, N + 4, 4);
      this.addBox('stripe', 0, 4.1, s * (MAP_HALF + 1), N + 4, 0.25, 2.05, 4);
      this.addBox('stripe', s * (MAP_HALF + 1), 4.1, 0, 2.05, 0.25, N + 4, 4);
    }
  }

  genPlaza(cx, cz) {
    this.addCyl('concreteDark', cx, 0.6, cz, 5, 5.4, 1.2, 24);
    this.addCyl('metal', cx, 2.2, cz, 3.2, 3.6, 2.2, 20);
    this.addCyl('glowB', cx, 5, cz, 1.4, 1.4, 6, 16);
    this.addCyl('dark', cx, 4.2, cz, 2.0, 2.0, 0.4, 16);
    this.addCyl('dark', cx, 6.4, cz, 2.0, 2.0, 0.4, 16);
    this.addCyl('dark', cx, 8.2, cz, 1.8, 1.6, 0.6, 16);
    this.circle(cx, cz, 5.2, 8.5);
    this.lights.push({ x: cx, y: 6, z: cz, kind: 'core' });
    for (const [dx, dz, ax] of [[-11, -11, true], [11, 11, true], [-11, 11, false], [11, -11, false]]) {
      this.barrier(cx + dx, cz + dz, ax, 5);
    }
    for (const [dx, dz] of [[-14, 0], [14, 0]]) this.crate(cx + dx, cz + dz, 2);
  }

  genTower(b) {
    const r = this.rng;
    const sub = 15.5, gap = 5;
    let built = 0;
    for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) {
      const lx = b.x0 + i * (sub + gap), lz = b.z0 + j * (sub + gap);
      if (built < 3 && r() < 0.78) {
        const w = 9 + r() * 6.5, d = 9 + r() * 6.5, h = 8 + Math.floor(r() * 5) * 3;
        const cx = lx + sub / 2 + (r() - 0.5) * (sub - w), cz = lz + sub / 2 + (r() - 0.5) * (sub - d);
        this.building(cx, cz, w, d, h);
        built++;
      } else {
        for (let k = 0; k < 3; k++) this.crate(lx + 3 + r() * (sub - 6), lz + 3 + r() * (sub - 6), 1.4 + r() * 0.8);
      }
    }
  }

  genFactory(b) {
    const r = this.rng;
    const horiz = r() < 0.5;
    const cx = (b.x0 + b.x1) / 2, cz = (b.z0 + b.z1) / 2;
    const side = r() < 0.5 ? -1 : 1;
    let hx, hz, hw, hd;
    if (horiz) { hw = 22 + r() * 8; hd = 11 + r() * 3; hx = cx + (r() - 0.5) * 4; hz = cz + side * (18 - hd / 2 - 1); }
    else { hw = 11 + r() * 3; hd = 22 + r() * 8; hz = cz + (r() - 0.5) * 4; hx = cx + side * (18 - hw / 2 - 1); }
    this.hall(hx, hz, hw, hd, 7 + r() * 3);
    // 反対側に煙突/タンク/パイプ
    const ox = horiz ? cx : cx - side * 9, oz = horiz ? cz - side * 9 : cz;
    const nCh = 1 + Math.floor(r() * 3);
    for (let k = 0; k < nCh; k++) {
      const px = ox + (horiz ? (k - (nCh - 1) / 2) * 9 : (r() - 0.5) * 4);
      const pz = oz + (horiz ? (r() - 0.5) * 4 : (k - (nCh - 1) / 2) * 9);
      if (r() < 0.5) this.chimney(px, pz, 1.1 + r() * 0.5, 16 + r() * 10);
      else this.tank(px, pz, 2.4 + r() * 1.0, 5 + r() * 3);
    }
    if (r() < 0.7) {
      if (horiz) this.pipeRack(b.x0 + 3, oz + side * 5.5, b.x1 - 3, oz + side * 5.5);
      else this.pipeRack(ox + side * 5.5, b.z0 + 3, ox + side * 5.5, b.z1 - 3);
    }
  }

  genYard(b) {
    const r = this.rng;
    const keys = ['contR', 'contB', 'contG', 'contY'];
    const cx = (b.x0 + b.x1) / 2, cz = (b.z0 + b.z1) / 2;
    const placed = [];
    const n = 3 + Math.floor(r() * 3);
    for (let k = 0; k < n * 3 && placed.length < n; k++) {
      const alongX = r() < 0.5;
      const x = cx + (r() - 0.5) * 24, z = cz + (r() - 0.5) * 24;
      const w = alongX ? 7.2 : 2.6, d = alongX ? 2.6 : 7.2;
      if (placed.some((p) => Math.abs(p.x - x) < (p.w + w) / 2 + 3.5 && Math.abs(p.z - z) < (p.d + d) / 2 + 3.5)) continue;
      placed.push({ x, z, w, d });
      this.container(x, z, alongX, keys[Math.floor(r() * 4)]);
      if (r() < 0.3) this.addBox(keys[Math.floor(r() * 4)], x, 4.05, z, w, 2.7, d, 3);
    }
    for (let k = 0; k < 5; k++) {
      const x = cx + (r() - 0.5) * 30, z = cz + (r() - 0.5) * 30;
      if (placed.some((p) => Math.abs(p.x - x) < p.w / 2 + 3 && Math.abs(p.z - z) < p.d / 2 + 3)) continue;
      this.crate(x, z, 1.4 + r() * 0.8);
    }
    this.barrier(b.x0 + 4, b.z0 + 4, true);
    this.barrier(b.x1 - 4, b.z1 - 4, false);
  }

  genRuins(b) {
    const r = this.rng;
    const cx = (b.x0 + b.x1) / 2, cz = (b.z0 + b.z1) / 2;
    this.ruinWall(cx - 8, cz - 12, true, 12);
    this.ruinWall(cx + 12, cz + 4, false, 14);
    this.ruinWall(cx - 13, cz + 8, false, 8);
    for (let k = 0; k < 3; k++) this.rubble(cx + (r() - 0.5) * 22, cz + (r() - 0.5) * 22, 3 + r() * 2);
    this.car(cx + 4, cz - 3, r() < 0.5);
  }

  buildMeshes() {
    for (const [key, list] of this.buckets) {
      const geo = mergeGeometries(list, false);
      for (const g of list) g.dispose();
      geo.computeBoundingSphere();
      const m = new THREE.Mesh(geo, this.mats[key]);
      m.castShadow = !key.startsWith('glow');
      m.receiveShadow = true;
      this.group.add(m);
    }
    this.buckets.clear();
  }

  rasterize() {
    const occ = this.occ;
    for (const r of this.rects) {
      const h = clamp(Math.ceil(r.h * 10) / 10, 0.1, 255);
      for (let z = Math.floor(r.z0 + MAP_HALF); z < Math.ceil(r.z1 + MAP_HALF); z++) {
        for (let x = Math.floor(r.x0 + MAP_HALF); x < Math.ceil(r.x1 + MAP_HALF); x++) {
          if (x < 0 || z < 0 || x >= N || z >= N) continue;
          const wx = x - MAP_HALF + 0.5, wz = z - MAP_HALF + 0.5;
          if (wx < r.x0 - 0.3 || wx > r.x1 + 0.3 || wz < r.z0 - 0.3 || wz > r.z1 + 0.3) continue;
          const i = z * N + x;
          occ[i] = Math.max(occ[i], Math.ceil(h));
        }
      }
    }
    for (const c of this.circles) {
      for (let z = Math.floor(c.z - c.r + MAP_HALF); z <= Math.ceil(c.z + c.r + MAP_HALF); z++) {
        for (let x = Math.floor(c.x - c.r + MAP_HALF); x <= Math.ceil(c.x + c.r + MAP_HALF); x++) {
          if (x < 0 || z < 0 || x >= N || z >= N) continue;
          const wx = x - MAP_HALF + 0.5, wz = z - MAP_HALF + 0.5;
          if (Math.hypot(wx - c.x, wz - c.z) > c.r + 0.2) continue;
          const i = z * N + x;
          occ[i] = Math.max(occ[i], Math.ceil(c.h));
        }
      }
    }
  }

  buildNav() {
    const R = 1.9;
    for (let j = 0; j < NN; j++) for (let i = 0; i < NN; i++) {
      const cx = -MAP_HALF + i * NAV_CELL + 1, cz = -MAP_HALF + j * NAV_CELL + 1;
      let blocked = Math.abs(cx) > MAP_HALF - 2 || Math.abs(cz) > MAP_HALF - 2;
      if (!blocked) {
        for (let z = Math.floor(cz - R + MAP_HALF); z <= Math.floor(cz + R + MAP_HALF) && !blocked; z++) {
          for (let x = Math.floor(cx - R + MAP_HALF); x <= Math.floor(cx + R + MAP_HALF); x++) {
            if (x < 0 || z < 0 || x >= N || z >= N) continue;
            if (!this.occ[z * N + x]) continue;
            const wx = x - MAP_HALF + 0.5, wz = z - MAP_HALF + 0.5;
            if (Math.hypot(wx - cx, wz - cz) < R + 0.2) { blocked = true; break; }
          }
        }
      }
      this.nav[j * NN + i] = blocked ? 1 : 0;
    }
  }

  buildGround() {
    const S = 2048;
    const c = document.createElement('canvas');
    c.width = c.height = S;
    const g = c.getContext('2d');
    const k = S / N;
    const rng = mulberry32(4242);
    // アスファルト
    g.fillStyle = '#2c2d2f';
    g.fillRect(0, 0, S, S);
    for (let i = 0; i < 9000; i++) {
      const v = 30 + rng() * 25;
      g.fillStyle = `rgba(${v},${v},${v + 2},0.5)`;
      g.fillRect(rng() * S, rng() * S, 2 + rng() * 3, 2 + rng() * 3);
    }
    const toPx = (w) => (w + MAP_HALF) * k;
    // 道路の線
    const inter = [-72, -24, 24, 72];
    g.setLineDash([k * 3, k * 3]);
    g.strokeStyle = 'rgba(210,170,50,0.7)';
    g.lineWidth = k * 0.3;
    for (const v of inter) {
      g.beginPath(); g.moveTo(toPx(-MAP_HALF), toPx(v)); g.lineTo(toPx(MAP_HALF), toPx(v)); g.stroke();
      g.beginPath(); g.moveTo(toPx(v), toPx(-MAP_HALF)); g.lineTo(toPx(v), toPx(MAP_HALF)); g.stroke();
    }
    g.setLineDash([]);
    // ブロック（歩道＋敷地）
    for (const b of this.blocks) {
      const x = toPx(b.x0), z = toPx(b.z0), w = (b.x1 - b.x0) * k, d = (b.z1 - b.z0) * k;
      g.fillStyle = '#6d6c68';
      g.fillRect(x - k * 1.5, z - k * 1.5, w + k * 3, d + k * 3);
      g.fillStyle = '#4c4b48';
      g.fillRect(x - k * 1.6, z - k * 1.6, w + k * 3.2, k * 0.2);
      g.fillRect(x - k * 1.6, z + d + k * 1.4, w + k * 3.2, k * 0.2);
      const base = b.kind === 'factory' ? '#55524c' : b.kind === 'yard' ? '#5c5a52' : b.kind === 'plaza' ? '#6e6e70' : b.kind === 'ruins' ? '#4e4a44' : '#5f6062';
      g.fillStyle = base;
      g.fillRect(x, z, w, d);
      // タイル目地
      g.strokeStyle = 'rgba(0,0,0,0.12)';
      g.lineWidth = 1;
      const step = b.kind === 'plaza' ? k * 3 : k * 6;
      for (let t = 0; t <= w; t += step) { g.beginPath(); g.moveTo(x + t, z); g.lineTo(x + t, z + d); g.stroke(); }
      for (let t = 0; t <= d; t += step) { g.beginPath(); g.moveTo(x, z + t); g.lineTo(x + w, z + t); g.stroke(); }
      if (b.kind === 'plaza') {
        g.strokeStyle = 'rgba(80,180,255,0.35)';
        g.lineWidth = k * 0.4;
        g.beginPath(); g.arc(toPx((b.x0 + b.x1) / 2), toPx((b.z0 + b.z1) / 2), k * 9, 0, Math.PI * 2); g.stroke();
        g.beginPath(); g.arc(toPx((b.x0 + b.x1) / 2), toPx((b.z0 + b.z1) / 2), k * 15, 0, Math.PI * 2); g.stroke();
      }
    }
    // 横断歩道
    g.fillStyle = 'rgba(220,220,210,0.55)';
    for (const ix of inter) for (const iz of inter) {
      for (const [sx, sz] of [[0, -1], [0, 1], [-1, 0], [1, 0]]) {
        for (let s = -4; s <= 4; s += 1.4) {
          if (sx === 0) g.fillRect(toPx(ix + s - 0.35), toPx(iz + sz * 7.5 - 1.2), k * 0.7, k * 2.4);
          else g.fillRect(toPx(ix + sx * 7.5 - 1.2), toPx(iz + s - 0.35), k * 2.4, k * 0.7);
        }
      }
    }
    // 汚れ・ひび
    for (let i = 0; i < 260; i++) {
      const x = rng() * S, z = rng() * S, rr = 5 + rng() * 40;
      const grd = g.createRadialGradient(x, z, 0, x, z, rr);
      grd.addColorStop(0, `rgba(0,0,0,${0.12 + rng() * 0.2})`);
      grd.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = grd;
      g.fillRect(x - rr, z - rr, rr * 2, rr * 2);
    }
    g.strokeStyle = 'rgba(15,15,15,0.4)';
    for (let i = 0; i < 140; i++) {
      g.lineWidth = 1 + rng();
      g.beginPath();
      let x = rng() * S, z = rng() * S;
      g.moveTo(x, z);
      for (let s = 0; s < 6; s++) { x += (rng() - 0.5) * 40; z += (rng() - 0.5) * 40; g.lineTo(x, z); }
      g.stroke();
    }
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(N, N), patchWorld(new THREE.MeshStandardMaterial({ map: tex, roughness: 0.92, metalness: 0.05 }), false));
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.group.add(ground);
    this.groundCanvas = c;

    const outerTex = TX.concreteTexture(0x3a3a3a).clone();
    outerTex.repeat.set(60, 60);
    outerTex.needsUpdate = true;
    const outer = new THREE.Mesh(new THREE.PlaneGeometry(700, 700), patchWorld(new THREE.MeshStandardMaterial({ map: outerTex, roughness: 1, color: 0x777777 }), false));
    outer.rotation.x = -Math.PI / 2;
    outer.position.y = -0.05;
    this.group.add(outer);
  }

  buildMinimap() {
    const S = 256;
    const c = document.createElement('canvas');
    c.width = c.height = S;
    const g = c.getContext('2d');
    g.drawImage(this.groundCanvas, 0, 0, S, S);
    g.fillStyle = 'rgba(10,20,30,0.45)';
    g.fillRect(0, 0, S, S);
    const k = S / N;
    for (let z = 0; z < N; z++) for (let x = 0; x < N; x++) {
      const h = this.occ[z * N + x];
      if (!h) continue;
      const v = Math.min(200, 70 + h * 5);
      g.fillStyle = `rgb(${v * 0.75 | 0},${v * 0.85 | 0},${v})`;
      g.fillRect(x * k, z * k, Math.ceil(k), Math.ceil(k));
    }
    this.minimapCanvas = c;
  }

  // ---- クエリ ----
  occAt(x, z) {
    const ix = Math.floor(x + MAP_HALF), iz = Math.floor(z + MAP_HALF);
    if (ix < 0 || iz < 0 || ix >= N || iz >= N) return 255;
    return this.occ[iz * N + ix];
  }

  blocksAt(x, z, y) { return this.occAt(x, z) > y; }

  // 線分上で最初に遮られる位置 t (0..1) / なければ -1
  segmentHit(ax, az, bx, bz, y = 1.5) {
    const len = Math.hypot(bx - ax, bz - az);
    const steps = Math.max(1, Math.ceil(len / 0.5));
    for (let i = 1; i <= steps; i++) {
      const t = i / steps;
      if (this.occAt(ax + (bx - ax) * t, az + (bz - az) * t) > y) return (i - 1) / steps;
    }
    return -1;
  }

  lineOfSight(ax, az, bx, bz, y = 1.8) { return this.segmentHit(ax, az, bx, bz, y) < 0; }

  resolveCircle(p, r) {
    const lim = MAP_HALF - r;
    for (let pass = 0; pass < 2; pass++) {
      const a = clamp(Math.floor((p.x - r + MAP_HALF) / HASH), 0, HN - 1), b = clamp(Math.floor((p.x + r + MAP_HALF) / HASH), 0, HN - 1);
      const c = clamp(Math.floor((p.z - r + MAP_HALF) / HASH), 0, HN - 1), d = clamp(Math.floor((p.z + r + MAP_HALF) / HASH), 0, HN - 1);
      let hit = false;
      for (let i = a; i <= b; i++) for (let j = c; j <= d; j++) {
        for (const s of this.hash[j * HN + i]) {
          if (s.r !== undefined) {
            const dx = p.x - s.x, dz = p.z - s.z;
            const dd = Math.hypot(dx, dz), m = s.r + r;
            if (dd < m) {
              const nx = dd > 1e-4 ? dx / dd : 1, nz = dd > 1e-4 ? dz / dd : 0;
              p.x = s.x + nx * m; p.z = s.z + nz * m; hit = true;
            }
          } else {
            const cx = clamp(p.x, s.x0, s.x1), cz = clamp(p.z, s.z0, s.z1);
            const dx = p.x - cx, dz = p.z - cz;
            const d2 = dx * dx + dz * dz;
            if (d2 < r * r) {
              if (d2 > 1e-8) {
                const dd = Math.sqrt(d2);
                p.x = cx + (dx / dd) * r; p.z = cz + (dz / dd) * r;
              } else {
                const l = p.x - s.x0, rr = s.x1 - p.x, t = p.z - s.z0, bb = s.z1 - p.z;
                const m = Math.min(l, rr, t, bb);
                if (m === l) p.x = s.x0 - r; else if (m === rr) p.x = s.x1 + r; else if (m === t) p.z = s.z0 - r; else p.z = s.z1 + r;
              }
              hit = true;
            }
          }
        }
      }
      p.x = clamp(p.x, -lim, lim);
      p.z = clamp(p.z, -lim, lim);
      if (!hit) break;
    }
    return p;
  }

  isFree(x, z, r = 1.5) {
    if (Math.abs(x) > MAP_HALF - r || Math.abs(z) > MAP_HALF - r) return false;
    return !this.navBlockedAt(x, z) && this.occAt(x, z) === 0;
  }

  navIndex(x, z) {
    const i = clamp(Math.floor((x + MAP_HALF) / NAV_CELL), 0, NN - 1), j = clamp(Math.floor((z + MAP_HALF) / NAV_CELL), 0, NN - 1);
    return j * NN + i;
  }
  navBlockedAt(x, z) { return this.nav[this.navIndex(x, z)] === 1; }
  navCenter(idx, out) {
    out.x = -MAP_HALF + (idx % NN) * NAV_CELL + 1;
    out.z = -MAP_HALF + Math.floor(idx / NN) * NAV_CELL + 1;
    return out;
  }
  navLine(ax, az, bx, bz) {
    const len = Math.hypot(bx - ax, bz - az);
    const steps = Math.max(1, Math.ceil(len / 0.8));
    for (let i = 1; i <= steps; i++) {
      const t = i / steps;
      if (this.navBlockedAt(ax + (bx - ax) * t, az + (bz - az) * t)) return false;
    }
    return true;
  }

  nearestFreeNav(idx) {
    if (!this.nav[idx]) return idx;
    const ci = idx % NN, cj = Math.floor(idx / NN);
    for (let rad = 1; rad < 8; rad++) {
      for (let dj = -rad; dj <= rad; dj++) for (let di = -rad; di <= rad; di++) {
        if (Math.max(Math.abs(di), Math.abs(dj)) !== rad) continue;
        const i = ci + di, j = cj + dj;
        if (i < 0 || j < 0 || i >= NN || j >= NN) continue;
        if (!this.nav[j * NN + i]) return j * NN + i;
      }
    }
    return idx;
  }

  // A* 経路探索（平滑化済みの座標列を返す）
  findPath(sx, sz, tx, tz) {
    let s = this.nearestFreeNav(this.navIndex(sx, sz));
    let t = this.nearestFreeNav(this.navIndex(tx, tz));
    if (s === t) return [{ x: tx, z: tz }];
    const st = ++this.curStamp;
    const g = this.g, came = this.came, stamp = this.stamp, closed = this.closed;
    const tiX = t % NN, tjZ = Math.floor(t / NN);
    const h = (i) => {
      const dx = Math.abs((i % NN) - tiX), dz = Math.abs(Math.floor(i / NN) - tjZ);
      return (dx + dz) + (Math.SQRT2 - 2) * Math.min(dx, dz);
    };
    const heap = [];
    const push = (i, f) => {
      heap.push([f, i]);
      let k = heap.length - 1;
      while (k > 0) { const p = (k - 1) >> 1; if (heap[p][0] <= heap[k][0]) break; [heap[p], heap[k]] = [heap[k], heap[p]]; k = p; }
    };
    const pop = () => {
      const top = heap[0], last = heap.pop();
      if (heap.length) {
        heap[0] = last;
        let k = 0;
        for (;;) {
          const l = 2 * k + 1, r = l + 1;
          let m = k;
          if (l < heap.length && heap[l][0] < heap[m][0]) m = l;
          if (r < heap.length && heap[r][0] < heap[m][0]) m = r;
          if (m === k) break;
          [heap[m], heap[k]] = [heap[k], heap[m]]; k = m;
        }
      }
      return top;
    };
    g[s] = 0; stamp[s] = st; came[s] = -1;
    push(s, h(s));
    let best = s, bestH = h(s);
    let iter = 0;
    const dirs = [[1, 0, 1], [-1, 0, 1], [0, 1, 1], [0, -1, 1], [1, 1, Math.SQRT2], [1, -1, Math.SQRT2], [-1, 1, Math.SQRT2], [-1, -1, Math.SQRT2]];
    while (heap.length && iter++ < 8000) {
      const [, cur] = pop();
      if (closed[cur] === st) continue;
      closed[cur] = st;
      if (cur === t) { best = t; break; }
      const hc = h(cur);
      if (hc < bestH) { bestH = hc; best = cur; }
      const ci = cur % NN, cj = Math.floor(cur / NN);
      for (const [di, dj, cost] of dirs) {
        const ni = ci + di, nj = cj + dj;
        if (ni < 0 || nj < 0 || ni >= NN || nj >= NN) continue;
        const n = nj * NN + ni;
        if (this.nav[n] || closed[n] === st) continue;
        if (di && dj && (this.nav[cj * NN + ni] || this.nav[nj * NN + ci])) continue;
        const ng = g[cur] + cost;
        if (stamp[n] !== st || ng < g[n]) {
          stamp[n] = st; g[n] = ng; came[n] = cur;
          push(n, ng + h(n));
        }
      }
    }
    // 経路復元
    const cells = [];
    for (let c = best; c !== -1 && cells.length < 2000; c = came[c]) cells.push(c);
    cells.reverse();
    const pts = cells.map((c) => this.navCenter(c, { x: 0, z: 0 }));
    if (best === t) pts.push({ x: tx, z: tz });
    // 平滑化
    const out = [];
    let ax = sx, az = sz, i = 0;
    while (i < pts.length) {
      let j = pts.length - 1;
      while (j > i && !this.navLine(ax, az, pts[j].x, pts[j].z)) j--;
      out.push(pts[j]);
      ax = pts[j].x; az = pts[j].z;
      i = j + 1;
    }
    return out;
  }

  randomFreePoint(cx, cz, radius, rng = Math.random) {
    for (let k = 0; k < 60; k++) {
      const a = rng() * Math.PI * 2, d = Math.sqrt(rng()) * radius;
      const x = cx + Math.cos(a) * d, z = cz + Math.sin(a) * d;
      if (this.isFree(x, z, 2)) return { x, z };
    }
    return { x: 0, z: 18 };
  }
}
