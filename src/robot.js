import * as THREE from 'three';
import { RobotModel } from './models.js';
import { BOOST, ULT_PASSIVE } from './config.js';
import { firePrimary, castSkill, castUlt } from './abilities.js';
import { clamp, approachAngle } from './util.js';

// ロボット（プレイヤー/AI 共通）

let NEXT_ID = 1;
const _v = new THREE.Vector3();

export function makeControls() {
  return { mx: 0, mz: 0, aimX: 0, aimZ: 1, fire: false, skill: [false, false, false], ult: false, boost: false };
}

export class Robot {
  constructor(game, def, name, isPlayer = false) {
    this.id = NEXT_ID++;
    this.game = game;
    this.def = def;
    this.name = name;
    this.isPlayer = isPlayer;
    this.radius = def.radius;
    this.maxHp = def.hp;
    this.maxEn = def.energy;
    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.kvel = new THREE.Vector3();
    this.aim = new THREE.Vector3(0, 0, 1);
    this.aimYaw = 0;
    this.moveYaw = 0;
    this.model = new RobotModel(def);
    game.scene.add(this.model.root);

    const sm = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 14), new THREE.MeshBasicMaterial({ color: def.colors.glow, transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending, depthWrite: false }));
    sm.visible = false;
    game.scene.add(sm);
    this.shieldMesh = sm;

    this.stats = { kills: 0, deaths: 0, assists: 0, score: 0, dmg: 0, streak: 0, bestStreak: 0 };
    this.damagers = new Map();
    this.lastKillTime = -99;
    this.multi = 0;
    this.brain = null;
    this.team = null;
    this.alive = false;
    this.respawnT = 0;
    this.ultCharge = 0;
    this.airY = 0;
    this.seen = 1;
    this.resetState();
  }

  resetState() {
    this.hp = this.maxHp;
    this.en = this.maxEn;
    this.cds = [0, 0, 0];
    this.fireCd = 0;
    this.boostT = 0;
    this.boostDir = { x: 0, z: 1 };
    this.enDelay = 0;
    this.forced = null;
    this.channel = null;
    this.kvel.set(0, 0, 0);
    this.vel.set(0, 0, 0);
    this.muzzleIdx = 0;
    this.s = {
      shield: 0, shieldT: 0, stunT: 0, slowT: 0, slowMul: 1, burnT: 0, burnDps: 0, burnSrc: null, burnTick: 0,
      cloakT: 0, ambushT: 0, berserkT: 0, fortressT: 0, invulnT: 0, hotT: 0, hotRate: 0, meltdown: false,
    };
    this.damagers.clear();
  }

  get ultReady() { return this.ultCharge >= 100; }

  isCloakedFrom(observer) {
    if (this.s.cloakT <= 0 || !observer || observer === this) return false;
    return this.pos.distanceTo(observer.pos) > 6;
  }

  speedMul() {
    const s = this.s;
    let m = 1;
    if (s.slowT > 0) m *= s.slowMul;
    if (s.fortressT > 0) m *= 0.5;
    if (s.berserkT > 0) m *= 1.4;
    if (s.cloakT > 0) m *= 1.3;
    if (this.channel && this.channel.moveMul !== undefined) m *= this.channel.moveMul;
    return m;
  }

  get stunned() { return this.s.stunT > 0; }

  update(dt, ctl) {
    const game = this.game;
    const s = this.s;
    if (!this.alive) return;

    // タイマー
    for (let i = 0; i < 3; i++) this.cds[i] = Math.max(0, this.cds[i] - dt);
    this.fireCd -= dt;
    s.stunT = Math.max(0, s.stunT - dt);
    s.slowT = Math.max(0, s.slowT - dt);
    s.invulnT = Math.max(0, s.invulnT - dt);
    s.ambushT = Math.max(0, s.ambushT - dt);
    if (s.shieldT > 0) { s.shieldT -= dt; if (s.shieldT <= 0) s.shield = 0; }
    if (s.cloakT > 0) { s.cloakT -= dt; if (s.cloakT <= 0) this.breakCloak(false); }
    if (s.berserkT > 0) {
      s.berserkT -= dt;
      if (Math.random() < 0.5) game.fx.trail(_v.set(this.pos.x + (Math.random() - 0.5) * 2, 1 + Math.random() * 2.5, this.pos.z + (Math.random() - 0.5) * 2), 0xff3030, 0.7, 0.35);
    }
    if (s.fortressT > 0) s.fortressT -= dt;
    if (s.hotT > 0) {
      s.hotT -= dt;
      this.heal(s.hotRate * dt);
      if (Math.random() < 0.4) game.fx.trail(_v.set(this.pos.x + (Math.random() - 0.5) * 2, 0.5 + Math.random() * 2, this.pos.z + (Math.random() - 0.5) * 2), 0x60ff90, 0.6, 0.6);
    }
    if (s.burnT > 0) {
      s.burnT -= dt;
      s.burnTick -= dt;
      if (s.burnTick <= 0) {
        s.burnTick = 0.25;
        game.damage(this, s.burnDps * 0.25, s.burnSrc, { noNumber: false, burnTick: true });
      }
      if (Math.random() < 0.6) game.fx.trail(_v.set(this.pos.x + (Math.random() - 0.5) * 1.5, 1 + Math.random() * 2, this.pos.z + (Math.random() - 0.5) * 1.5), 0xff7a20, 0.8, 0.35);
    }
    if (!this.alive) return;
    if (s.stunT > 0 && Math.random() < 0.3) game.fx.trail(_v.set(this.pos.x + (Math.random() - 0.5) * 2, 3 + Math.random(), this.pos.z + (Math.random() - 0.5) * 2), 0x80c0ff, 0.5, 0.3);

    // エネルギー / ウルト
    if (this.enDelay > 0) this.enDelay -= dt;
    else this.en = Math.min(this.maxEn, this.en + BOOST.regen * dt);
    this.ultCharge = Math.min(100, this.ultCharge + ULT_PASSIVE * dt);

    // チャネル
    if (this.channel) {
      const c = this.channel;
      c.t -= dt;
      c.update && c.update(dt);
      if (c.t <= 0 && this.channel === c) { this.channel = null; c.end && c.end(); }
    }

    // 照準
    const ax = ctl.aimX - this.pos.x, az = ctl.aimZ - this.pos.z;
    this.aim.set(ctl.aimX, 0, ctl.aimZ);
    const canAct = s.stunT <= 0 && !this.forced;
    if ((ax * ax + az * az) > 0.25 && s.stunT <= 0 && !(this.channel && this.channel.lockAim)) {
      const want = Math.atan2(ax, az);
      this.aimYaw = this.channel && this.channel.turnRate ? approachAngle(this.aimYaw, want, this.channel.turnRate * dt) : want;
    }

    // 移動
    let mx = ctl.mx, mz = ctl.mz;
    const ml = Math.hypot(mx, mz);
    if (ml > 1) { mx /= ml; mz /= ml; }
    const speed = this.def.speed * this.speedMul();
    let vx = 0, vz = 0;
    let airY = 0;
    if (this.forced) {
      const f = this.forced;
      f.t += dt;
      const k = Math.min(1, f.t / f.dur);
      vx = f.vx; vz = f.vz;
      if (f.arc) airY = Math.sin(k * Math.PI) * f.arc;
      f.onStep && f.onStep(dt);
      if (k >= 1) { this.forced = null; f.onEnd && f.onEnd(); }
    } else if (s.stunT <= 0) {
      if (ctl.boost && this.boostT <= 0 && this.en >= BOOST.cost) {
        this.en -= BOOST.cost;
        this.enDelay = BOOST.regenDelay;
        this.boostT = BOOST.time;
        if (ml > 0.1) this.boostDir = { x: mx, z: mz };
        else this.boostDir = { x: Math.sin(this.aimYaw), z: Math.cos(this.aimYaw) };
        game.fx.burst(_v.set(this.pos.x, 1.2, this.pos.z), 14, { color: this.def.colors.glow, color1: 0x335577, speed: 7, life: 0.35, size: 1.0, size1: 0.2, flat: true });
        game.sfx('boost', this);
      }
      if (this.boostT > 0) {
        this.boostT -= dt;
        vx = this.boostDir.x * this.def.speed * BOOST.mult;
        vz = this.boostDir.z * this.def.speed * BOOST.mult;
        if (Math.random() < 0.8) game.fx.trail(_v.set(this.pos.x - this.boostDir.x, 1.4 * this.def.scale, this.pos.z - this.boostDir.z), this.def.colors.glow, 0.9, 0.3);
      } else {
        vx = mx * speed; vz = mz * speed;
      }
    }
    // ノックバック
    vx += this.kvel.x; vz += this.kvel.z;
    const kd = Math.exp(-6 * dt);
    this.kvel.multiplyScalar(kd);

    this.vel.set(vx, 0, vz);
    this.pos.x += vx * dt;
    this.pos.z += vz * dt;
    game.map.resolveCircle(this.pos, this.radius);

    // 射撃・スキル
    if (canAct) {
      const noFire = this.channel && this.channel.noFire;
      if (ctl.fire && this.fireCd <= 0 && !noFire) {
        firePrimary(game, this);
        if (s.cloakT > 0) this.breakCloak(true);
      }
      if (!(this.channel && this.channel.noSkills)) {
        for (let i = 0; i < 3; i++) {
          if (ctl.skill[i] && this.cds[i] <= 0) {
            if (castSkill(game, this, i)) {
              this.cds[i] = this.def.skills[i].cd;
              if (s.cloakT > 0 && this.def.skills[i].id !== 'cloak') this.breakCloak(true);
            }
          }
        }
        if (ctl.ult && this.ultCharge >= 100) {
          if (castUlt(game, this)) {
            this.ultCharge = 0;
            if (s.cloakT > 0) this.breakCloak(true);
          }
        }
      }
    }

    // モデル
    const moving = Math.hypot(vx, vz) > 0.5;
    if (moving) this.moveYaw = Math.atan2(vx, vz);
    this.model.root.position.set(this.pos.x, 0, this.pos.z);
    this.model.inner.position.y = airY;
    this.model.update(dt, {
      speedNorm: Math.hypot(vx, vz) / this.def.speed,
      moving, moveYaw: this.moveYaw, aimYaw: this.aimYaw,
      boost: this.boostT > 0 || (this.forced && !this.forced.arc),
      spin: this.channel && this.channel.spin,
      airborne: airY > 0.3, stunned: s.stunT > 0,
    });
    this.airY = airY;

    // シールド
    if (s.shield > 0) {
      this.shieldMesh.visible = true;
      this.shieldMesh.position.set(this.pos.x, 1.8 * this.def.scale + airY, this.pos.z);
      this.shieldMesh.scale.setScalar(2.4 * this.def.scale * (1 + Math.sin(game.time * 12) * 0.02));
      this.shieldMesh.material.opacity = 0.18 + 0.1 * (s.shield / 350);
    } else this.shieldMesh.visible = false;
  }

  heal(v) { this.hp = Math.min(this.maxHp, this.hp + v); }

  // チーム戦：足元にチーム色のリングを表示
  setTeam(team) {
    this.team = team;
    const color = team === 'blue' ? 0x3d8bff : 0xff4040;
    const geo = new THREE.RingGeometry(this.radius * 1.15, this.radius * 1.45, 40);
    geo.rotateX(-Math.PI / 2);
    const ring = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.85, depthWrite: false }));
    ring.position.y = 0.09;
    ring.renderOrder = 2;
    this.model.root.add(ring);
    this.teamRing = ring;
  }

  breakCloak(ambush) {
    if (this.s.cloakT > 0) this.s.cloakT = 0;
    if (ambush) this.s.ambushT = 0.4;
  }

  // seen: TrueSight による視界内率 (0..1)
  updateVisibility(viewer, seen = 1) {
    let o = 1;
    if (this.s.cloakT > 0) {
      if (viewer === this) o = 0.3;
      else if (!viewer || this.isCloakedFrom(viewer)) o = 0.06;
      else o = 0.35;
    } else if (this.s.invulnT > 0) {
      o = 0.55 + Math.sin(this.game.time * 30) * 0.2;
    }
    o = Math.min(o, seen);
    const vis = seen > 0.03;
    this.model.root.visible = vis;
    if (!vis) this.shieldMesh.visible = false;
    if (vis) this.model.setOpacity(o);
  }

  setVisible(v) {
    this.model.root.visible = v;
    if (!v) this.shieldMesh.visible = false;
  }

  destroy() {
    this.game.scene.remove(this.model.root);
    this.game.scene.remove(this.shieldMesh);
    this.model.dispose();
    this.shieldMesh.geometry.dispose();
    this.shieldMesh.material.dispose();
  }
}

export { clamp };
