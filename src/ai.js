import { DIFFICULTY } from './config.js';
import { makeControls } from './robot.js';
import { rand, clamp } from './util.js';

// AI（ボット）の思考
// 出力は Robot.update に渡す controls（プレイヤー入力と同形式）

export class BotBrain {
  constructor(robot, game, diffKey) {
    this.r = robot;
    this.game = game;
    this.diff = DIFFICULTY[diffKey] || DIFFICULTY.normal;
    this.ctl = makeControls();
    this.thinkT = Math.random() * 0.3;
    this.target = null;
    this.targetSince = 0;
    this.lastSeen = { x: 0, z: 0, t: -99 };
    this.path = null;
    this.pathGoal = null;
    this.pathT = 0;
    this.goal = null;
    this.mode = 'wander';
    this.strafe = Math.random() < 0.5 ? 1 : -1;
    this.strafeT = 0;
    this.aimX = robot.pos.x; this.aimZ = robot.pos.z + 5;
    this.errA = 0; this.errT = 0;
    this.lastHurtT = -99;
    this.lastAttacker = null;
    this.stuckT = 0; this.stuckX = 0; this.stuckZ = 0;
    this.unstuckT = 0; this.unstuckDir = { x: 0, z: 0 };
    this.skillT = rand(0.5, 1.5);
    this.wanderPt = null;
    this.aggression = rand(0.7, 1.3);
  }

  onDamaged(src) {
    this.lastHurtT = this.game.time;
    if (src && src !== this.r && src.alive) this.lastAttacker = src;
  }

  reset() {
    this.target = null; this.path = null; this.goal = null; this.wanderPt = null;
    this.aimX = this.r.pos.x; this.aimZ = this.r.pos.z + 5;
  }

  canSee(o) {
    const r = this.r;
    if (!o.alive || !this.game.isEnemy(r, o) || o.isCloakedFrom(r)) return false;
    const d = Math.hypot(o.pos.x - r.pos.x, o.pos.z - r.pos.z);
    if (d > 48) return false;
    if (d < 12) return true;
    return this.game.map.lineOfSight(r.pos.x, r.pos.z, o.pos.x, o.pos.z, 1.8);
  }

