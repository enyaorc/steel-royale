import * as THREE from 'three';
import { settings } from './settings.js';
import { scorchTexture, ringTexture } from './textures.js';
import { rand } from './util.js';

// パーティクル・ビーム・爆発などの視覚効果

const PART_VS = `
attribute float aSize;
attribute float aAlpha;
attribute vec3 aColor;
varying float vAlpha;
varying vec3 vColor;
uniform float uScale;
void main() {
  vAlpha = aAlpha;
  vColor = aColor;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * uScale / -mv.z;
  gl_Position = projectionMatrix * mv;
}`;
const PART_FS = `
varying float vAlpha;
varying vec3 vColor;
uniform float uSoft;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c) * 2.0;
  float a = smoothstep(1.0, uSoft, d) * vAlpha;
  if (a < 0.01) discard;
  gl_FragColor = vec4(vColor, a);
}`;

class ParticleSystem {
  constructor(max, additive) {
    this.max = max;
    this.count = 0;
    this.pos = new Float32Array(max * 3);
    this.vel = new Float32Array(max * 3);
    this.col0 = new Float32Array(max * 3);
    this.col1 = new Float32Array(max * 3);
    this.life = new Float32Array(max);
    this.maxLife = new Float32Array(max);
    this.size0 = new Float32Array(max);
    this.size1 = new Float32Array(max);
    this.grav = new Float32Array(max);
    this.drag = new Float32Array(max);
    this.alpha0 = new Float32Array(max);
    const geo = new THREE.BufferGeometry();
    this.aPos = new THREE.BufferAttribute(new Float32Array(max * 3), 3).setUsage(THREE.DynamicDrawUsage);
    this.aCol = new THREE.BufferAttribute(new Float32Array(max * 3), 3).setUsage(THREE.DynamicDrawUsage);
    this.aSize = new THREE.BufferAttribute(new Float32Array(max), 1).setUsage(THREE.DynamicDrawUsage);
    this.aAlpha = new THREE.BufferAttribute(new Float32Array(max), 1).setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('position', this.aPos);
    geo.setAttribute('aColor', this.aCol);
    geo.setAttribute('aSize', this.aSize);
    geo.setAttribute('aAlpha', this.aAlpha);
    geo.setDrawRange(0, 0);
    this.mat = new THREE.ShaderMaterial({
      vertexShader: PART_VS,
      fragmentShader: PART_FS,
      uniforms: { uScale: { value: 600 }, uSoft: { value: additive ? 0.0 : 0.3 } },
      transparent: true,
      depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.points = new THREE.Points(geo, this.mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = additive ? 3 : 2;
  }

  spawn(x, y, z, vx, vy, vz, life, s0, s1, c0, c1, grav = 0, drag = 0, alpha = 1) {
    if (this.count >= this.max) return;
    const i = this.count++;
    const i3 = i * 3;
    this.pos[i3] = x; this.pos[i3 + 1] = y; this.pos[i3 + 2] = z;
    this.vel[i3] = vx; this.vel[i3 + 1] = vy; this.vel[i3 + 2] = vz;
    this.col0[i3] = c0.r; this.col0[i3 + 1] = c0.g; this.col0[i3 + 2] = c0.b;
    this.col1[i3] = c1.r; this.col1[i3 + 1] = c1.g; this.col1[i3 + 2] = c1.b;
    this.life[i] = life; this.maxLife[i] = life;
    this.size0[i] = s0; this.size1[i] = s1;
    this.grav[i] = grav; this.drag[i] = drag; this.alpha0[i] = alpha;
  }

  update(dt) {
    const P = this.aPos.array, C = this.aCol.array, S = this.aSize.array, A = this.aAlpha.array;
    let i = 0;
    while (i < this.count) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        // 末尾と入れ替え
        const last = --this.count;
        if (i !== last) this.copy(last, i);
        continue;
      }
      const i3 = i * 3;
      const dr = Math.max(0, 1 - this.drag[i] * dt);
      this.vel[i3] *= dr; this.vel[i3 + 1] = this.vel[i3 + 1] * dr - this.grav[i] * dt; this.vel[i3 + 2] *= dr;
      this.pos[i3] += this.vel[i3] * dt; this.pos[i3 + 1] += this.vel[i3 + 1] * dt; this.pos[i3 + 2] += this.vel[i3 + 2] * dt;
      if (this.pos[i3 + 1] < 0.05) { this.pos[i3 + 1] = 0.05; this.vel[i3 + 1] *= -0.3; }
      const t = 1 - this.life[i] / this.maxLife[i];
      P[i3] = this.pos[i3]; P[i3 + 1] = this.pos[i3 + 1]; P[i3 + 2] = this.pos[i3 + 2];
      C[i3] = this.col0[i3] + (this.col1[i3] - this.col0[i3]) * t;
      C[i3 + 1] = this.col0[i3 + 1] + (this.col1[i3 + 1] - this.col0[i3 + 1]) * t;
      C[i3 + 2] = this.col0[i3 + 2] + (this.col1[i3 + 2] - this.col0[i3 + 2]) * t;
      S[i] = this.size0[i] + (this.size1[i] - this.size0[i]) * t;
      A[i] = this.alpha0[i] * (t < 0.1 ? t * 10 : 1 - (t - 0.1) / 0.9);
      i++;
    }
    this.points.geometry.setDrawRange(0, this.count);
    this.aPos.needsUpdate = this.aCol.needsUpdate = this.aSize.needsUpdate = this.aAlpha.needsUpdate = true;
  }

  copy(from, to) {
    const f3 = from * 3, t3 = to * 3;
    for (let k = 0; k < 3; k++) {
      this.pos[t3 + k] = this.pos[f3 + k]; this.vel[t3 + k] = this.vel[f3 + k];
      this.col0[t3 + k] = this.col0[f3 + k]; this.col1[t3 + k] = this.col1[f3 + k];
    }
    this.life[to] = this.life[from]; this.maxLife[to] = this.maxLife[from];
    this.size0[to] = this.size0[from]; this.size1[to] = this.size1[from];
    this.grav[to] = this.grav[from]; this.drag[to] = this.drag[from]; this.alpha0[to] = this.alpha0[from];
  }

  clear() { this.count = 0; this.points.geometry.setDrawRange(0, 0); }
}

const _c0 = new THREE.Color(), _c1 = new THREE.Color();
const WHITE = new THREE.Color(1, 1, 1);
const _v = new THREE.Vector3(), _q = new THREE.Quaternion();
const UP = new THREE.Vector3(0, 1, 0);

export class Effects {
  constructor(scene) {
    this.scene = scene;
    this.add = new ParticleSystem(6000, true);
    this.smoke = new ParticleSystem(2500, false);
    scene.add(this.add.points, this.smoke.points);
    this.shake = 0;
    this.items = []; // 時間で消えるメッシュ効果
    this.dmgNumbers = [];

    // ビーム
    this.beamGeo = new THREE.CylinderGeometry(1, 1, 1, 10, 1, true);
    this.beamGeo.rotateX(Math.PI / 2);
    this.beamGeo.translate(0, 0, 0.5);
    this.sphereGeo = new THREE.SphereGeometry(1, 20, 14);
    this.ringGeo = new THREE.PlaneGeometry(2, 2);
    this.ringGeo.rotateX(-Math.PI / 2);
    this.ringTex = ringTexture();
    this.scorchTex = scorchTexture();
    this.pool = { beam: [], sphere: [], ring: [], decal: [] };

    // フラッシュライト
    this.lights = [];
    for (let i = 0; i < 6; i++) {
      const l = new THREE.PointLight(0xffaa55, 0, 20, 1.6);
      l.position.set(0, -100, 0);
      scene.add(l);
      this.lights.push({ l, t: 0, dur: 1, peak: 0 });
    }
    this.lightIdx = 0;

    // 残骸
    this.debrisGeo = new THREE.BoxGeometry(1, 1, 1);
    this.debris = [];
  }

