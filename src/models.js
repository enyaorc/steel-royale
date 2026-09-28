import * as THREE from 'three';
import { panelTexture } from './textures.js';
import { angleDiff, approachAngle, clamp } from './util.js';

// 手続き生成ロボットモデル

const geoCache = new Map();
function boxGeo(w, h, d) {
  const k = `b${w.toFixed(3)}_${h.toFixed(3)}_${d.toFixed(3)}`;
  let g = geoCache.get(k);
  if (!g) { g = new THREE.BoxGeometry(w, h, d); geoCache.set(k, g); }
  return g;
}
function cylGeo(rt, rb, h, seg = 12) {
  const k = `c${rt.toFixed(3)}_${rb.toFixed(3)}_${h.toFixed(3)}_${seg}`;
  let g = geoCache.get(k);
  if (!g) { g = new THREE.CylinderGeometry(rt, rb, h, seg); geoCache.set(k, g); }
  return g;
}
function sphGeo(r, ws = 16, hs = 12, phiLen = Math.PI * 2, thetaLen = Math.PI) {
  const k = `s${r.toFixed(3)}_${ws}_${hs}_${thetaLen.toFixed(2)}`;
  let g = geoCache.get(k);
  if (!g) { g = new THREE.SphereGeometry(r, ws, hs, 0, phiLen, 0, thetaLen); geoCache.set(k, g); }
  return g;
}
const coneGeo = (() => {
  // 噴射口側が太く、先端が下を向く炎
  const g = new THREE.ConeGeometry(1, 1, 10, 1, true);
  g.rotateX(Math.PI);
  g.translate(0, -0.5, 0);
  return g;
})();

function mesh(geo, mat, parent, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  m.castShadow = true;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}

