import * as THREE from 'three';
import { pointSegDist, angleDiff, rand } from './util.js';

// 通常攻撃・スキル・ウルトの実装

const _m = new THREE.Vector3();
const _a = new THREE.Vector3();
const _b = new THREE.Vector3();

function muzzle(r, i = 0) {
  return r.model.getMuzzle(i, new THREE.Vector3());
}
function dirOf(yaw) { return { x: Math.sin(yaw), z: Math.cos(yaw) }; }
function aimPoint(r, maxD, minD = 0) {
  const dx = r.aim.x - r.pos.x, dz = r.aim.z - r.pos.z;
  const d = Math.hypot(dx, dz);
  const k = d > maxD ? maxD / d : d < minD && d > 0.01 ? minD / d : 1;
  if (d < 0.01) { const f = dirOf(r.aimYaw); return new THREE.Vector3(r.pos.x + f.x * minD, 0, r.pos.z + f.z * minD); }
  return new THREE.Vector3(r.pos.x + dx * k, 0, r.pos.z + dz * k);
}
function enemiesIn(game, r, x, z, rad) {
  return game.robots.filter((o) => game.isEnemy(r, o) && o.alive && Math.hypot(o.pos.x - x, o.pos.z - z) < rad + o.radius);
}
function coneTargets(game, r, range, halfAngle) {
  const res = [];
  for (const o of game.robots) {
    if (!game.isEnemy(r, o) || !o.alive) continue;
    const dx = o.pos.x - r.pos.x, dz = o.pos.z - r.pos.z;
    const d = Math.hypot(dx, dz);
    if (d > range + o.radius) continue;
    const a = Math.abs(angleDiff(r.aimYaw, Math.atan2(dx, dz)));
    if (a > halfAngle + Math.atan2(o.radius, Math.max(d, 0.1))) continue;
    if (!game.map.lineOfSight(r.pos.x, r.pos.z, o.pos.x, o.pos.z, 1.2)) continue;
    res.push(o);
  }
  return res;
}
// 線上のロボット
function lineTargets(game, r, ax, az, bx, bz, width) {
  const res = [];
  for (const o of game.robots) {
    if (!game.isEnemy(r, o) || !o.alive) continue;
    const { d, t } = pointSegDist(ax, az, bx, bz, o.pos.x, o.pos.z);
    if (d < width + o.radius) res.push({ o, t });
  }
  return res.sort((p, q) => p.t - q.t);
}
function freePointToward(game, r, tx, tz) {
  const sx = r.pos.x, sz = r.pos.z;
  for (let k = 1; k >= 0; k -= 0.05) {
    const x = sx + (tx - sx) * k, z = sz + (tz - sz) * k;
    if (game.map.isFree(x, z, r.radius)) return { x, z };
  }
  return { x: sx, z: sz };
}