  get pmul() { return settings.graphics.particles; }

  setScale(h, fov) {
    const s = h / (2 * Math.tan((fov * Math.PI) / 360));
    this.add.mat.uniforms.uScale.value = s;
    this.smoke.mat.uniforms.uScale.value = s;
  }

  // ---- パーティクルヘルパー ----
  burst(pos, n, opt) {
    n = Math.max(1, Math.round(n * this.pmul));
    _c0.set(opt.color ?? 0xffffff);
    _c1.set(opt.color1 ?? opt.color ?? 0xffffff);
    const sys = opt.smoke ? this.smoke : this.add;
    const sp = opt.speed ?? 8;
    for (let i = 0; i < n; i++) {
      let dx = Math.random() * 2 - 1, dy = Math.random() * 2 - 1, dz = Math.random() * 2 - 1;
      if (opt.dir) {
        dx = opt.dir.x + dx * (opt.spread ?? 0.3); dy = opt.dir.y + dy * (opt.spread ?? 0.3); dz = opt.dir.z + dz * (opt.spread ?? 0.3);
      }
      if (opt.flat) dy = Math.abs(dy) * 0.2;
      if (opt.up) dy = Math.abs(dy) + opt.up;
      const l = Math.hypot(dx, dy, dz) || 1;
      const s = sp * (0.4 + Math.random() * 0.6);
      sys.spawn(
        pos.x + (Math.random() - 0.5) * (opt.jitter ?? 0), pos.y + (Math.random() - 0.5) * (opt.jitter ?? 0), pos.z + (Math.random() - 0.5) * (opt.jitter ?? 0),
        (dx / l) * s, (dy / l) * s, (dz / l) * s,
        (opt.life ?? 0.5) * (0.6 + Math.random() * 0.6),
        opt.size ?? 0.5, opt.size1 ?? 0.1, _c0, _c1, opt.grav ?? 0, opt.drag ?? 2, opt.alpha ?? 1,
      );
    }
  }