  think() {
    const g = this.game, r = this.r;
    // ターゲット選定
    let best = null, bestScore = Infinity;
    for (const o of g.robots) {
      if (o === r || !this.canSee(o)) continue;
      const d = Math.hypot(o.pos.x - r.pos.x, o.pos.z - r.pos.z);
      let s = d + (o.hp / o.maxHp) * 12;
      if (o === this.lastAttacker && g.time - this.lastHurtT < 3) s -= 14;
      if (o === this.target) s -= 8;
      if (o.s.invulnT > 0) s += 25;
      if (o.isPlayer) s -= 3;
      // チーム戦では遠くの敵を追いかけず拠点を優先（攻撃してきた相手は除く）
      if (g.mode === 'team' && d > 30 && !(o === this.lastAttacker && g.time - this.lastHurtT < 3)) continue;
      if (s < bestScore) { bestScore = s; best = o; }
    }
    if (best !== this.target) {
      this.target = best;
      this.targetSince = g.time;
    }
    if (best) { this.lastSeen.x = best.pos.x; this.lastSeen.z = best.pos.z; this.lastSeen.t = g.time; }

    // 目的地
    const z = g.zone;
    const hp = r.hp / r.maxHp;
    const dz = Math.hypot(r.pos.x - z.cx, r.pos.z - z.cz);
    const nz = z.next;
    const outside = dz > z.r - 3;
    const outsideNext = nz && z.state === 'shrink' && Math.hypot(r.pos.x - nz.cx, r.pos.z - nz.cz) > nz.r - 2;
    const hurry = z.state === 'wait' && z.t < 10 && nz && Math.hypot(r.pos.x - nz.cx, r.pos.z - nz.cz) > nz.r - 2;

    this.mode = 'wander';
    if (outside || outsideNext || hurry) {
      const tz = nz && (outsideNext || hurry) ? nz : z;
      this.mode = 'zone';
      if (!this.goal || this.goalMode !== 'zone') {
        const p = g.map.randomFreePoint(tz.cx, tz.cz, Math.max(4, tz.r * 0.5));
        this.goal = p;
      }
    } else if (hp < 0.33 && r.s.berserkT <= 0) {
      const pk = this.nearestPickup('repair', 55);
      if (pk) { this.mode = 'heal'; this.goal = { x: pk.x, z: pk.z }; }
      else if (this.target) {
        this.mode = 'flee';
        const dx = r.pos.x - this.target.pos.x, dzz = r.pos.z - this.target.pos.z, l = Math.hypot(dx, dzz) || 1;
        this.goal = { x: clamp(r.pos.x + (dx / l) * 14, -110, 110), z: clamp(r.pos.z + (dzz / l) * 14, -110, 110) };
      }
    }
    if (this.mode === 'wander') {
      if (this.target) {
        this.mode = 'fight';
      } else if (g.conquest) {
        const pk = hp < 0.6 && this.nearestPickup('repair', 30);
        if (pk) { this.mode = 'pickup'; this.goal = { x: pk.x, z: pk.z }; }
        else { this.mode = 'objective'; this.goal = this.objectiveGoal(); }
      } else if (g.time - this.lastSeen.t < 3) {
        this.mode = 'hunt';
        this.goal = { x: this.lastSeen.x, z: this.lastSeen.z };
      } else {
        const pk = (hp < 0.75 && this.nearestPickup('repair', 45)) || (r.ultCharge < 70 && this.nearestPickup('core', 35));
        if (pk) { this.mode = 'pickup'; this.goal = { x: pk.x, z: pk.z }; }
        else {
          if (!this.wanderPt || Math.hypot(this.wanderPt.x - r.pos.x, this.wanderPt.z - r.pos.z) < 4 || Math.random() < 0.02) {
            this.wanderPt = g.map.randomFreePoint(z.cx, z.cz, Math.min(z.r * 0.7, 100));
          }
          this.goal = this.wanderPt;
        }
      }
    }
    this.goalMode = this.mode;
  }

  // チーム制圧：向かう拠点を選び、その中の移動先を返す
  objectiveGoal() {
    const g = this.game, r = this.r, cq = g.conquest;
    this.objT = (this.objT || 0) - 1;
    const cur = this.objPoint;
    const done = cur && cur.owner === r.team && Math.abs(cur.v) >= 100 && !cur.contested;
    if (!cur || done || this.objT <= 0) {
      if (this.objBias === undefined) this.objBias = Math.random() * 30;
      let best = null, bs = Infinity;
      for (const p of cq.points) {
        const d = Math.hypot(p.x - r.pos.x, p.z - r.pos.z);
        const enemies = r.team === 'blue' ? p.nr : p.nb;
        let sc = d + Math.random() * 25 + this.objBias * (p.id.charCodeAt(0) % 3 === 0 ? 1 : -0.3);
        const mine = p.owner === r.team && Math.abs(p.v) >= 100;
        if (mine && !enemies) sc += 90;           // 確保済みで安全な拠点は後回し
        if (p.owner === r.team && enemies) sc -= 45; // 攻められている自拠点は守る
        if (p.contested) sc -= 15;
        if (sc < bs) { bs = sc; best = p; }
      }
      this.objPoint = best;
      this.objT = 8 + Math.floor(Math.random() * 6);
      this.objSpot = null;
    }
    const p = this.objPoint;
    // 拠点内ではランダムな位置へ移動し続ける
    if (!this.objSpot || Math.hypot(this.objSpot.x - r.pos.x, this.objSpot.z - r.pos.z) < 2 || Math.random() < 0.08) {
      this.objSpot = g.map.randomFreePoint(p.x, p.z, p.r * 0.7);
    }
    return this.objSpot;
  }