// ================= 通常攻撃 =================
export function firePrimary(game, r) {
  const P = r.def.primary;
  const s = r.s;
  let rate = P.rate;
  if (s.fortressT > 0) rate /= 1.6;
  if (s.berserkT > 0) rate *= 0.55;
  r.fireCd = rate;
  const glow = r.def.colors.glow;
  const yaw = r.aimYaw;

  switch (P.kind) {
    case 'bolt':
    case 'gatling': {
      const idx = P.kind === 'gatling' ? r.muzzleIdx++ : 0;
      const m = muzzle(r, idx);
      const a = yaw + rand(-P.spread, P.spread);
      game.proj.spawn({ owner: r, kind: 'bolt', x: m.x, y: m.y, z: m.z, dirX: Math.sin(a), dirZ: Math.cos(a), speed: P.speed, dmg: P.dmg, range: P.range, width: P.width, color: glow, radius: 0.3 });
      game.fx.muzzle(m, glow, P.kind === 'gatling' ? 0.7 : 1);
      r.model.recoil(idx % 2);
      if (P.kind === 'gatling') { r.model.gatSpin = 40; game.sfx('gatling', r, { gap: 0.05 }); }
      else game.sfx('laser', r);
      break;
    }
    case 'rail': {
      const m = muzzle(r);
      const d = dirOf(yaw);
      let len = P.range;
      const wall = game.map.segmentHit(r.pos.x, r.pos.z, r.pos.x + d.x * len, r.pos.z + d.z * len, 1.8);
      if (wall >= 0) len *= wall;
      const hits = lineTargets(game, r, m.x, m.z, r.pos.x + d.x * len, r.pos.z + d.z * len, 0.3);
      let end = _b.set(r.pos.x + d.x * len, m.y, r.pos.z + d.z * len);
      if (hits.length) {
        const h = hits[0].o;
        end = _b.set(h.pos.x, m.y, h.pos.z);
        game.damage(h, P.dmg, r, { dir: d });
      }
      game.fx.beam(m, end, glow, 0.35, 0.35);
      game.fx.impact(end, glow, 1.5);
      game.fx.muzzle(m, glow, 1.6);
      r.model.recoil(0);
      game.sfx('rail', r);
      if (r.isPlayer) game.fx.addShake(0.15);
      break;
    }
    case 'blade': {
      const hits = coneTargets(game, r, P.range * r.def.scale, P.arc);
      for (const o of hits) game.damage(o, P.dmg, r, { dir: dirOf(yaw), knock: 3 });
      // 斬撃エフェクト
      const side = (r.muzzleIdx++ % 2) ? 1 : -1;
      for (let i = 0; i < 14; i++) {
        const t = i / 13;
        const a = yaw + side * (t - 0.5) * 2 * P.arc;
        _a.set(r.pos.x + Math.sin(a) * 3.2, 1.8 + (t - 0.5) * side * 0.6, r.pos.z + Math.cos(a) * 3.2);
        game.fx.burst(_a, 1, { color: 0xffffff, color1: glow, speed: 1, life: 0.18, size: 1.2, size1: 0.3 });
      }
      r.model.recoil(side > 0 ? 0 : 1);
      game.sfx('blade', r);
      break;
    }
    case 'orb': {
      const m = muzzle(r);
      game.proj.spawn({ owner: r, kind: 'orb', x: m.x, y: m.y, z: m.z, dirX: Math.sin(yaw), dirZ: Math.cos(yaw), speed: P.speed, dmg: P.dmg, aoeDmg: P.dmg, aoe: P.aoe, range: P.range, width: 0.35, color: glow, radius: 0.45, explodeAtEnd: true, opts: { small: true } });
      game.fx.muzzle(m, glow, 1.2);
      r.model.recoil(0);
      game.sfx('plasma', r);
      break;
    }
    case 'flame': {
      const m = muzzle(r);
      const d = dirOf(yaw);
      for (let i = 0; i < 6; i++) {
        const a = yaw + rand(-P.arc, P.arc) * 0.8;
        const sp = rand(14, 22);
        game.fx.add.spawn(m.x, m.y, m.z, Math.sin(a) * sp, rand(-0.5, 1.5), Math.cos(a) * sp, rand(0.35, 0.5), 0.5, 2.6, FIRE0, FIRE1, -2, 1.5, 1);
      }
      if (Math.random() < 0.5) game.fx.trail(_a.set(m.x + d.x * 6, m.y + 1, m.z + d.z * 6), 0x444444, 1.2, 0.8, true);
      for (const o of coneTargets(game, r, P.range, P.arc)) {
        game.damage(o, P.dmg, r, { burn: 22, burnT: 2, noNumber: true, dir: d });
      }
      game.sfx('flame', r, { gap: 0.13 });
      break;
    }
  }
}

const FIRE0 = new THREE.Color(1.0, 0.85, 0.4);
const FIRE1 = new THREE.Color(0.8, 0.15, 0.02);

// ================= スキル =================
export function castSkill(game, r, i) {
  const sk = r.def.skills[i];
  const fn = SKILLS[sk.id];
  if (!fn) return false;
  return fn(game, r) !== false;
}

export function castUlt(game, r) {
  const fn = SKILLS[r.def.ult.id];
  if (!fn) return false;
  const ok = fn(game, r) !== false;
  if (ok) {
    game.sfx('ult', r);
    game.onUlt(r);
  }
  return ok;
}