  trail(pos, color, size = 0.5, life = 0.25, smoke = false) {
    if (Math.random() > this.pmul) return;
    _c0.set(color);
    if (smoke) {
      _c1.set(0x222222);
      this.smoke.spawn(pos.x, pos.y, pos.z, rand(-0.5, 0.5), rand(0.5, 1.5), rand(-0.5, 0.5), life, size, size * 3, _c0, _c1, 0, 1, 0.5);
    } else {
      _c1.set(color).multiplyScalar(0.3);
      this.add.spawn(pos.x, pos.y, pos.z, rand(-0.3, 0.3), rand(-0.3, 0.3), rand(-0.3, 0.3), life, size, size * 0.2, _c0, _c1, 0, 2);
    }
  }

  // ---- メッシュ効果 ----
  getMesh(type, make) {
    const p = this.pool[type];
    const m = p.length ? p.pop() : make();
    m.visible = true;
    this.scene.add(m);
    return m;
  }

  beam(from, to, color, width = 0.2, dur = 0.15, core = true) {
    const make = () => new THREE.Mesh(this.beamGeo, new THREE.MeshBasicMaterial({ transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    const len = from.distanceTo(to);
    const outer = this.getMesh('beam', make);
    outer.material.color.set(color);
    outer.material.opacity = 0.9;
    outer.position.copy(from);
    outer.lookAt(to);
    outer.scale.set(width, width, len);
    this.items.push({ m: outer, type: 'beam', t: 0, dur, w: width, fade: 'beam' });
    if (core) {
      const inner = this.getMesh('beam', make);
      inner.material.color.set(0xffffff);
      inner.material.opacity = 1;
      inner.position.copy(from);
      inner.lookAt(to);
      inner.scale.set(width * 0.35, width * 0.35, len);
      this.items.push({ m: inner, type: 'beam', t: 0, dur, w: width * 0.35, fade: 'beam' });
    }
    return outer;
  }

  // 持続ビーム（外部から更新）
  persistentBeam(color, width) {
    const make = () => new THREE.Mesh(this.beamGeo, new THREE.MeshBasicMaterial({ transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    const outer = this.getMesh('beam', make);
    outer.material.color.set(color); outer.material.opacity = 0.85;
    const inner = this.getMesh('beam', make);
    inner.material.color.set(0xffffff); inner.material.opacity = 1;
    return {
      set(from, to, w = width) {
        const len = from.distanceTo(to);
        for (const [m, k] of [[outer, 1], [inner, 0.35]]) {
          m.position.copy(from); m.lookAt(to);
          m.scale.set(w * k * (0.9 + Math.random() * 0.2), w * k * (0.9 + Math.random() * 0.2), len);
        }
      },
      release: () => { this.release(outer, 'beam'); this.release(inner, 'beam'); },
    };
  }

  sphere(pos, r0, r1, color, dur, opacity = 0.8) {
    const m = this.getMesh('sphere', () => new THREE.Mesh(this.sphereGeo, new THREE.MeshBasicMaterial({ transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })));
    m.material.color.set(color);
    m.material.opacity = opacity;
    m.position.copy(pos);
    m.scale.setScalar(r0);
    this.items.push({ m, type: 'sphere', t: 0, dur, r0, r1, op: opacity, fade: 'grow' });
    return m;
  }

  ring(pos, r0, r1, color, dur, opacity = 1) {
    const m = this.getMesh('ring', () => new THREE.Mesh(this.ringGeo, new THREE.MeshBasicMaterial({ map: this.ringTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })));
    m.material.color.set(color);
    m.material.opacity = opacity;
    m.position.set(pos.x, 0.15, pos.z);
    m.scale.setScalar(r0);
    this.items.push({ m, type: 'ring', t: 0, dur, r0, r1, op: opacity, fade: 'grow' });
    return m;
  }

  // 範囲予告（外部から解放）
  telegraph(pos, r, color) {
    const m = this.getMesh('ring', () => new THREE.Mesh(this.ringGeo, new THREE.MeshBasicMaterial({ map: this.ringTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false })));
    m.material.color.set(color);
    m.material.opacity = 0.9;
    m.position.set(pos.x, 0.12, pos.z);
    m.scale.setScalar(r);
    return { m, release: () => this.release(m, 'ring') };
  }

  decal(pos, r) {
    const m = this.getMesh('decal', () => {
      const mm = new THREE.Mesh(this.ringGeo, new THREE.MeshBasicMaterial({ map: this.scorchTex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }));
      mm.renderOrder = 1;
      return mm;
    });
    m.material.opacity = 0.9;
    m.position.set(pos.x, 0.04 + Math.random() * 0.02, pos.z);
    m.rotation.y = Math.random() * 6;
    m.scale.setScalar(r);
    this.items.push({ m, type: 'decal', t: 0, dur: 12, op: 0.9, fade: 'late' });
  }

  release(m, type) {
    m.visible = false;
    this.scene.remove(m);
    this.pool[type].push(m);
  }

  flash(pos, color, intensity = 30, dur = 0.25, dist = 18) {
    const L = this.lights[this.lightIdx++ % this.lights.length];
    L.l.color.set(color);
    L.l.position.set(pos.x, Math.max(1.5, pos.y + 1), pos.z);
    L.l.distance = dist;
    L.t = dur; L.dur = dur; L.peak = intensity;
    L.l.intensity = intensity;
  }

  addShake(v) { if (settings.gameplay.shake) this.shake = Math.min(1.5, this.shake + v); }

  // ---- 複合効果 ----
  muzzle(pos, color, size = 1) {
    this.burst(pos, 4 * size, { color: 0xffffff, color1: color, speed: 4, life: 0.08, size: 0.9 * size, size1: 0.2 });
  }

  impact(pos, color, size = 1) {
    this.burst(pos, 8 * size, { color: 0xffffff, color1: color, speed: 9 * size, life: 0.25, size: 0.35, size1: 0.05, grav: 10, drag: 1 });
    this.burst(pos, 2, { color, speed: 1, life: 0.12, size: 1.6 * size, size1: 0.4 });
  }

  explosion(pos, radius, color = 0xff8a30, listener = null) {
    const p = _v.set(pos.x, Math.max(0.6, pos.y), pos.z).clone();
    this.sphere(p, radius * 0.2, radius * 0.9, 0xfff0c0, 0.22, 0.9);
    this.sphere(p, radius * 0.3, radius * 1.1, color, 0.45, 0.6);
    this.ring(p, radius * 0.3, radius * 1.3, color, 0.45);
    this.burst(p, 18 + radius * 5, { color: 0xffe0a0, color1: color, speed: radius * 5, life: 0.45, size: 1.2 + radius * 0.2, size1: 0.2, drag: 4, up: 0.2 });
    this.burst(p, 10 + radius * 3, { color: 0xffffff, color1: color, speed: radius * 9, life: 0.6, size: 0.3, size1: 0.05, grav: 18, drag: 0.5, up: 0.8 });
    this.burst(p, 8 + radius * 2, { smoke: true, color: 0x55504a, color1: 0x1a1a1a, speed: radius * 1.5, life: 1.6, size: radius * 0.8, size1: radius * 1.8, drag: 1.5, up: 0.6, alpha: 0.55, jitter: radius * 0.5 });
    this.flash(p, color, 40 + radius * 10, 0.3, radius * 5);
    this.decal(p, radius * 0.9);
    if (listener) {
      const d = Math.hypot(listener.x - pos.x, listener.z - pos.z);
      this.addShake(Math.max(0, (radius / 6) * (1 - d / 40)) * 0.6);
    }
  }

  debrisBurst(pos, color, n = 10) {
    for (let i = 0; i < n; i++) {
      const m = new THREE.Mesh(this.debrisGeo, new THREE.MeshStandardMaterial({ color: i % 3 === 0 ? 0x222222 : color, metalness: 0.6, roughness: 0.5 }));
      const s = 0.2 + Math.random() * 0.5;
      m.scale.set(s, s * (0.5 + Math.random()), s);
      m.position.set(pos.x, pos.y + 1 + Math.random() * 1.5, pos.z);
      m.castShadow = true;
      this.scene.add(m);
      const a = Math.random() * Math.PI * 2, sp = 4 + Math.random() * 9;
      this.debris.push({ m, vx: Math.cos(a) * sp, vy: 6 + Math.random() * 10, vz: Math.sin(a) * sp, rx: rand(-8, 8), rz: rand(-8, 8), t: 0, dur: 3 + Math.random() * 2 });
    }
  }

  damageNumber(pos, amount, color = '#ffffff', big = false) {
    if (!settings.gameplay.damageNumbers) return;
    this.dmgNumbers.push({ x: pos.x + rand(-0.6, 0.6), y: pos.y + 3.5, z: pos.z + rand(-0.6, 0.6), text: String(Math.round(amount)), color, t: 0, big });
  }

  update(dt) {
    this.add.update(dt);
    this.smoke.update(dt);
    for (let i = this.items.length - 1; i >= 0; i--) {
      const it = this.items[i];
      it.t += dt;
      const k = Math.min(1, it.t / it.dur);
      if (it.fade === 'beam') {
        it.m.material.opacity = 1 - k;
        const w = it.w * (1 - k * 0.7);
        it.m.scale.x = it.m.scale.y = w;
      } else if (it.fade === 'grow') {
        it.m.scale.setScalar(it.r0 + (it.r1 - it.r0) * (1 - Math.pow(1 - k, 3)));
        it.m.material.opacity = it.op * (1 - k);
      } else if (it.fade === 'late') {
        it.m.material.opacity = it.op * (k < 0.7 ? 1 : 1 - (k - 0.7) / 0.3);
      }
      if (it.t >= it.dur) {
        this.release(it.m, it.type);
        this.items.splice(i, 1);
      }
    }
    for (const L of this.lights) {
      if (L.t > 0) {
        L.t -= dt;
        L.l.intensity = L.peak * Math.max(0, L.t / L.dur);
        if (L.t <= 0) { L.l.intensity = 0; L.l.position.y = -100; }
      }
    }
    for (let i = this.debris.length - 1; i >= 0; i--) {
      const d = this.debris[i];
      d.t += dt;
      d.vy -= 25 * dt;
      d.m.position.x += d.vx * dt; d.m.position.y += d.vy * dt; d.m.position.z += d.vz * dt;
      if (d.m.position.y < 0.15) { d.m.position.y = 0.15; d.vy *= -0.35; d.vx *= 0.6; d.vz *= 0.6; d.rx *= 0.5; d.rz *= 0.5; }
      d.m.rotation.x += d.rx * dt; d.m.rotation.z += d.rz * dt;
      if (d.t < 1.2 && Math.random() < 0.3 * this.pmul) this.trail(d.m.position, 0x333333, 0.6, 0.8, true);
      if (d.t > d.dur) {
        this.scene.remove(d.m);
        d.m.material.dispose();
        this.debris.splice(i, 1);
      }
    }
    for (let i = this.dmgNumbers.length - 1; i >= 0; i--) {
      const n = this.dmgNumbers[i];
      n.t += dt;
      n.y += dt * 2.5;
      if (n.t > 0.9) this.dmgNumbers.splice(i, 1);
    }
    this.shake = Math.max(0, this.shake - dt * 2.5);
  }

  clear() {
    for (const it of this.items) this.release(it.m, it.type);
    this.items.length = 0;
    for (const d of this.debris) { this.scene.remove(d.m); d.m.material.dispose(); }
    this.debris.length = 0;
    this.add.clear(); this.smoke.clear();
    this.dmgNumbers.length = 0;
  }
}

export { WHITE, UP, _q };