  nearestPickup(type, maxD) {
    let best = null, bd = maxD;
    for (const p of this.game.pickups) {
      if (!p.active || p.type !== type) continue;
      const d = Math.hypot(p.x - this.r.pos.x, p.z - this.r.pos.z);
      if (d < bd) { bd = d; best = p; }
    }
    return best;
  }

  // 目的地への移動方向（経路探索込み）
  steerTo(gx, gz, dt) {
    const r = this.r, map = this.game.map;
    const dx = gx - r.pos.x, dz = gz - r.pos.z;
    const d = Math.hypot(dx, dz);
    if (d < 0.8) return { x: 0, z: 0 };
    if (map.navLine(r.pos.x, r.pos.z, gx, gz)) { this.path = null; return { x: dx / d, z: dz / d }; }
    this.pathT -= dt;
    if (!this.path || this.pathT <= 0 || !this.pathGoal || Math.hypot(this.pathGoal.x - gx, this.pathGoal.z - gz) > 5) {
      this.path = map.findPath(r.pos.x, r.pos.z, gx, gz);
      this.pathGoal = { x: gx, z: gz };
      this.pathT = rand(1.0, 1.8);
    }
    while (this.path.length > 1 && Math.hypot(this.path[0].x - r.pos.x, this.path[0].z - r.pos.z) < 1.6) this.path.shift();
    const wp = this.path[0];
    if (!wp) return { x: dx / d, z: dz / d };
    const wx = wp.x - r.pos.x, wz = wp.z - r.pos.z, wl = Math.hypot(wx, wz) || 1;
    return { x: wx / wl, z: wz / wl };
  }