const SKILLS = {
  // ---- VANGUARD ----
  missiles(game, r) {
    const ap = aimPoint(r, 45);
    let target = null, best = 14;
    for (const o of game.robots) {
      if (!game.isEnemy(r, o) || !o.alive || o.isCloakedFrom(r)) continue;
      const d = Math.hypot(o.pos.x - ap.x, o.pos.z - ap.z);
      if (d < best) { best = d; target = o; }
    }
    for (let k = 0; k < 6; k++) {
      game.after(k * 0.07, () => {
        if (!r.alive) return;
        const a = r.aimYaw + (k - 2.5) * 0.28;
        const sx = r.pos.x - Math.sin(r.aimYaw + 1.2) * 0.9 * r.def.scale, sz = r.pos.z - Math.cos(r.aimYaw + 1.2) * 0.9 * r.def.scale;
        game.proj.spawn({ owner: r, kind: 'missile', x: sx, y: 3.2 * r.def.scale, z: sz, dirX: Math.sin(a), dirZ: Math.cos(a), speed: 30, turn: 4.5, homing: target, homingPoint: ap, dmg: 0, aoe: 2.4, aoeDmg: 48, range: 50, color: 0xffa050, radius: 0.4, opts: { small: true } });
        game.sfx('missile', r, { gap: 0.05 });
      });
    }
  },
  shield(game, r) {
    r.s.shield = 350; r.s.shieldT = 4;
    game.fx.ring(r.pos, 1, 4, r.def.colors.glow, 0.4);
    game.sfx('shield', r);
  },
  grenade(game, r) {
    const p = aimPoint(r, 26, 3);
    const m = muzzle(r);
    const d = Math.hypot(p.x - r.pos.x, p.z - r.pos.z);
    game.proj.lob({ owner: r, kind: 'grenade', from: m, to: p, dur: 0.4 + d / 45, height: 3 + d * 0.15, color: r.def.colors.glow,
      onLand: (pos) => game.explode(pos, 5.5, 170, r, { slow: 0.55, slowT: 2.0, color: r.def.colors.glow }) });
    r.model.recoil(0);
    game.sfx('plasma', r);
  },
  hyperbeam(game, r) {
    const glow = r.def.colors.glow;
    let beam = null, tick = 0, snd = 0;
    game.sfx('charge', r);
    r.channel = {
      t: 2.0, moveMul: 0.25, noFire: true, noSkills: true, turnRate: 1.6, elapsed: 0,
      update(dt) {
        this.elapsed += dt;
        const m = muzzle(r);
        if (this.elapsed < 0.55) {
          for (let k = 0; k < 3; k++) {
            _a.set(m.x + rand(-3, 3), m.y + rand(-2, 2), m.z + rand(-3, 3));
            game.fx.add.spawn(_a.x, _a.y, _a.z, (m.x - _a.x) * 5, (m.y - _a.y) * 5, (m.z - _a.z) * 5, 0.2, 0.6, 0.2, new THREE.Color(glow), new THREE.Color(1, 1, 1));
          }
          return;
        }
        if (!beam) beam = game.fx.persistentBeam(glow, 1.5);
        const d = dirOf(r.aimYaw);
        let len = 60;
        const wall = game.map.segmentHit(r.pos.x, r.pos.z, r.pos.x + d.x * len, r.pos.z + d.z * len, 2.0);
        if (wall >= 0) len = Math.max(2, len * wall);
        const end = _b.set(r.pos.x + d.x * len, m.y, r.pos.z + d.z * len);
        beam.set(m, end, 1.5);
        game.fx.burst(end, 3, { color: 0xffffff, color1: glow, speed: 10, life: 0.3, size: 1.2, size1: 0.2 });
        if (Math.random() < 0.3) game.fx.decal(end, 1.2);
        game.fx.addShake(0.02);
        tick -= dt; snd -= dt;
        if (snd <= 0) { snd = 0.3; game.sfx('beam', r, { gap: 0.1 }); }
        if (tick <= 0) {
          tick = 0.1;
          for (const { o } of lineTargets(game, r, r.pos.x, r.pos.z, end.x, end.z, 1.6)) game.damage(o, 58, r, { dir: d, knock: 2 });
        }
      },
      end() { if (beam) beam.release(); beam = null; },
    };
  },

  // ---- TITAN ----
  slam(game, r) {
    r.forced = {
      vx: 0, vz: 0, t: 0, dur: 0.45, arc: 2.6,
      onEnd: () => {
        const c = r.def.colors.glow;
        game.fx.ring(r.pos, 1, 8, c, 0.5);
        game.fx.ring(r.pos, 1, 6, 0xffffff, 0.35);
        game.fx.burst(_a.set(r.pos.x, 0.5, r.pos.z), 30, { smoke: true, color: 0x6a655c, color1: 0x2a2826, speed: 12, life: 1.0, size: 2, size1: 4, flat: true, drag: 3, alpha: 0.6 });
        game.fx.burst(_a.set(r.pos.x, 0.5, r.pos.z), 20, { color: 0xffd080, color1: c, speed: 14, life: 0.4, size: 0.4, size1: 0.1, flat: true, grav: 5 });
        game.fx.decal(r.pos, 5);
        game.fx.flash(r.pos, c, 40, 0.3);
        game.shakeAt(r.pos, 0.6);
        game.sfx('slam', r);
        for (const o of enemiesIn(game, r, r.pos.x, r.pos.z, 7)) {
          const dx = o.pos.x - r.pos.x, dz = o.pos.z - r.pos.z, l = Math.hypot(dx, dz) || 1;
          game.damage(o, 150, r, { dir: { x: dx / l, z: dz / l }, knock: 22, slow: 0.6, slowT: 1.5 });
        }
      },
    };
  },
  fortress(game, r) {
    r.s.fortressT = 5;
    game.fx.ring(r.pos, 1, 5, r.def.colors.glow, 0.5);
    game.sfx('deploy', r);
  },
  rocket(game, r) {
    const a = r.aimYaw;
    const sx = r.pos.x + Math.sin(a + 1.3) * 1.1 * r.def.scale, sz = r.pos.z + Math.cos(a + 1.3) * 1.1 * r.def.scale;
    game.proj.spawn({ owner: r, kind: 'rocket', x: sx, y: 3.5 * r.def.scale, z: sz, dirX: Math.sin(a), dirZ: Math.cos(a), speed: 32, dmg: 0, aoe: 6, aoeDmg: 190, range: 45, color: 0xffa040, radius: 0.6, opts: { knock: 10 } });
    game.fx.burst(_a.set(sx, 3.5 * r.def.scale, sz), 12, { smoke: true, color: 0x888888, color1: 0x333333, speed: 4, life: 0.8, size: 1.2, size1: 2.5, alpha: 0.5 });
    game.sfx('missile', r);
  },
  artillery(game, r) {
    const p = aimPoint(r, 42);
    const tel = game.fx.telegraph(p, 12, 0xff3020);
    game.sfx('zone', { pos: p }, { vol: 0.6 });
    for (let k = 0; k < 12; k++) {
      game.after(0.9 + k * 0.17, () => {
        const a = Math.random() * Math.PI * 2, d = Math.sqrt(Math.random()) * 11;
        const tx = p.x + Math.cos(a) * d, tz = p.z + Math.sin(a) * d;
        game.proj.lob({ owner: r, kind: 'shell', from: { x: tx - 6, y: 45, z: tz - 6 }, to: { x: tx, z: tz }, dur: 0.45, height: 0, color: 0xff8030,
          onLand: (pos) => game.explode(pos, 4.5, 120, r, { color: 0xff8030, knock: 8 }) });
      });
    }
    game.after(0.9 + 12 * 0.17 + 0.5, () => tel.release());
  },

  // ---- PHANTOM ----
  cloak(game, r) {
    r.s.cloakT = 4.5;
    game.fx.burst(_a.set(r.pos.x, 1.8, r.pos.z), 25, { color: r.def.colors.glow, color1: 0x220044, speed: 6, life: 0.6, size: 1.0, size1: 0.2, jitter: 1.5 });
    game.sfx('cloak', r);
  },
  mine(game, r) {
    const mines = game.deployables.filter((d) => d.type === 'mine' && d.owner === r);
    if (mines.length >= 3) game.removeDeployable(mines[0]);
    game.addMine(r, r.pos.x, r.pos.z);
    game.sfx('deploy', r);
  },
  blink(game, r) {
    const d = dirOf(r.aimYaw);
    const dist = Math.min(15, Math.max(4, Math.hypot(r.aim.x - r.pos.x, r.aim.z - r.pos.z)));
    const tp = freePointToward(game, r, r.pos.x + d.x * dist, r.pos.z + d.z * dist);
    if (Math.hypot(tp.x - r.pos.x, tp.z - r.pos.z) < 1.5) return false;
    const c = r.def.colors.glow;
    game.fx.burst(_a.set(r.pos.x, 1.8, r.pos.z), 24, { color: 0xffffff, color1: c, speed: 5, life: 0.4, size: 0.9, size1: 0.1, jitter: 1.2 });
    game.fx.beam(_a.set(r.pos.x, 1.8, r.pos.z), _b.set(tp.x, 1.8, tp.z), c, 0.25, 0.3);
    r.pos.x = tp.x; r.pos.z = tp.z;
    game.fx.burst(_a.set(r.pos.x, 1.8, r.pos.z), 24, { color: 0xffffff, color1: c, speed: 7, life: 0.4, size: 0.9, size1: 0.1, jitter: 1.2 });
    r.s.invulnT = Math.max(r.s.invulnT, 0.15);
    game.sfx('blink', r);
  },
  gauss(game, r) {
    const glow = r.def.colors.glow;
    game.sfx('charge', r);
    r.channel = {
      t: 0.85, moveMul: 0.15, noFire: true, noSkills: true, turnRate: 3.0,
      update() {
        const m = muzzle(r);
        for (let k = 0; k < 3; k++) {
          _a.set(m.x + rand(-2, 2), m.y + rand(-1.5, 1.5), m.z + rand(-2, 2));
          game.fx.add.spawn(_a.x, _a.y, _a.z, (m.x - _a.x) * 6, (m.y - _a.y) * 6, (m.z - _a.z) * 6, 0.16, 0.5, 0.2, new THREE.Color(glow), new THREE.Color(1, 1, 1));
        }
      },
      end() {
        if (!r.alive) return;
        const m = muzzle(r);
        const d = dirOf(r.aimYaw);
        const end = new THREE.Vector3(r.pos.x + d.x * 95, m.y, r.pos.z + d.z * 95);
        for (const { o } of lineTargets(game, r, r.pos.x, r.pos.z, end.x, end.z, 1.5)) game.damage(o, 520, r, { dir: d, knock: 14 });
        game.fx.beam(m, end, glow, 1.6, 0.7);
        game.fx.beam(m, end, 0xffffff, 0.5, 0.5, false);
        for (let k = 0; k < 30; k++) {
          const t = k / 30;
          _a.set(m.x + (end.x - m.x) * t, m.y, m.z + (end.z - m.z) * t);
          game.fx.burst(_a, 1, { color: 0xffffff, color1: glow, speed: 3, life: 0.6, size: 1.2, size1: 0.1 });
        }
        game.fx.flash(m, glow, 60, 0.3, 30);
        game.shakeAt(r.pos, 0.7);
        game.sfx('rail', r, { vol: 1.5 });
        game.sfx('explosion', r, { size: 1 });
        r.kvel.x -= d.x * 12; r.kvel.z -= d.z * 12;
      },
    };
  },

  // ---- RAZOR ----
  lunge(game, r) {
    const d = dirOf(r.aimYaw);
    const hit = new Set();
    const c = r.def.colors.glow;
    r.forced = {
      vx: d.x * 55, vz: d.z * 55, t: 0, dur: 0.26,
      onStep: () => {
        game.fx.trail(_a.set(r.pos.x, 1.8, r.pos.z), c, 1.4, 0.3);
        for (const o of enemiesIn(game, r, r.pos.x, r.pos.z, 2.2)) {
          if (hit.has(o)) continue;
          hit.add(o);
          game.damage(o, 130, r, { dir: { x: -d.z, z: d.x }, knock: 8 });
          game.fx.impact(_a.set(o.pos.x, 2, o.pos.z), c, 2);
        }
      },
    };
    game.sfx('boost', r);
    game.sfx('blade', r, { key: 'l' });
  },
  cyclone(game, r) {
    let tick = 0;
    const c = r.def.colors.glow;
    r.channel = {
      t: 2.5, spin: true, noFire: true, moveMul: 1.0,
      update(dt) {
        tick -= dt;
        for (let k = 0; k < 3; k++) {
          const a = Math.random() * Math.PI * 2;
          game.fx.add.spawn(r.pos.x + Math.cos(a) * 4, 1.8, r.pos.z + Math.sin(a) * 4, -Math.sin(a) * 12, 0, Math.cos(a) * 12, 0.15, 1.0, 0.2, new THREE.Color(1, 1, 1), new THREE.Color(c));
        }
        if (tick <= 0) {
          tick = 0.25;
          game.sfx('blade', r, { gap: 0.2 });
          for (const o of enemiesIn(game, r, r.pos.x, r.pos.z, 5)) game.damage(o, 38, r, { knock: 1.5, dir: { x: o.pos.x - r.pos.x, z: o.pos.z - r.pos.z } });
        }
      },
    };
  },
  grapple(game, r) {
    const m = muzzle(r);
    const a = r.aimYaw;
    game.proj.spawn({
      owner: r, kind: 'hook', x: m.x, y: m.y, z: m.z, dirX: Math.sin(a), dirZ: Math.cos(a), speed: 62, dmg: 60, range: 21, color: r.def.colors.glow, radius: 0.5,
      onHit: (p, target) => {
        if (!target) { game.fx.impact(p.pos, r.def.colors.glow); return; }
        const dx = r.pos.x - target.pos.x, dz = r.pos.z - target.pos.z;
        const d = Math.hypot(dx, dz) || 1;
        const v = Math.max(0, d - 3) * 6;
        game.damage(target, 60, r, { stun: 0.8 });
        target.kvel.set((dx / d) * v, 0, (dz / d) * v);
        game.fx.impact(p.pos, r.def.colors.glow, 2);
        game.sfx('hook', target);
      },
    });
    game.sfx('hook', r);
  },
  berserk(game, r) {
    r.s.berserkT = 7;
    r.heal(150);
    game.fx.ring(r.pos, 1, 6, 0xff2020, 0.5);
    game.fx.burst(_a.set(r.pos.x, 2, r.pos.z), 40, { color: 0xff8080, color1: 0xff0000, speed: 10, life: 0.6, size: 1.0, size1: 0.2 });
  },

  // ---- WARDEN ----
  turret(game, r) {
    const turrets = game.deployables.filter((d) => d.type === 'turret' && d.owner === r);
    if (turrets.length >= 2) game.removeDeployable(turrets[0]);
    const d = dirOf(r.aimYaw);
    const p = freePointToward(game, r, r.pos.x + d.x * 3, r.pos.z + d.z * 3);
    game.addTurret(r, p.x, p.z);
    game.sfx('deploy', r);
  },
  repair(game, r) {
    r.s.hotT = 3; r.s.hotRate = 120;
    game.fx.ring(r.pos, 1, 4, 0x60ff90, 0.5);
    game.sfx('heal', r);
  },
  emp(game, r) {
    const c = 0x60c0ff;
    game.fx.ring(r.pos, 1, 10, c, 0.5);
    game.fx.sphere(_a.set(r.pos.x, 1.5, r.pos.z), 1, 9, c, 0.4, 0.4);
    game.fx.burst(_a.set(r.pos.x, 1.5, r.pos.z), 40, { color: 0xffffff, color1: c, speed: 20, life: 0.4, size: 0.4, size1: 0.1, flat: true });
    game.fx.flash(r.pos, c, 40, 0.3);
    game.sfx('emp', r);
    for (const o of enemiesIn(game, r, r.pos.x, r.pos.z, 9)) {
      game.damage(o, 90, r, { stun: 1.0 });
      o.en = Math.max(0, o.en - 50);
    }
  },
  drones(game, r) {
    for (let k = 0; k < 6; k++) game.addDrone(r, (k / 6) * Math.PI * 2);
  },

  // ---- INFERNO ----
  napalm(game, r) {
    const p = aimPoint(r, 24, 3);
    const m = muzzle(r);
    const d = Math.hypot(p.x - r.pos.x, p.z - r.pos.z);
    game.proj.lob({ owner: r, kind: 'grenade', from: m, to: p, dur: 0.45 + d / 45, height: 3 + d * 0.15, color: 0xff6a10,
      onLand: (pos) => { game.explode(pos, 3, 60, r, { color: 0xff6a10 }); game.addFirePool(r, pos.x, pos.z, 5, 5); } });
    game.sfx('plasma', r);
  },
  leap(game, r) {
    const tp0 = aimPoint(r, 18, 4);
    const tp = freePointToward(game, r, tp0.x, tp0.z);
    const dur = 0.6;
    r.forced = {
      vx: (tp.x - r.pos.x) / dur, vz: (tp.z - r.pos.z) / dur, t: 0, dur, arc: 5,
      onStep: () => game.fx.trail(_a.set(r.pos.x, 1 + r.airY, r.pos.z), 0xff7a20, 1.2, 0.3),
      onEnd: () => game.explode(r.pos, 5.5, 150, r, { color: 0xff6a10, knock: 16, burn: 20, burnT: 2 }),
    };
    game.sfx('boost', r);
  },
  vent(game, r) {
    const d = dirOf(r.aimYaw);
    const m = muzzle(r);
    for (let k = 0; k < 50 * game.fx.pmul; k++) {
      const a = r.aimYaw + rand(-0.6, 0.6);
      const sp = rand(15, 28);
      game.fx.add.spawn(m.x, m.y, m.z, Math.sin(a) * sp, rand(0, 3), Math.cos(a) * sp, rand(0.3, 0.45), 1.2, 3.5, FIRE0, FIRE1, -2, 2.5, 1);
    }
    game.fx.flash(m, 0xff7a20, 40, 0.3);
    for (const o of coneTargets(game, r, 9.5, 0.62)) game.damage(o, 110, r, { dir: d, knock: 18, burn: 25, burnT: 3 });
    r.kvel.x -= d.x * 6; r.kvel.z -= d.z * 6;
    game.sfx('small_boom', r);
    game.sfx('flame', r, { key: 'v' });
  },
  meltdown(game, r) {
    const orb = game.fx.sphere(_a.set(r.pos.x, 2, r.pos.z), 1, 1, 0xff6a10, 99, 0.35);
    game.fx.items.splice(game.fx.items.findIndex((x) => x.m === orb), 1);
    game.sfx('charge', r);
    r.s.meltdown = true;
    let el = 0;
    r.channel = {
      t: 1.5, moveMul: 0.4, noFire: true, noSkills: true,
      update(dt) {
        el += dt;
        orb.position.set(r.pos.x, 2 + r.airY, r.pos.z);
        orb.scale.setScalar(1.5 + el * 3 + Math.sin(el * 40) * 0.2);
        orb.material.opacity = 0.2 + el * 0.2;
        if (Math.random() < 0.8) game.fx.trail(_a.set(r.pos.x + rand(-2, 2), rand(1, 4), r.pos.z + rand(-2, 2)), 0xffa040, 1.2, 0.4);
      },
      end() {
        r.s.meltdown = false;
        game.fx.release(orb, 'sphere');
        if (!r.alive) return;
        game.explode(r.pos, 14, 420, r, { color: 0xff5010, knock: 25, burn: 30, burnT: 3, big: true });
        game.fx.explosion(_a.set(r.pos.x, 2, r.pos.z), 10, 0xffc040);
      },
    };
  },
};
