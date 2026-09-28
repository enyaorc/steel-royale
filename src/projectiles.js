import * as THREE from 'three';
import { angleDiff } from './util.js';

// 弾道処理

const _p = new THREE.Vector3();
const _t = new THREE.Vector3();

export class ProjectileSystem {
  constructor(game) {
    this.game = game;
    this.list = [];
    this.sphere = new THREE.SphereGeometry(1, 10, 8);
    this.cyl = new THREE.CylinderGeometry(0.5, 0.5, 1, 8);
    this.cyl.rotateX(Math.PI / 2);
    this.mats = new Map();
    this.pool = [];
    this.darkMat = new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.7, roughness: 0.4 });
  }

  mat(color) {
    let m = this.mats.get(color);
    if (!m) {
      m = new THREE.MeshBasicMaterial({ color, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
      m.color.multiplyScalar(1.6);
      this.mats.set(color, m);
    }
    return m;
  }

  makeMesh(kind, color, width) {
    let m;
    const g = new THREE.Group();
    if (kind === 'missile' || kind === 'rocket') {
      const s = kind === 'rocket' ? 1.8 : 1;
      const body = new THREE.Mesh(this.cyl, this.darkMat);
      body.scale.set(0.22 * s, 0.22 * s, 0.9 * s);
      const glow = new THREE.Mesh(this.sphere, this.mat(color));
      glow.scale.set(0.2 * s, 0.2 * s, 0.35 * s);
      glow.position.z = -0.5 * s;
      g.add(body, glow);
    } else if (kind === 'shell' || kind === 'grenade') {
      const body = new THREE.Mesh(this.sphere, this.darkMat);
      body.scale.setScalar(0.3);
      const glow = new THREE.Mesh(this.sphere, this.mat(color));
      glow.scale.setScalar(0.42);
      g.add(body, glow);
    } else if (kind === 'hook') {
      const body = new THREE.Mesh(this.cyl, this.darkMat);
      body.scale.set(0.3, 0.3, 0.8);
      const glow = new THREE.Mesh(this.sphere, this.mat(color));
      glow.scale.set(0.3, 0.3, 0.3);
      glow.position.z = 0.4;
      g.add(body, glow);
    } else if (kind === 'orb') {
      m = new THREE.Mesh(this.sphere, this.mat(color));
      m.scale.setScalar(width);
      const core = new THREE.Mesh(this.sphere, this.mat(0xffffff));
      core.scale.setScalar(width * 0.5);
      g.add(m, core);
    } else {
      m = new THREE.Mesh(this.sphere, this.mat(color));
      m.scale.set(width, width, 1.4);
      const core = new THREE.Mesh(this.sphere, this.mat(0xffffff));
      core.scale.set(width * 0.45, width * 0.45, 1.1);
      g.add(m, core);
    }
    return g;
  }

  spawn(o) {
    const p = {
      owner: o.owner, kind: o.kind || 'bolt', color: o.color ?? 0xffffff,
      pos: new THREE.Vector3(o.x, o.y, o.z),
      vel: new THREE.Vector3(o.dirX * o.speed, 0, o.dirZ * o.speed),
      speed: o.speed, dmg: o.dmg, range: o.range, travelled: 0, radius: o.radius ?? 0.35,
      aoe: o.aoe || 0, aoeDmg: o.aoeDmg ?? o.dmg, homing: o.homing || null, homingPoint: o.homingPoint || null, turn: o.turn || 0,
      opts: o.opts || {}, onHit: o.onHit || null, onEnd: o.onEnd || null, delay: o.delay || 0, t: 0,
      explodeAtEnd: o.explodeAtEnd ?? (o.aoe > 0), dead: false, pierce: o.pierce ? new Set() : null, width: o.width ?? 0.2,
    };
    p.mesh = this.makeMesh(p.kind, p.color, p.width);
    p.mesh.position.copy(p.pos);
    _t.copy(p.pos).add(p.vel);
    p.mesh.lookAt(_t);
    this.game.scene.add(p.mesh);
    this.list.push(p);
    return p;
  }

  // 放物線投射
  lob(o) {
    const p = {
      lob: true, owner: o.owner, kind: o.kind || 'grenade', color: o.color ?? 0xffaa00,
      from: new THREE.Vector3(o.from.x, o.from.y, o.from.z), to: new THREE.Vector3(o.to.x, 0.3, o.to.z),
      pos: new THREE.Vector3().copy(o.from), dur: o.dur, height: o.height ?? 6, t: 0, onLand: o.onLand, dead: false,
      trailSmoke: o.trailSmoke ?? true,
    };
    p.mesh = this.makeMesh(p.kind, p.color, 0.3);
    p.mesh.position.copy(p.pos);
    this.game.scene.add(p.mesh);
    this.list.push(p);
    return p;
  }

  update(dt) {
    const game = this.game;
    const fx = game.fx;
    for (const p of this.list) {
      if (p.dead) continue;
      p.t += dt;
      if (p.lob) {
        const k = Math.min(1, p.t / p.dur);
        p.pos.lerpVectors(p.from, p.to, k);
        p.pos.y += Math.sin(k * Math.PI) * p.height;
        p.mesh.position.copy(p.pos);
        fx.trail(p.pos, p.color, 0.5, 0.25);
        if (p.trailSmoke && Math.random() < 0.5) fx.trail(p.pos, 0x666666, 0.5, 0.6, true);
        if (k >= 1) { p.dead = true; p.onLand && p.onLand(p.to.clone()); }
        continue;
      }
      if (p.delay > 0) { p.delay -= dt; p.pos.y += dt * 4; p.mesh.position.copy(p.pos); continue; }

      // 誘導
      if (p.turn > 0) {
        let tx = null, tz = null;
        if (p.homing && p.homing.alive && !p.homing.isCloakedFrom(p.owner)) { tx = p.homing.pos.x; tz = p.homing.pos.z; }
        else if (p.homingPoint) { tx = p.homingPoint.x; tz = p.homingPoint.z; }
        if (tx !== null) {
          const cur = Math.atan2(p.vel.x, p.vel.z);
          const want = Math.atan2(tx - p.pos.x, tz - p.pos.z);
          const d = angleDiff(cur, want);
          const na = cur + Math.max(-p.turn * dt, Math.min(p.turn * dt, d));
          p.vel.set(Math.sin(na) * p.speed, 0, Math.cos(na) * p.speed);
        }
      }

      const stepLen = p.speed * dt;
      const sub = Math.max(1, Math.ceil(stepLen / 0.7));
      const sx = p.vel.x * dt / sub, sz = p.vel.z * dt / sub;
      for (let s = 0; s < sub && !p.dead; s++) {
        p.pos.x += sx; p.pos.z += sz;
        p.travelled += stepLen / sub;
        // 壁
        if (game.map.occAt(p.pos.x, p.pos.z) > p.pos.y) {
          p.pos.x -= sx * 0.5; p.pos.z -= sz * 0.5;
          this.finish(p, null);
          break;
        }
        // ロボット
        for (const r of game.robots) {
          if (!r.alive || r === p.owner || (p.pierce && p.pierce.has(r))) continue;
          const dx = r.pos.x - p.pos.x, dz = r.pos.z - p.pos.z;
          const rr = r.radius + p.radius;
          if (dx * dx + dz * dz < rr * rr) {
            if (p.pierce) { p.pierce.add(r); game.damage(r, p.dmg, p.owner, p.opts); fx.impact(p.pos, p.color); continue; }
            this.finish(p, r);
            break;
          }
        }
        // タレット
        if (!p.dead && game.hitDeployables(p)) break;
      }
      if (p.dead) continue;
      if (p.travelled >= p.range) { this.finish(p, null, true); continue; }
      p.mesh.position.copy(p.pos);
      _t.copy(p.pos).add(p.vel);
      p.mesh.lookAt(_t);
      if (p.kind === 'missile' || p.kind === 'rocket') {
        _p.copy(p.vel).normalize().multiplyScalar(-0.7).add(p.pos);
        fx.trail(_p, p.color, p.kind === 'rocket' ? 1.0 : 0.6, 0.2);
        if (Math.random() < 0.7) fx.trail(_p, 0x777777, p.kind === 'rocket' ? 0.8 : 0.5, 0.7, true);
      } else if (p.kind === 'orb') {
        fx.trail(p.pos, p.color, p.width * 2.5, 0.2);
      } else if (p.kind === 'hook') {
        if (p.owner.alive) {
          p.owner.model.getMuzzle(0, _p);
          if (!p.chain) p.chain = fx.persistentBeam(p.color, 0.08);
          p.chain.set(_p, p.pos, 0.08);
        }
      }
    }
    // 片付け
    for (let i = this.list.length - 1; i >= 0; i--) {
      const p = this.list[i];
      if (p.dead) {
        this.game.scene.remove(p.mesh);
        if (p.chain) p.chain.release();
        this.list.splice(i, 1);
      }
    }
  }

  finish(p, target, expired = false) {
    const game = this.game;
    p.dead = true;
    if (p.onHit) { p.onHit(p, target, p.pos.clone(), expired); return; }
    if (p.aoe > 0 && (!expired || p.explodeAtEnd)) {
      game.explode(p.pos, p.aoe, p.aoeDmg, p.owner, { ...p.opts, color: p.color, direct: target, directDmg: p.dmg });
      return;
    }
    if (target) {
      game.damage(target, p.dmg, p.owner, { ...p.opts, dir: p.vel });
      game.fx.impact(p.pos, p.color, 1);
    } else if (!expired) {
      game.fx.impact(p.pos, p.color, 0.7);
    }
  }

  clear() {
    for (const p of this.list) { this.game.scene.remove(p.mesh); if (p.chain) p.chain.release(); }
    this.list.length = 0;
  }
}