  update(dt) {
    const g = this.game, r = this.r, c = this.ctl, D = this.diff;
    c.fire = false; c.skill[0] = c.skill[1] = c.skill[2] = false; c.ult = false; c.boost = false;
    if (!r.alive) return c;

    this.thinkT -= dt;
    if (this.thinkT <= 0) { this.thinkT = D.think * rand(0.8, 1.2); this.think(); }
    const t = this.target && this.target.alive && !this.target.isCloakedFrom(r) ? this.target : null;
    if (!t) this.target = null;
    const hp = r.hp / r.maxHp;

    // ---- 移動 ----
    let mv = { x: 0, z: 0 };
    let dist = 999, los = false;
    if (t) {
      dist = Math.hypot(t.pos.x - r.pos.x, t.pos.z - r.pos.z);
      los = g.map.lineOfSight(r.pos.x, r.pos.z, t.pos.x, t.pos.z, 1.8);
    }
    if (this.mode === 'fight' && t) {
      const pr = r.def.ai.range * (this.aggression > 1.1 ? 0.8 : 1);
      const tx = t.pos.x - r.pos.x, tz = t.pos.z - r.pos.z, l = dist || 1;
      const fx = tx / l, fz = tz / l;
      this.strafeT -= dt;
      if (this.strafeT <= 0) { this.strafeT = rand(0.8, 2.2); if (Math.random() < 0.6) this.strafe *= -1; }
      if (!los) {
        mv = this.steerTo(t.pos.x, t.pos.z, dt);
      } else if (dist > pr + 3) {
        mv = this.steerTo(t.pos.x, t.pos.z, dt);
        mv.x += -fz * this.strafe * 0.35; mv.z += fx * this.strafe * 0.35;
      } else if (dist < pr - 3 && pr > 5) {
        mv = { x: -fx + -fz * this.strafe * 0.6, z: -fz + fx * this.strafe * 0.6 };
      } else {
        mv = { x: -fz * this.strafe, z: fx * this.strafe };
        if (pr <= 5) { mv.x += fx * 0.8; mv.z += fz * 0.8; }
      }
      // ゾーン外へ出ない
      const zz = g.zone;
      const px = r.pos.x + mv.x * 3, pz = r.pos.z + mv.z * 3;
      if (Math.hypot(px - zz.cx, pz - zz.cz) > zz.r - 4) { const zx = zz.cx - r.pos.x, zzz = zz.cz - r.pos.z, zl = Math.hypot(zx, zzz) || 1; mv.x += zx / zl; mv.z += zzz / zl; }
    } else if (this.goal) {
      mv = this.steerTo(this.goal.x, this.goal.z, dt);
    }

    // 詰まり検出
    this.stuckT += dt;
    if (this.stuckT > 0.8) {
      const moved = Math.hypot(r.pos.x - this.stuckX, r.pos.z - this.stuckZ);
      if (moved < 1.0 && Math.hypot(mv.x, mv.z) > 0.3 && !r.channel && !r.stunned) {
        this.unstuckT = rand(0.4, 0.9);
        const a = Math.random() * Math.PI * 2;
        this.unstuckDir = { x: Math.cos(a), z: Math.sin(a) };
        this.path = null;
        this.wanderPt = null;
      }
      this.stuckT = 0; this.stuckX = r.pos.x; this.stuckZ = r.pos.z;
    }
    if (this.unstuckT > 0) { this.unstuckT -= dt; mv = this.unstuckDir; }

    // 分離
    for (const o of g.robots) {
      if (o === r || !o.alive) continue;
      const dx = r.pos.x - o.pos.x, dz = r.pos.z - o.pos.z, d = Math.hypot(dx, dz);
      if (d < 3.5 && d > 0.01) { mv.x += (dx / d) * (3.5 - d) * 0.3; mv.z += (dz / d) * (3.5 - d) * 0.3; }
    }
    const ml = Math.hypot(mv.x, mv.z);
    c.mx = ml > 0.01 ? mv.x / Math.max(1, ml) : 0;
    c.mz = ml > 0.01 ? mv.z / Math.max(1, ml) : 0;

    // ---- 照準 ----
    let ax, az;
    if (t) {
      const P = r.def.primary;
      const spd = P.speed || 200;
      const lead = (dist / spd) * D.lead;
      this.errT -= dt;
      if (this.errT <= 0) { this.errT = rand(0.3, 0.7); this.errA = rand(-1, 1) * D.aimErr; }
      const bx = t.pos.x + t.vel.x * lead, bz = t.pos.z + t.vel.z * lead;
      const ang = Math.atan2(bx - r.pos.x, bz - r.pos.z) + this.errA;
      const dd = Math.hypot(bx - r.pos.x, bz - r.pos.z);
      ax = r.pos.x + Math.sin(ang) * dd; az = r.pos.z + Math.cos(ang) * dd;
    } else {
      const mvl = Math.hypot(c.mx, c.mz);
      ax = r.pos.x + (mvl > 0.1 ? c.mx : Math.sin(r.aimYaw)) * 10;
      az = r.pos.z + (mvl > 0.1 ? c.mz : Math.cos(r.aimYaw)) * 10;
    }
    const k = Math.min(1, dt * D.aimSpeed);
    this.aimX += (ax - this.aimX) * k;
    this.aimZ += (az - this.aimZ) * k;
    c.aimX = this.aimX; c.aimZ = this.aimZ;

    // ---- 射撃 ----
    if (t && los && g.time - this.targetSince > D.reaction) {
      const P = r.def.primary;
      const range = (P.range || 10) * (P.kind === 'blade' ? r.def.scale : 1) * 0.95;
      const aimAng = Math.atan2(this.aimX - r.pos.x, this.aimZ - r.pos.z);
      const tAng = Math.atan2(t.pos.x - r.pos.x, t.pos.z - r.pos.z);
      let da = Math.abs(aimAng - tAng); if (da > Math.PI) da = Math.PI * 2 - da;
      if (dist < range + t.radius && da < (P.kind === 'rail' ? 0.12 : 0.35)) c.fire = true;
    }

    // ---- スキル ----
    this.skillT -= dt;
    if (this.skillT <= 0 && !r.channel) {
      this.skillT = rand(0.3, 0.6);
      const ctx = { t, d: dist, los, hp, hurt: g.time - this.lastHurtT < 1.2, near: (rad) => g.robots.filter((o) => g.isEnemy(r, o) && o.alive && !o.isCloakedFrom(r) && Math.hypot(o.pos.x - r.pos.x, o.pos.z - r.pos.z) < rad).length };
      const tryUse = (id) => {
        const fn = RULES[id];
        if (!fn) return false;
        const res = fn(ctx, r);
        if (!res) return false;
        if (Math.random() > D.skillChance) return false;
        if (res.away && t) {
          const dx = r.pos.x - t.pos.x, dz = r.pos.z - t.pos.z, l = Math.hypot(dx, dz) || 1;
          c.aimX = r.pos.x + (dx / l) * 15; c.aimZ = r.pos.z + (dz / l) * 15;
          this.aimX = c.aimX; this.aimZ = c.aimZ;
        } else if (t && res !== 'free') {
          c.aimX = t.pos.x + t.vel.x * 0.3; c.aimZ = t.pos.z + t.vel.z * 0.3;
        }
        return true;
      };
      if (r.ultCharge >= 100 && tryUse(r.def.ult.id)) c.ult = true;
      else {
        for (let i = 0; i < 3; i++) {
          if (r.cds[i] > 0) continue;
          if (tryUse(r.def.skills[i].id)) { c.skill[i] = true; break; }
        }
      }
    }

    // ---- ブースト ----
    if (r.en > 45 && !r.channel) {
      const hurt = g.time - this.lastHurtT < 0.6;
      if (hurt && Math.random() < D.dodge * dt * 4) {
        c.boost = true;
        if (t) {
          const fx = (t.pos.x - r.pos.x) / (dist || 1), fz = (t.pos.z - r.pos.z) / (dist || 1);
          const s = Math.random() < 0.5 ? 1 : -1;
          c.mx = -fz * s; c.mz = fx * s;
        }
      } else if ((this.mode === 'zone' || this.mode === 'flee') && Math.random() < dt * 1.5) c.boost = true;
      else if (t && this.mode === 'fight' && dist > r.def.ai.range + 10 && Math.random() < dt * 0.8) c.boost = true;
    }
    return c;
  }
}