function makeMaterials(def) {
  const c = def.colors;
  const primary = new THREE.MeshStandardMaterial({ color: 0xffffff, map: panelTexture(c.primary), metalness: 0.55, roughness: 0.42 });
  const secondary = new THREE.MeshStandardMaterial({ color: 0xffffff, map: panelTexture(c.secondary), metalness: 0.5, roughness: 0.5 });
  const dark = new THREE.MeshStandardMaterial({ color: c.dark, metalness: 0.75, roughness: 0.38 });
  const glow = new THREE.MeshStandardMaterial({ color: c.glow, emissive: c.glow, emissiveIntensity: 2.6, metalness: 0, roughness: 0.4 });
  const glass = new THREE.MeshStandardMaterial({ color: 0x0a1a24, emissive: c.glow, emissiveIntensity: 0.6, metalness: 0.9, roughness: 0.1 });
  const flame = new THREE.MeshBasicMaterial({ color: 0x9fd8ff, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
  flame.color.set(c.glow).lerp(new THREE.Color(0xffffff), 0.35);
  return { primary, secondary, dark, glow, glass, flame };
}

export class RobotModel {
  constructor(def) {
    this.def = def;
    const m = def.model;
    const b = m.bulk, L = m.legLen;
    this.mats = makeMaterials(def);
    const M = this.mats;
    this.root = new THREE.Group();
    this.inner = new THREE.Group(); // 跳躍などの高さ用
    this.inner.scale.setScalar(def.scale);
    this.root.add(this.inner);

    this.hipY = 1.85 * L;
    this.hips = new THREE.Group();
    this.hips.position.y = this.hipY;
    this.inner.add(this.hips);
    mesh(boxGeo(0.95 * b, 0.35, 0.6 * b), M.dark, this.hips, 0, 0, 0);
    mesh(boxGeo(0.7 * b, 0.25, 0.3), M.secondary, this.hips, 0, -0.05, 0.3);

    // 脚
    this.legs = [];
    for (const side of [-1, 1]) {
      const leg = {};
      leg.hip = new THREE.Group();
      leg.hip.position.set(side * 0.5 * b, -0.05, 0);
      this.hips.add(leg.hip);
      mesh(sphGeo(0.22 * b), M.dark, leg.hip);
      mesh(boxGeo(0.4 * b, 0.85 * L, 0.5 * b), M.primary, leg.hip, 0, -0.42 * L, 0);
      mesh(boxGeo(0.44 * b, 0.35 * L, 0.2), M.secondary, leg.hip, side * 0.03, -0.35 * L, 0.26 * b);
      leg.knee = new THREE.Group();
      leg.knee.position.y = -0.85 * L;
      leg.hip.add(leg.knee);
      mesh(sphGeo(0.2 * b), M.dark, leg.knee);
      mesh(boxGeo(0.34 * b, 0.28, 0.25), M.secondary, leg.knee, 0, 0.02, 0.2 * b);
      mesh(boxGeo(0.36 * b, 0.85 * L, 0.44 * b), M.primary, leg.knee, 0, -0.42 * L, -0.02);
      mesh(boxGeo(0.18 * b, 0.4 * L, 0.18 * b), M.dark, leg.knee, 0, -0.45 * L, -0.25 * b);
      leg.ankle = new THREE.Group();
      leg.ankle.position.y = -0.85 * L;
      leg.knee.add(leg.ankle);
      mesh(boxGeo(0.55 * b, 0.2, 1.0 * b), M.dark, leg.ankle, 0, -0.06, 0.12);
      mesh(boxGeo(0.5 * b, 0.12, 0.4 * b), M.secondary, leg.ankle, 0, 0.06, 0.35 * b);
      this.legs.push(leg);
    }

    // 胴体
    this.torso = new THREE.Group();
    this.torso.position.y = 0.2;
    this.hips.add(this.torso);
    const tw = 1.35 * b, td = 0.95 * b;
    mesh(boxGeo(0.6 * b, 0.4, 0.5 * b), M.dark, this.torso, 0, 0.15, 0);
    this.chest = mesh(boxGeo(tw, 0.95, td), M.primary, this.torso, 0, 0.75, 0);
    mesh(boxGeo(tw * 0.8, 0.5, 0.2), M.secondary, this.torso, 0, 0.85, td / 2 + 0.05);
    mesh(boxGeo(tw * 0.5, 0.08, 0.05), M.glow, this.torso, 0, 0.62, td / 2 + 0.16);
    mesh(boxGeo(tw * 1.05, 0.2, td * 0.9), M.dark, this.torso, 0, 1.25, 0);

    // 頭
    this.head = new THREE.Group();
    this.head.position.set(0, 1.35, 0.1);
    this.torso.add(this.head);
    this.buildHead(m.head, b);

    // 腕
    this.arms = [];
    this.muzzles = [];
    for (const side of [-1, 1]) {
      const arm = {};
      arm.shoulder = new THREE.Group();
      arm.shoulder.position.set(side * (tw / 2 + 0.28 * b), 1.0, 0);
      this.torso.add(arm.shoulder);
      mesh(sphGeo(0.24 * b), M.dark, arm.shoulder);
      mesh(boxGeo(0.55 * b, 0.4 * b, 0.7 * b), M.primary, arm.shoulder, side * 0.08, 0.15, 0);
      mesh(boxGeo(0.28 * b, 0.6, 0.3 * b), M.dark, arm.shoulder, 0, -0.35, 0);
      arm.elbow = new THREE.Group();
      arm.elbow.position.set(0, -0.62, 0);
      arm.shoulder.add(arm.elbow);
      mesh(sphGeo(0.17 * b), M.dark, arm.elbow);
      mesh(boxGeo(0.34 * b, 0.34 * b, 0.75), M.secondary, arm.elbow, 0, 0, 0.3);
      const weapon = side > 0 ? m.weaponR : m.weaponL;
      arm.weapon = new THREE.Group();
      arm.weapon.position.set(0, 0, 0.55);
      arm.elbow.add(arm.weapon);
      const muzzle = this.buildWeapon(weapon, arm.weapon, side, b);
      if (muzzle) { this.muzzles.push(muzzle); }
      this.arms.push(arm);
    }
    this.buildShoulder(m.shoulder, tw, b);
    this.buildBack(m.back, tw, td, b);

    if (this.muzzles.length === 0) {
      const mz = new THREE.Object3D();
      mz.position.set(0, 0.9, 1.0);
      this.torso.add(mz);
      this.muzzles.push(mz);
    }
    // 右手の銃口を優先
    this.muzzles.reverse();

    this.flameMeshes = [];
    this.root.traverse((o) => {
      if (o.userData.flame) this.flameMeshes.push(o);
    });

    // 状態
    this.legsYaw = 0;
    this.walkPhase = 0;
    this.walkAmp = 0;
    this.recoilT = [0, 0];
    this.flashT = 0;
    this.spin = 0;
    this.gatSpin = 0;
    this.thrust = 0;
    this.opacity = 1;
    this.allMats = Object.values(M);
    this.baseEmissive = this.allMats.map((mt) => (mt.emissive ? mt.emissive.clone() : null));
    this.baseEmissiveInt = this.allMats.map((mt) => mt.emissiveIntensity ?? 0);
  }

  buildHead(type, b) {
    const M = this.mats, h = this.head;
    switch (type) {
      case 'bunker':
        mesh(boxGeo(0.85, 0.32, 0.6), M.secondary, h, 0, 0.0, 0);
        for (const x of [-0.22, 0, 0.22]) mesh(boxGeo(0.12, 0.08, 0.05), M.glow, h, x, 0.02, 0.31);
        break;
      case 'mono':
        mesh(boxGeo(0.34, 0.5, 0.5), M.secondary, h, 0, 0.12, 0);
        mesh(cylGeo(0.1, 0.1, 0.08, 12), M.glow, h, 0, 0.18, 0.27, Math.PI / 2);
        mesh(boxGeo(0.05, 0.5, 0.4), M.primary, h, 0.2, 0.25, -0.1, 0.3);
        mesh(boxGeo(0.05, 0.5, 0.4), M.primary, h, -0.2, 0.25, -0.1, 0.3);
        break;
      case 'horn':
        mesh(boxGeo(0.5, 0.36, 0.5), M.secondary, h, 0, 0.1, 0);
        mesh(boxGeo(0.4, 0.07, 0.05), M.glow, h, 0, 0.12, 0.26);
        mesh(boxGeo(0.06, 0.5, 0.06), M.primary, h, 0.18, 0.4, 0.1, 0, 0, -0.5);
        mesh(boxGeo(0.06, 0.5, 0.06), M.primary, h, -0.18, 0.4, 0.1, 0, 0, 0.5);
        break;
      case 'dome':
        mesh(cylGeo(0.36, 0.4, 0.2, 16), M.secondary, h, 0, 0.0, 0);
        mesh(sphGeo(0.34, 16, 10, Math.PI * 2, Math.PI / 2), M.glass, h, 0, 0.08, 0);
        break;
      case 'grille':
        mesh(boxGeo(0.6, 0.42, 0.55), M.secondary, h, 0, 0.12, 0);
        mesh(boxGeo(0.44, 0.24, 0.05), M.glow, h, 0, 0.12, 0.27);
        for (let i = -2; i <= 2; i++) mesh(boxGeo(0.04, 0.3, 0.06), M.dark, h, i * 0.09, 0.12, 0.3);
        break;
      default: // visor
        mesh(boxGeo(0.52, 0.4, 0.52), M.secondary, h, 0, 0.12, 0);
        mesh(boxGeo(0.46, 0.1, 0.05), M.glow, h, 0, 0.16, 0.27);
        mesh(boxGeo(0.03, 0.4, 0.03), M.dark, h, 0.2, 0.5, -0.1);
        break;
    }
  }

  buildWeapon(type, g, side, b) {
    const M = this.mats;
    const mz = new THREE.Object3D();
    switch (type) {
      case 'rifle':
        mesh(boxGeo(0.24, 0.32, 1.2), M.dark, g, 0, -0.05, 0.45);
        mesh(boxGeo(0.26, 0.12, 0.6), M.primary, g, 0, 0.14, 0.3);
        mesh(cylGeo(0.07, 0.07, 0.7, 8), M.dark, g, 0, 0, 1.3, Math.PI / 2);
        mesh(boxGeo(0.05, 0.06, 0.8), M.glow, g, 0.13, -0.02, 0.5);
        mz.position.set(0, 0, 1.7);
        break;
      case 'gatling': {
        mesh(boxGeo(0.45, 0.45, 0.7), M.dark, g, 0, 0, 0.2);
        const spin = new THREE.Group();
        spin.position.set(0, 0, 0.6);
        g.add(spin);
        for (let i = 0; i < 6; i++) {
          const a = (i / 6) * Math.PI * 2;
          mesh(cylGeo(0.05, 0.05, 1.0, 6), M.dark, spin, Math.cos(a) * 0.14, Math.sin(a) * 0.14, 0.45, Math.PI / 2);
        }
        mesh(cylGeo(0.22, 0.22, 0.12, 12), M.primary, spin, 0, 0, 0.75, Math.PI / 2);
        this.gatlings = this.gatlings || [];
        this.gatlings.push(spin);
        mz.position.set(0, 0, 1.2);
        break;
      }
      case 'railgun':
        mesh(boxGeo(0.3, 0.3, 0.8), M.dark, g, 0, 0, 0.2);
        mesh(boxGeo(0.07, 0.1, 2.4), M.secondary, g, 0.1, 0, 1.4);
        mesh(boxGeo(0.07, 0.1, 2.4), M.secondary, g, -0.1, 0, 1.4);
        mesh(boxGeo(0.05, 0.05, 2.2), M.glow, g, 0, 0, 1.4);
        mesh(boxGeo(0.1, 0.2, 0.3), M.primary, g, 0, 0.18, 0.4);
        mz.position.set(0, 0, 2.7);
        break;
      case 'blade':
        mesh(boxGeo(0.3, 0.3, 0.5), M.dark, g, 0, 0, 0.1);
        mesh(boxGeo(0.06, 0.26, 1.9), M.glow, g, side * 0.12, 0, 1.2);
        mesh(boxGeo(0.1, 0.3, 0.3), M.primary, g, side * 0.12, 0, 0.25);
        mz.position.set(0, 0, 1.2);
        break;
      case 'cannon':
        mesh(cylGeo(0.26, 0.3, 0.9, 12), M.dark, g, 0, 0, 0.45, Math.PI / 2);
        mesh(cylGeo(0.3, 0.3, 0.2, 12), M.secondary, g, 0, 0, 0.8, Math.PI / 2);
        mesh(sphGeo(0.2), M.glow, g, 0, 0, 1.0);
        mz.position.set(0, 0, 1.25);
        break;
      case 'flamer':
        mesh(boxGeo(0.34, 0.34, 0.6), M.dark, g, 0, 0, 0.2);
        mesh(cylGeo(0.1, 0.16, 0.8, 10), M.secondary, g, 0, 0, 0.85, Math.PI / 2);
        mesh(cylGeo(0.05, 0.05, 0.9, 6), M.dark, g, 0.18, 0.1, 0.5, Math.PI / 2);
        mesh(sphGeo(0.06), M.glow, g, 0, -0.13, 1.25);
        mz.position.set(0, 0, 1.35);
        break;
      case 'shield':
        mesh(boxGeo(0.12, 1.1, 0.9), M.secondary, g, side * 0.25, -0.1, 0.1);
        mesh(boxGeo(0.14, 0.7, 0.08), M.glow, g, side * 0.25, -0.1, 0.1);
        return null;
      default:
        mesh(boxGeo(0.34, 0.3, 0.34), M.dark, g, 0, 0, 0.1);
        return null;
    }
    g.add(mz);
    return mz;
  }

  buildShoulder(type, tw, b) {
    const M = this.mats;
    const L = this.arms[0].shoulder, R = this.arms[1].shoulder;
    switch (type) {
      case 'pod': {
        const p = new THREE.Group();
        p.position.set(-0.1, 0.55, -0.1);
        L.add(p);
        mesh(boxGeo(0.55, 0.45, 0.7), M.secondary, p);
        for (let i = 0; i < 3; i++) for (let j = 0; j < 2; j++) mesh(cylGeo(0.06, 0.06, 0.05, 8), M.glow, p, -0.15 + i * 0.15, -0.08 + j * 0.16, 0.36, Math.PI / 2);
        break;
      }
      case 'rocket': {
        const p = new THREE.Group();
        p.position.set(0.1, 0.65, -0.05);
        R.add(p);
        mesh(boxGeo(0.7, 0.55, 1.1), M.secondary, p);
        for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) mesh(cylGeo(0.1, 0.1, 0.05, 10), M.dark, p, -0.17 + i * 0.34, -0.12 + j * 0.24, 0.56, Math.PI / 2);
        mesh(boxGeo(0.75, 0.08, 0.8), M.glow, p, 0, 0.3, -0.05);
        break;
      }
      case 'spike':
        for (const [s, sh] of [[-1, L], [1, R]]) mesh(new THREE.ConeGeometry(0.16, 0.7, 6), M.secondary, sh, s * 0.18, 0.5, -0.05, 0, 0, -s * 0.5);
        break;
      case 'antenna':
        mesh(cylGeo(0.025, 0.025, 1.4, 6), M.dark, L, 0, 1.0, -0.2);
        mesh(sphGeo(0.07), M.glow, L, 0, 1.72, -0.2);
        break;
      case 'vent':
        for (const sh of [L, R]) {
          mesh(cylGeo(0.12, 0.14, 0.6, 8), M.dark, sh, 0, 0.55, -0.15);
          mesh(cylGeo(0.09, 0.09, 0.05, 8), M.glow, sh, 0, 0.86, -0.15);
        }
        break;
      default: break;
    }
  }

  buildBack(type, tw, td, b) {
    const M = this.mats, t = this.torso;
    const back = new THREE.Group();
    back.position.set(0, 0.8, -td / 2 - 0.1);
    t.add(back);
    const addThruster = (x, y, z, s = 1) => {
      mesh(cylGeo(0.14 * s, 0.2 * s, 0.4 * s, 10), M.dark, back, x, y, z);
      const f = new THREE.Mesh(coneGeo, M.flame);
      f.position.set(x, y - 0.2 * s, z);
      f.scale.set(0.16 * s, 0.6, 0.16 * s);
      f.userData.flame = s;
      back.add(f);
    };
    switch (type) {
      case 'block':
        mesh(boxGeo(tw * 0.9, 0.9, 0.6), M.secondary, back, 0, 0.1, -0.2);
        mesh(boxGeo(tw * 0.7, 0.08, 0.1), M.glow, back, 0, 0.35, -0.52);
        addThruster(-0.4, -0.45, -0.25, 1.3);
        addThruster(0.4, -0.45, -0.25, 1.3);
        break;
      case 'fins':
        mesh(boxGeo(0.06, 1.0, 0.7), M.primary, back, 0.3, 0.5, -0.1, -0.4, 0, 0.2);
        mesh(boxGeo(0.06, 1.0, 0.7), M.primary, back, -0.3, 0.5, -0.1, -0.4, 0, -0.2);
        mesh(boxGeo(0.5, 0.5, 0.35), M.dark, back, 0, 0, -0.1);
        addThruster(0, -0.35, -0.15, 0.9);
        break;
      case 'dish':
        mesh(boxGeo(0.8, 0.7, 0.45), M.secondary, back, 0, 0, -0.1);
        mesh(cylGeo(0.5, 0.2, 0.12, 16), M.dark, back, 0.25, 0.75, -0.25, -0.6, 0, 0.3);
        mesh(sphGeo(0.06), M.glow, back, 0.25, 0.85, -0.2);
        addThruster(-0.25, -0.45, -0.1, 0.9);
        addThruster(0.25, -0.45, -0.1, 0.9);
        break;
      case 'tanks':
        mesh(cylGeo(0.26, 0.26, 1.1, 12), M.secondary, back, -0.3, 0.05, -0.2);
        mesh(cylGeo(0.26, 0.26, 1.1, 12), M.secondary, back, 0.3, 0.05, -0.2);
        mesh(boxGeo(0.9, 0.12, 0.1), M.glow, back, 0, 0.3, -0.48);
        addThruster(0, -0.6, -0.15, 1.1);
        break;
      default: // thrusters
        mesh(boxGeo(0.8, 0.7, 0.4), M.secondary, back, 0, 0, -0.05);
        addThruster(-0.28, -0.5, -0.1);
        addThruster(0.28, -0.5, -0.1);
        mesh(boxGeo(0.12, 0.6, 0.35), M.primary, back, 0.52, 0.2, -0.1, 0, 0, -0.2);
        mesh(boxGeo(0.12, 0.6, 0.35), M.primary, back, -0.52, 0.2, -0.1, 0, 0, 0.2);
        break;
    }
  }

  getMuzzle(i, out) {
    const mz = this.muzzles[i % this.muzzles.length];
    mz.updateWorldMatrix(true, false);
    return out.setFromMatrixPosition(mz.matrixWorld);
  }

  recoil(side = 0) { this.recoilT[side % 2] = 1; }
  flash() { this.flashT = 0.12; }

  setOpacity(o) {
    if (Math.abs(o - this.opacity) < 0.001) return;
    this.opacity = o;
    const tr = o < 0.999;
    for (const mt of this.allMats) {
      if (mt === this.mats.flame) continue;
      mt.transparent = tr;
      mt.opacity = o;
      mt.depthWrite = !tr;
      mt.needsUpdate = true;
    }
    this.root.traverse((ob) => { if (ob.isMesh) ob.castShadow = !tr; });
  }

  // state: {speedNorm, moveYaw, moving, aimYaw, boost, dt, spin, airborne, stunned}
  update(dt, s) {
    // 脚の向き
    let walkDir = 1;
    if (s.moving) {
      let target = s.moveYaw;
      if (Math.abs(angleDiff(s.aimYaw, s.moveYaw)) > Math.PI * 0.6) { target = s.moveYaw + Math.PI; walkDir = -1; }
      this.legsYaw = approachAngle(this.legsYaw, target, dt * 10);
    } else if (Math.abs(angleDiff(this.legsYaw, s.aimYaw)) > 0.9) {
      this.legsYaw = approachAngle(this.legsYaw, s.aimYaw, dt * 5);
    }
    this.root.rotation.y = this.legsYaw;

    const ampTarget = s.moving ? clamp(s.speedNorm, 0, 1.3) : 0;
    this.walkAmp += (ampTarget - this.walkAmp) * Math.min(1, dt * 8);
    this.walkPhase += dt * walkDir * (4 + 5 * s.speedNorm) * (s.moving ? 1 : 0);
    const a = this.walkAmp * (s.boost ? 0.2 : 1) * (s.airborne ? 0 : 1);
    const p = this.walkPhase;

    for (let i = 0; i < 2; i++) {
      const leg = this.legs[i];
      const ph = p + (i === 0 ? 0 : Math.PI);
      const thigh = -Math.sin(ph) * 0.55 * a - 0.12 - (s.airborne ? 0.5 : 0);
      const knee = 0.25 + Math.max(0, Math.cos(ph)) * 0.7 * a + (s.airborne ? 0.9 : 0);
      leg.hip.rotation.x = thigh;
      leg.knee.rotation.x = knee;
      leg.ankle.rotation.x = -(thigh + knee);
    }
    const bob = Math.abs(Math.cos(p)) * 0.1 * a;
    this.hips.position.y = this.hipY - 0.08 - bob + (s.boost ? 0.05 : 0);

    // 胴体を照準方向へ
    const tYaw = angleDiff(this.legsYaw, s.aimYaw);
    if (s.spin) {
      this.spin += dt * 22;
      this.torso.rotation.y = this.spin;
    } else {
      this.spin = 0;
      this.torso.rotation.y = tYaw;
    }
    const lean = s.boost ? 0.35 : s.moving ? 0.08 * a : 0;
    this.torso.rotation.x += (lean - this.torso.rotation.x) * Math.min(1, dt * 8);
    this.torso.rotation.z = Math.sin(p) * 0.03 * a;

    // 腕（反動）
    for (let i = 0; i < 2; i++) {
      this.recoilT[i] = Math.max(0, this.recoilT[i] - dt * 7);
      const arm = this.arms[1 - i];
      arm.elbow.position.z = -this.recoilT[i] * 0.25;
      arm.shoulder.rotation.x = Math.sin(p + (i ? 0 : Math.PI)) * 0.06 * a + (s.stunned ? 0.6 : 0);
    }
    if (this.gatlings) for (const gs of this.gatlings) gs.rotation.z += dt * this.gatSpin;
    this.gatSpin = Math.max(0, this.gatSpin - dt * 30);

    // スラスター炎
    const thr = s.boost ? 1.8 : s.airborne ? 1.4 : s.moving ? 0.5 : 0.25;
    this.thrust += (thr - this.thrust) * Math.min(1, dt * 12);
    for (const f of this.flameMeshes) {
      const k = f.userData.flame;
      f.scale.set(0.16 * k * (0.8 + this.thrust * 0.3), (0.3 + this.thrust * 0.9 + Math.random() * 0.15) * k, 0.16 * k * (0.8 + this.thrust * 0.3));
    }

    // 被弾フラッシュ
    if (this.flashT > 0 || this._flashing) {
      this.flashT -= dt;
      const on = this.flashT > 0;
      this._flashing = on;
      for (let i = 0; i < this.allMats.length; i++) {
        const mt = this.allMats[i];
        if (!mt.emissive || mt === this.mats.glow) continue;
        if (on) { mt.emissive.setRGB(1, 0.9, 0.8); mt.emissiveIntensity = 0.6; }
        else { mt.emissive.copy(this.baseEmissive[i]); mt.emissiveIntensity = this.baseEmissiveInt[i]; }
      }
    }
  }

  dispose() {
    for (const mt of this.allMats) mt.dispose();
  }
}