// スキル使用条件（true / {away:true} / 'free'）
const RULES = {
  missiles: (c) => c.t && c.d < 32 && c.los,
  shield: (c) => c.hurt && c.hp < 0.85 && 'free',
  grenade: (c) => c.t && c.d < 25 && c.d > 4,
  hyperbeam: (c) => c.t && c.d < 38 && c.los,
  slam: (c) => c.near(6.5) >= 1 && 'free',
  fortress: (c) => c.t && c.d < 26 && c.los && 'free',
  rocket: (c) => c.t && c.d < 35 && c.los,
  artillery: (c) => c.t && c.d < 38,
  cloak: (c) => ((c.hp < 0.4 && c.hurt) || (c.t && c.d > 30 && Math.random() < 0.15)) && 'free',
  mine: (c) => ((c.t && c.d < 9) || (c.hp < 0.5 && c.hurt)) && 'free',
  blink: (c) => (c.t && c.hp < 0.4 && c.d < 14 ? { away: true } : false),
  gauss: (c) => c.t && c.d < 65,
  lunge: (c) => c.t && c.d > 4 && c.d < 14 && c.los,
  cyclone: (c) => c.near(5) >= 1 && 'free',
  grapple: (c) => c.t && c.d > 6 && c.d < 19 && c.los,
  berserk: (c) => c.t && c.d < 14,
  turret: (c) => c.t && c.d < 24,
  repair: (c) => c.hp < 0.55 && 'free',
  emp: (c) => c.near(8.5) >= 1,
  drones: (c) => c.t && c.d < 25,
  napalm: (c) => c.t && c.d < 23 && c.d > 3,
  leap: (c) => (c.t && c.hp < 0.3 && c.hurt ? { away: true } : c.t && c.d > 7 && c.d < 18),
  vent: (c) => c.t && c.d < 8.5 && c.los,
  meltdown: (c) => c.near(11) >= 1 && (c.near(11) >= 2 || (c.t && c.t.hp < 500) || c.hp < 0.4),
};
