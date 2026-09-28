import * as THREE from 'three';
import { CLASSES, CLASS_BY_ID, BOT_NAMES, RESPAWN_TIME, SPAWN_PROTECT, SCORE, ASSIST_WINDOW, ULT_PER_DMG, ULT_PER_KILL, PICKUP, MAP_HALF, DIFFICULTY } from './config.js';
import { Robot, makeControls } from './robot.js';
import { BotBrain } from './ai.js';
import { Effects } from './effects.js';
import { ProjectileSystem } from './projectiles.js';
import { cutUniforms } from './map.js';
import { TrueSight, visUniforms } from './truesight.js';
import { zoneTexture } from './textures.js';
import { audio } from './audio.js';
import { settings } from './settings.js';
import { input } from './input.js';
import { touch } from './touch.js';
import { clamp, rand, pick, lerp } from './util.js';

const _v = new THREE.Vector3();
const _ray = new THREE.Raycaster();
const _ndc = new THREE.Vector2();
const _plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -1.6);

const ZONE_RADII = [178, 118, 80, 52, 32, 18];
const ZONE_DPS = [0.03, 0.03, 0.045, 0.06, 0.08, 0.1];

export class Game {
  constructor(renderer, map, env, opts) {
    this.renderer = renderer;
    this.map = map;
    this.opts = opts;
    this.attract = !!opts.attract;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x1d2127);
    this.scene.fog = new THREE.Fog(0x1d2127, 95, 230);
    this.scene.environment = env;
    this.scene.environmentIntensity = 0.35;
    this.scene.add(map.group);

    // ライト
    const hemi = new THREE.HemisphereLight(0x9fb4d0, 0x4a3f35, 1.7);
    this.scene.add(hemi);
    this.sun = new THREE.DirectionalLight(0xffe2c0, 3.2);
    this.sun.castShadow = true;
    this.sun.shadow.camera.left = -55; this.sun.shadow.camera.right = 55;
    this.sun.shadow.camera.top = 55; this.sun.shadow.camera.bottom = -55;
    this.sun.shadow.camera.near = 1; this.sun.shadow.camera.far = 200;
    this.sun.shadow.bias = -0.0006;
    this.sun.shadow.normalBias = 0.04;
    this.scene.add(this.sun, this.sun.target);
    this.applyShadowSettings();
    const core = new THREE.PointLight(0x40b0ff, 30, 30, 1.5);
    core.position.set(0, 7, 0);
    this.scene.add(core);

    this.camera = new THREE.PerspectiveCamera(36, window.innerWidth / window.innerHeight, 1, 600);
    this.camTarget = new THREE.Vector3();
    this.camZoom = settings.gameplay.camZoom;
    this.camAngle = Math.PI / 4;

    this.fx = new Effects(this.scene);
    this.proj = new ProjectileSystem(this);
    this.robots = [];
    this.deployables = [];
    this.timers = [];
    this.pickups = [];
    this.listeners = [];
    this.time = 0;
    this.duration = opts.duration || 300;
    this.timeLeft = this.duration;
    this.state = 'countdown';
    this.countdown = this.attract ? 0 : 3.5;
    this.endT = 0;
    this.timeScale = 1;
    this.smokeT = 0;

    // TrueSight（視界システム）はプレイヤーがいる試合のみ
    this.ts = this.attract ? null : new TrueSight(map, renderer);
    this.tsOn = false;

    this.buildZone();
    this.buildPickups();
    this.spawnRobots();
    if (this.attract) { this.state = 'playing'; this.followIdx = 0; this.followT = 0; }
  }

  on(fn) { this.listeners.push(fn); }
  emit(type, data) { for (const fn of this.listeners) fn(type, data); }

  applyShadowSettings() {
    const g = settings.graphics;
    this.sun.castShadow = g.shadows;
    const size = g.quality === 'low' ? 1024 : g.quality === 'medium' ? 1536 : 2048;
    if (this.sun.shadow.mapSize.x !== size) {
      this.sun.shadow.mapSize.set(size, size);
      if (this.sun.shadow.map) { this.sun.shadow.map.dispose(); this.sun.shadow.map = null; }
    }
  }

  // ---------- 生成 ----------
  spawnRobots() {
    const o = this.opts;
    const names = [...BOT_NAMES].sort(() => Math.random() - 0.5);
    const total = (o.attract ? 10 : o.bots + 1);
    const classPool = [];
    for (let i = 0; i < total; i++) classPool.push(CLASSES[i % CLASSES.length]);
    classPool.sort(() => Math.random() - 0.5);
    if (!o.attract) {
      const pdef = CLASS_BY_ID[o.playerClass] || CLASSES[0];
      this.player = new Robot(this, pdef, o.playerName || 'PLAYER', true);
      this.player.ctl = makeControls();
      this.robots.push(this.player);
    }
    let ni = 0;
    while (this.robots.length < total) {
      let name = names[ni++ % names.length];
      if (this.player && name === this.player.name) name = names[ni++ % names.length];
      const def = classPool[this.robots.length % classPool.length];
      const r = new Robot(this, def, name, false);
      r.brain = new BotBrain(r, this, o.attract ? 'normal' : o.difficulty);
      this.robots.push(r);
    }
    // 初期配置：円周上に散らす
    const n = this.robots.length;
    const off = Math.random() * Math.PI * 2;
    this.robots.forEach((r, i) => {
      const a = off + (i / n) * Math.PI * 2;
      const rad = 60 + Math.random() * 30;
      const p = this.map.randomFreePoint(Math.cos(a) * rad, Math.sin(a) * rad, 14);
      this.respawn(r, p, true);
    });
  }

  buildZone() {
    const tex = zoneTexture().clone();
    tex.needsUpdate = true;
    tex.wrapS = THREE.RepeatWrapping;
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, color: 0x5aa8ff });
    const geo = new THREE.CylinderGeometry(1, 1, 1, 96, 1, true);
    geo.translate(0, 0.5, 0);
    this.zoneMesh = new THREE.Mesh(geo, mat);
    this.zoneMesh.renderOrder = 5;
    this.scene.add(this.zoneMesh);
    const ringGeo = new THREE.RingGeometry(0.985, 1, 128);
    ringGeo.rotateX(-Math.PI / 2);
    this.nextRing = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.55, depthWrite: false }));
    this.nextRing.position.y = 0.1;
    this.scene.add(this.nextRing);

    const phases = ZONE_RADII.length - 1;
    const plen = this.duration / phases;
    this.zone = {
      cx: 0, cz: 0, r: ZONE_RADII[0], phase: 0, state: 'wait',
      wait: plen * 0.55, shrink: plen * 0.45, t: plen * 0.55,
      from: { cx: 0, cz: 0, r: ZONE_RADII[0] }, next: null, tickT: 0,
    };
    this.zone.next = this.pickNextZone();
  }

  pickNextZone() {
    const z = this.zone;
    const nr = ZONE_RADII[Math.min(z.phase + 1, ZONE_RADII.length - 1)];
    const maxOff = Math.max(0, z.r - nr) * 0.45;
    const a = Math.random() * Math.PI * 2, d = Math.random() * maxOff;
    const lim = MAP_HALF - nr * 0.7;
    return { cx: clamp(z.cx + Math.cos(a) * d, -lim, lim), cz: clamp(z.cz + Math.sin(a) * d, -lim, lim), r: nr };
  }

  buildPickups() {
    for (const s of this.map.pickupSpots) {
      const g = new THREE.Group();
      const color = s.type === 'repair' ? 0x50ff80 : 0x50b8ff;
      const mat = new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.7, metalness: 0.2, roughness: 0.4 });
      let item;
      if (s.type === 'repair') {
        item = new THREE.Group();
        item.add(new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.35, 0.35), mat));
        item.add(new THREE.Mesh(new THREE.BoxGeometry(0.35, 1.1, 0.35), mat));
      } else {
        item = new THREE.Mesh(new THREE.OctahedronGeometry(0.6), mat);
      }
      item.position.y = 1.4;
      g.add(item);
      const pad = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.8, 0.2, 20), new THREE.MeshStandardMaterial({ color: 0x33363a, metalness: 0.7, roughness: 0.4 }));
      pad.position.y = 0.1;
      pad.receiveShadow = true;
      g.add(pad);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.06, 6, 32), new THREE.MeshBasicMaterial({ color }));
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.22;
      g.add(ring);
      g.position.set(s.x, 0, s.z);
      this.scene.add(g);
      this.pickups.push({ ...s, active: true, t: 0, group: g, item });
    }
  }

  // ---------- ヘルパー ----------
  after(t, fn) { this.timers.push({ t, fn }); }

  sfx(name, src, opt = {}) {
    if (this.attract && !opt.force) { opt = { ...opt, vol: (opt.vol ?? 1) * 0.35 }; }
    const p = src && src.pos ? src.pos : src;
    if (p) audio.play(name, { ...opt, x: p.x, z: p.z });
    else audio.play(name, opt);
  }

  shakeAt(pos, amt) {
    const L = this.camTarget;
    const d = Math.hypot(L.x - pos.x, L.z - pos.z);
    this.fx.addShake(amt * Math.max(0, 1 - d / 45));
  }

  onUlt(r) {
    this.fx.ring(r.pos, 1, 7, r.def.colors.glow, 0.6);
    if (r.isPlayer) this.emit('announce', { text: r.def.ult.name, sub: 'ULTIMATE', color: '#ffd24a', small: true });
  }

  // ---------- ダメージ ----------
  damage(target, amount, src, opt = {}) {
    if (!target.alive || this.state === 'ended') return 0;
    if (target.s.invulnT > 0 && !opt.zone) return 0;
    if (src === target) return 0;
    let a = amount;
    if (src && src.alive !== undefined) {
      if (src.s.berserkT > 0) a *= 1.6;
      if (src.s.ambushT > 0) { a *= 1.5; }
      if (src.brain) a *= src.brain.diff.dmgMul;
    }
    if (target.s.fortressT > 0) a *= 0.5;
    if (target.s.meltdown) a *= 0.7;
    if (target.s.shield > 0 && !opt.zone) {
      const ab = Math.min(target.s.shield, a);
      target.s.shield -= ab;
      a -= ab;
      if (ab > 0) this.fx.burst(_v.set(target.pos.x, 2, target.pos.z), 4, { color: target.def.colors.glow, speed: 5, life: 0.2, size: 0.5 });
    }
    target.hp -= a;
    target.model.flash();
    if (src && src !== target) {
      src.stats.dmg += a;
      src.ultCharge = Math.min(100, src.ultCharge + a * ULT_PER_DMG);
      target.damagers.set(src, this.time);
      if (src.s.berserkT > 0) src.heal(a * 0.3);
      if (src.isPlayer && !opt.burnTick) this.sfx('hit', null, { gap: 0.06 });
    }
    // 状態異常
    const mass = target.def.mass;
    if (opt.knock && opt.dir) {
      const l = Math.hypot(opt.dir.x, opt.dir.z) || 1;
      target.kvel.x += (opt.dir.x / l) * opt.knock / mass;
      target.kvel.z += (opt.dir.z / l) * opt.knock / mass;
    }
    if (opt.stun) {
      target.s.stunT = Math.max(target.s.stunT, opt.stun);
      if (target.channel) { const c = target.channel; target.channel = null; c.end && c.end(); }
    }
    if (opt.slow) { target.s.slowT = Math.max(target.s.slowT, opt.slowT || 1.5); target.s.slowMul = opt.slow; }
    if (opt.burn) { target.s.burnT = Math.max(target.s.burnT, opt.burnT || 2); target.s.burnDps = opt.burn; target.s.burnSrc = src; }
    if (target.brain) target.brain.onDamaged(src);
    if (target.isPlayer && a > 0) { this.sfx('hurt', null, { gap: 0.15, vol: 0.6 }); this.emit('hurt', { amount: a }); }
    if (a > 0.5 && !opt.noNumber && (src && src.isPlayer || target.isPlayer)) {
      this.fx.damageNumber(target.pos, a, target.isPlayer ? '#ff6060' : opt.burnTick ? '#ffa040' : '#ffffff', a >= 120);
    }
    if (target.hp <= 0) this.kill(target, src);
    return a;
  }

  explode(pos, radius, dmg, src, opt = {}) {
    const color = opt.color ?? 0xff8a30;
    if (opt.small) {
      this.fx.sphere(_v.set(pos.x, Math.max(0.8, pos.y), pos.z), radius * 0.3, radius * 1.0, color, 0.3, 0.8);
      this.fx.burst(_v, 14, { color: 0xffffff, color1: color, speed: radius * 5, life: 0.35, size: 0.9, size1: 0.1 });
      this.fx.flash(_v, color, 20, 0.2, radius * 5);
      this.sfx('small_boom', pos, { gap: 0.04 });
    } else {
      this.fx.explosion(pos, radius, color, this.camTarget);
      this.sfx('explosion', pos, { size: radius / 6, gap: 0.05 });
    }
    for (const r of this.robots) {
      if (!r.alive || r === src) continue;
      const dx = r.pos.x - pos.x, dz = r.pos.z - pos.z;
      const d = Math.hypot(dx, dz);
      if (d > radius + r.radius) continue;
      const f = 1 - 0.5 * clamp(d / radius, 0, 1);
      this.damage(r, dmg * f, src, { ...opt, dir: { x: dx || 0.01, z: dz }, knock: opt.knock ?? radius * 1.2 });
    }
    for (const d of [...this.deployables]) {
      if (d.type !== 'turret' || d.owner === src) continue;
      if (Math.hypot(d.x - pos.x, d.z - pos.z) < radius + 1) this.damageDeployable(d, dmg);
    }
  }

  kill(victim, killer) {
    if (!victim.alive) return;
    victim.alive = false;
    victim.hp = 0;
    victim.respawnT = RESPAWN_TIME;
    if (victim.channel) { const c = victim.channel; victim.channel = null; c.end && c.end(); }
    victim.forced = null;
    // ゾーン死などは直近のダメージ元をキル扱い
    if (!killer || killer === victim) {
      let best = null, bt = -1;
      for (const [r, t] of victim.damagers) if (this.time - t < ASSIST_WINDOW && t > bt && r !== victim) { bt = t; best = r; }
      killer = best;
    }
    victim.stats.deaths++;
    victim.stats.score += SCORE.death;
    victim.stats.streak = 0;
    const assists = [];
    if (killer) {
      killer.stats.kills++;
      killer.stats.score += SCORE.kill;
      killer.stats.streak++;
      killer.stats.bestStreak = Math.max(killer.stats.bestStreak, killer.stats.streak);
      killer.ultCharge = Math.min(100, killer.ultCharge + ULT_PER_KILL);
      if (this.time - killer.lastKillTime < 6) killer.multi++; else killer.multi = 1;
      killer.lastKillTime = this.time;
    }
    for (const [r, t] of victim.damagers) {
      if (r !== killer && r !== victim && this.time - t < ASSIST_WINDOW) {
        r.stats.assists++;
        r.stats.score += SCORE.assist;
        assists.push(r);
      }
    }
    victim.damagers.clear();
    // 演出
    const p = victim.pos;
    this.fx.explosion(_v.set(p.x, 1.8, p.z), 5, victim.def.colors.glow, this.camTarget);
    this.fx.explosion(_v.set(p.x, 1.0, p.z), 3.5, 0xff8a30, null);
    this.fx.debrisBurst(p, victim.def.colors.primary, 12);
    this.sfx('death', p);
    victim.setVisible(false);
    // ミサイル等の追尾解除 / 設置物
    for (const d of [...this.deployables]) if (d.owner === victim && (d.type === 'drone')) this.removeDeployable(d);
    this.emit('kill', { killer, victim, assists });
    if (killer && killer.isPlayer) {
      this.sfx('kill', null);
      const names = { 2: 'DOUBLE KILL', 3: 'TRIPLE KILL', 4: 'QUADRA KILL' };
      let txt = names[killer.multi] || (killer.multi >= 5 ? 'RAMPAGE' : null);
      if (!txt && killer.stats.streak === 5) txt = 'UNSTOPPABLE';
      this.emit('announce', { text: txt || `${victim.name} を撃破`, sub: `+${SCORE.kill}`, color: txt ? '#ff5050' : '#ffd24a', small: !txt });
    }
    if (victim.isPlayer) this.emit('playerDeath', { killer });
  }

  // ---------- リスポーン ----------
  respawn(r, point = null, initial = false) {
    let p = point;
    if (!p) {
      const z = this.zone;
      let best = null, bestD = -1;
      for (let i = 0; i < 12; i++) {
        const c = this.map.randomFreePoint(z.cx, z.cz, Math.min(z.r * 0.75, 105));
        let md = 999;
        for (const o of this.robots) if (o !== r && o.alive) md = Math.min(md, Math.hypot(o.pos.x - c.x, o.pos.z - c.z));
        if (md > bestD) { bestD = md; best = c; }
      }
      p = best;
    }
    r.resetState();
    r.pos.set(p.x, 0, p.z);
    r.alive = true;
    r.s.invulnT = initial ? 0 : SPAWN_PROTECT;
    r.aimYaw = Math.atan2(-p.x, -p.z);
    r.model.legsYaw = r.aimYaw;
    r.setVisible(true);
    if (r.brain) r.brain.reset();
    if (!initial) {
      this.fx.beam(_v.set(p.x, 40, p.z), new THREE.Vector3(p.x, 0, p.z), r.def.colors.glow, 1.4, 0.6);
      this.fx.ring(r.pos, 1, 5, r.def.colors.glow, 0.6);
      this.fx.burst(_v.set(p.x, 1, p.z), 30, { color: 0xffffff, color1: r.def.colors.glow, speed: 8, life: 0.5, size: 0.8, size1: 0.1, flat: true });
      this.sfx('respawn', r.isPlayer ? null : p);
    }
    if (r.isPlayer && !initial) this.emit('respawn', {});
  }

  // ---------- 設置物 ----------
  addMine(owner, x, z) {
    const g = new THREE.Group();
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.6, 0.25, 10), new THREE.MeshStandardMaterial({ color: 0x2a2a30, metalness: 0.8, roughness: 0.3 }));
    body.position.y = 0.13;
    const light = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), new THREE.MeshBasicMaterial({ color: owner.def.colors.glow }));
    light.position.y = 0.3;
    g.add(body, light);
    for (let k = 0; k < 4; k++) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.6), body.material);
      leg.rotation.y = (k / 4) * Math.PI * 2 + 0.78;
      leg.position.set(Math.sin(leg.rotation.y) * 0.5, 0.08, Math.cos(leg.rotation.y) * 0.5);
      g.add(leg);
    }
    g.position.set(x, 0, z);
    this.scene.add(g);
    this.deployables.push({ type: 'mine', owner, x, z, armT: 1.0, life: 30, mesh: g, light });
  }

  addTurret(owner, x, z) {
    const g = new THREE.Group();
    const mDark = new THREE.MeshStandardMaterial({ color: 0x2c3030, metalness: 0.7, roughness: 0.4 });
    const mCol = new THREE.MeshStandardMaterial({ color: owner.def.colors.secondary, metalness: 0.5, roughness: 0.5 });
    const mGlow = new THREE.MeshBasicMaterial({ color: owner.def.colors.glow });
    for (let k = 0; k < 3; k++) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.15, 1.4, 0.15), mDark);
      const a = (k / 3) * Math.PI * 2;
      leg.position.set(Math.sin(a) * 0.5, 0.6, Math.cos(a) * 0.5);
      leg.rotation.set(Math.cos(a) * 0.4, 0, -Math.sin(a) * 0.4);
      leg.castShadow = true;
      g.add(leg);
    }
    const head = new THREE.Group();
    head.position.y = 1.4;
    const box = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.6, 0.9), mCol);
    box.castShadow = true;
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 1.0, 8), mDark);
    barrel.rotation.x = Math.PI / 2; barrel.position.z = 0.8;
    const eye = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.1, 0.05), mGlow);
    eye.position.set(0, 0.1, 0.46);
    head.add(box, barrel, eye);
    g.add(head);
    g.position.set(x, 0, z);
    this.scene.add(g);
    this.fx.ring(g.position, 0.5, 3, owner.def.colors.glow, 0.4);
    this.deployables.push({ type: 'turret', owner, x, z, life: 12, hp: 260, fireT: 0.5, mesh: g, head, mats: [mDark, mCol, mGlow] });
  }

  addDrone(owner, phase) {
    const mesh = new THREE.Group();
    const body = new THREE.Mesh(new THREE.OctahedronGeometry(0.35), new THREE.MeshStandardMaterial({ color: owner.def.colors.secondary, metalness: 0.6, roughness: 0.3 }));
    const glow = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 6), new THREE.MeshBasicMaterial({ color: owner.def.colors.glow }));
    glow.position.y = -0.2;
    mesh.add(body, glow);
    mesh.position.set(owner.pos.x, 3, owner.pos.z);
    this.scene.add(mesh);
    this.deployables.push({ type: 'drone', owner, phase, life: 10, fireT: rand(0.2, 0.6), mesh, x: owner.pos.x, z: owner.pos.z });
  }

  addFirePool(owner, x, z, radius, life) {
    const tel = this.fx.telegraph({ x, z }, radius, 0xff5010);
    this.fx.decal({ x, z }, radius);
    this.deployables.push({ type: 'fire', owner, x, z, r: radius, life, tickT: 0, tel });
  }

  removeDeployable(d) {
    const i = this.deployables.indexOf(d);
    if (i >= 0) this.deployables.splice(i, 1);
    if (d.mesh) {
      this.scene.remove(d.mesh);
      d.mesh.traverse((o) => { if (o.isMesh) { o.geometry.dispose(); } });
    }
    if (d.tel) d.tel.release();
  }

  damageDeployable(d, amt) {
    d.hp -= amt;
    if (d.hp <= 0) {
      this.fx.explosion(_v.set(d.x, 1.2, d.z), 2.5, 0xffa040, this.camTarget);
      this.sfx('small_boom', d);
      this.removeDeployable(d);
    }
  }

  hitDeployables(p) {
    for (const d of this.deployables) {
      if (d.type !== 'turret' || d.owner === p.owner) continue;
      if (Math.hypot(d.x - p.pos.x, d.z - p.pos.z) < 1.0 + p.radius) {
        p.dead = true;
        if (p.aoe > 0) this.explode(p.pos, p.aoe, p.aoeDmg, p.owner, { ...p.opts, color: p.color });
        else { this.damageDeployable(d, p.dmg); this.fx.impact(p.pos, p.color); }
        return true;
      }
    }
    return false;
  }

  nearestEnemy(owner, x, z, range) {
    let best = null, bd = range;
    for (const r of this.robots) {
      if (r === owner || !r.alive || r.isCloakedFrom(owner) || r.s.invulnT > 0) continue;
      const d = Math.hypot(r.pos.x - x, r.pos.z - z);
      if (d < bd && this.map.lineOfSight(x, z, r.pos.x, r.pos.z, 1.6)) { bd = d; best = r; }
    }
    return best;
  }

  updateDeployables(dt) {
    for (const d of [...this.deployables]) {
      d.life -= dt;
      if (d.life <= 0 || (d.type === 'drone' && !d.owner.alive)) {
        if (d.type === 'drone' || d.type === 'turret') this.fx.burst(_v.set(d.x, d.mesh.position.y, d.z), 10, { color: 0xffffff, color1: d.owner.def.colors.glow, speed: 5, life: 0.3, size: 0.5 });
        this.removeDeployable(d);
        continue;
      }
      switch (d.type) {
        case 'mine': {
          d.armT -= dt;
          d.light.visible = d.armT > 0 ? true : Math.sin(this.time * 10) > 0;
          if (d.armT > 0) break;
          for (const r of this.robots) {
            if (r === d.owner || !r.alive) continue;
            if (Math.hypot(r.pos.x - d.x, r.pos.z - d.z) < 3.5 + r.radius * 0.5) {
              this.removeDeployable(d);
              this.explode({ x: d.x, y: 0.5, z: d.z }, 4.2, 220, d.owner, { color: d.owner.def.colors.glow, knock: 12 });
              break;
            }
          }
          break;
        }
        case 'turret': {
          d.fireT -= dt;
          const t = this.nearestEnemy(d.owner, d.x, d.z, 24);
          if (t) {
            const yaw = Math.atan2(t.pos.x - d.x, t.pos.z - d.z);
            d.head.rotation.y = yaw;
            if (d.fireT <= 0) {
              d.fireT = 0.35;
              const mx = d.x + Math.sin(yaw) * 1.3, mz = d.z + Math.cos(yaw) * 1.3;
              this.proj.spawn({ owner: d.owner, kind: 'bolt', x: mx, y: 1.4, z: mz, dirX: Math.sin(yaw + rand(-0.03, 0.03)), dirZ: Math.cos(yaw + rand(-0.03, 0.03)), speed: 60, dmg: 20, range: 28, width: 0.15, color: d.owner.def.colors.glow });
              this.fx.muzzle(_v.set(mx, 1.4, mz), d.owner.def.colors.glow, 0.6);
              this.sfx('laser', d, { vol: 0.5, key: 't' });
            }
          } else d.head.rotation.y += dt;
          break;
        }
        case 'drone': {
          const o = d.owner;
          const a = this.time * 2 + d.phase;
          const tx = o.pos.x + Math.cos(a) * 3.2, tz = o.pos.z + Math.sin(a) * 3.2;
          d.x += (tx - d.x) * Math.min(1, dt * 8); d.z += (tz - d.z) * Math.min(1, dt * 8);
          d.mesh.position.set(d.x, 3.6 + Math.sin(this.time * 4 + d.phase) * 0.3, d.z);
          d.mesh.rotation.y += dt * 3;
          d.fireT -= dt;
          if (d.fireT <= 0) {
            const t = this.nearestEnemy(o, d.x, d.z, 22);
            d.fireT = t ? rand(0.5, 0.7) : 0.2;
            if (t) {
              const yaw = Math.atan2(t.pos.x - d.x, t.pos.z - d.z);
              this.proj.spawn({ owner: o, kind: 'bolt', x: d.x, y: 2.4, z: d.z, dirX: Math.sin(yaw), dirZ: Math.cos(yaw), speed: 55, dmg: 28, range: 26, width: 0.13, color: o.def.colors.glow });
              this.sfx('laser', d, { vol: 0.4, key: 'd', gap: 0.08 });
            }
          }
          break;
        }
        case 'fire': {
          d.tickT -= dt;
          d.tel.m.material.opacity = 0.5 + Math.sin(this.time * 8) * 0.2;
          const n = Math.ceil(3 * this.fx.pmul);
          for (let k = 0; k < n; k++) {
            const a = Math.random() * Math.PI * 2, rr = Math.sqrt(Math.random()) * d.r;
            this.fx.add.spawn(d.x + Math.cos(a) * rr, 0.3, d.z + Math.sin(a) * rr, 0, rand(2, 4), 0, rand(0.4, 0.7), 1.4, 0.3, FIRE_A, FIRE_B, 0, 1, 0.9);
          }
          if (Math.random() < 0.3) this.fx.trail(_v.set(d.x + rand(-d.r, d.r) * 0.6, 2, d.z + rand(-d.r, d.r) * 0.6), 0x333333, 1.5, 1.2, true);
          if (d.tickT <= 0) {
            d.tickT = 0.25;
            for (const r of this.robots) {
              if (r === d.owner || !r.alive) continue;
              if (Math.hypot(r.pos.x - d.x, r.pos.z - d.z) < d.r + r.radius * 0.5) this.damage(r, 17, d.owner, { burn: 20, burnT: 1.5, noNumber: true });
            }
          }
          break;
        }
      }
    }
  }

  // ---------- 更新 ----------
  updateZone(dt) {
    const z = this.zone;
    if (z.phase >= ZONE_RADII.length - 1) return;
    z.t -= dt;
    if (z.state === 'wait') {
      if (z.t <= 0) {
        z.state = 'shrink';
        z.t = z.shrink;
        z.from = { cx: z.cx, cz: z.cz, r: z.r };
        if (!this.attract) { this.emit('announce', { text: 'ZONE SHRINKING', sub: '安全地帯が縮小中', color: '#5ab0ff', small: true }); this.sfx('zone', null); }
      }
    } else {
      const k = 1 - Math.max(0, z.t) / z.shrink;
      const n = z.next;
      z.cx = lerp(z.from.cx, n.cx, k); z.cz = lerp(z.from.cz, n.cz, k); z.r = lerp(z.from.r, n.r, k);
      if (z.t <= 0) {
        z.phase++;
        z.state = 'wait';
        z.t = z.wait;
        z.next = z.phase < ZONE_RADII.length - 1 ? this.pickNextZone() : null;
        if (!z.next) z.t = Infinity;
      }
    }
    // ゾーン外ダメージ
    z.tickT -= dt;
    if (z.tickT <= 0) {
      z.tickT = 0.5;
      const dps = ZONE_DPS[Math.min(z.phase, ZONE_DPS.length - 1)];
      for (const r of this.robots) {
        if (!r.alive) continue;
        if (Math.hypot(r.pos.x - z.cx, r.pos.z - z.cz) > z.r) {
          this.damage(r, r.maxHp * dps * 0.5, null, { zone: true, noNumber: !r.isPlayer });
        }
      }
    }
    this.zoneMesh.position.set(z.cx, 0, z.cz);
    this.zoneMesh.scale.set(z.r, 45, z.r);
    const mt = this.zoneMesh.material.map;
    mt.repeat.set(Math.max(1, Math.round((z.r * Math.PI * 2) / 10)), 1);
    mt.offset.x = this.time * 0.02;
    if (z.next) {
      this.nextRing.visible = true;
      this.nextRing.position.set(z.next.cx, 0.1, z.next.cz);
      this.nextRing.scale.setScalar(z.next.r);
    } else this.nextRing.visible = false;
  }

  zoneTimerText() {
    const z = this.zone;
    if (!z.next) return { label: 'FINAL ZONE', t: null };
    return z.state === 'wait' ? { label: 'NEXT ZONE SHRINKS IN', t: z.t } : { label: 'ZONE SHRINKING', t: z.t };
  }

  playerControls() {
    const p = this.player;
    const c = p.ctl;
    if (touch.active) return touch.fill(this, c, this.lastDt || 0.016);
    const f = { x: -Math.sin(this.camAngle), z: -Math.cos(this.camAngle) };
    const rt = { x: -f.z, z: f.x };
    const fw = (input.isDown('up') ? 1 : 0) - (input.isDown('down') ? 1 : 0);
    const st = (input.isDown('right') ? 1 : 0) - (input.isDown('left') ? 1 : 0);
    c.mx = f.x * fw + rt.x * st;
    c.mz = f.z * fw + rt.z * st;
    // マウス → 地面
    _ndc.set((input.mouseX / window.innerWidth) * 2 - 1, -(input.mouseY / window.innerHeight) * 2 + 1);
    _ray.setFromCamera(_ndc, this.camera);
    if (_ray.ray.intersectPlane(_plane, _v)) { c.aimX = _v.x; c.aimZ = _v.z; }
    c.fire = input.mouseDown;
    c.skill[0] = input.wasPressed('skill1');
    c.skill[1] = input.wasPressed('skill2');
    c.skill[2] = input.wasPressed('skill3');
    c.ult = input.wasPressed('ult');
    c.boost = input.wasPressed('boost');
    if (input.wheel) {
      this.camZoom = clamp(this.camZoom + input.wheel * 0.08, 0.7, 1.4);
    }
    return c;
  }

  update(dt) {
    dt = Math.min(dt, 0.05) * this.timeScale;
    this.time += dt;
    this.lastDt = dt;

    if (this.state === 'countdown') {
      this.countdown -= dt;
      const prev = Math.ceil(this.countdown + dt);
      const cur = Math.ceil(this.countdown);
      if (cur !== prev && cur > 0 && cur <= 3) { this.emit('countdown', cur); this.sfx('ui_click', null, { force: true }); }
      if (this.countdown <= 0) {
        this.state = 'playing';
        this.emit('countdown', 0);
        this.sfx('ui_start', null, { force: true });
      }
    } else if (this.state === 'playing') {
      if (!this.attract) {
        this.timeLeft -= dt;
        if (this.timeLeft <= 0) { this.timeLeft = 0; this.endMatch(); }
      }
      this.updateZone(dt);
    } else if (this.state === 'ended') {
      this.endT += dt / Math.max(0.05, this.timeScale);
      this.timeScale = Math.max(0.25, 1 - this.endT * 0.8);
      if (this.endT > 2.8 && !this.endEmitted) { this.endEmitted = true; this.emit('end', this.results()); }
    }

    // タイマー
    for (let i = this.timers.length - 1; i >= 0; i--) {
      const t = this.timers[i];
      t.t -= dt;
      if (t.t <= 0) { this.timers.splice(i, 1); t.fn(); }
    }

    const active = this.state === 'playing';
    for (const r of this.robots) {
      if (!r.alive) {
        if (this.state !== 'ended') {
          r.respawnT -= dt;
          if (r.respawnT <= 0) this.respawn(r);
        }
        continue;
      }
      let ctl;
      if (r.isPlayer && this.autoplay) ctl = active ? r.brain.update(dt) : IDLE;
      else if (r.isPlayer) ctl = active ? this.playerControls() : IDLE;
      else ctl = active ? r.brain.update(dt) : IDLE;
      if (r.isPlayer && !active && this.state === 'countdown') { this.playerControls(); ctl = { ...IDLE, aimX: r.ctl.aimX, aimZ: r.ctl.aimZ }; }
      r.update(dt, ctl);
    }
    // ロボット同士の押し合い
    const R = this.robots;
    for (let i = 0; i < R.length; i++) {
      const a = R[i];
      if (!a.alive) continue;
      for (let j = i + 1; j < R.length; j++) {
        const b = R[j];
        if (!b.alive) continue;
        const dx = b.pos.x - a.pos.x, dz = b.pos.z - a.pos.z;
        const d = Math.hypot(dx, dz), m = a.radius + b.radius;
        if (d < m && d > 1e-4) {
          const push = (m - d) / 2;
          const nx = dx / d, nz = dz / d;
          const wa = b.def.mass / (a.def.mass + b.def.mass), wb = 1 - wa;
          a.pos.x -= nx * push * 2 * wa; a.pos.z -= nz * push * 2 * wa;
          b.pos.x += nx * push * 2 * wb; b.pos.z += nz * push * 2 * wb;
        }
      }
    }
    // ピックアップ
    for (const p of this.pickups) {
      if (!p.active) {
        p.t -= dt;
        if (p.t <= 0) { p.active = true; p.item.visible = true; }
        continue;
      }
      p.item.rotation.y += dt * 2;
      p.item.position.y = 1.4 + Math.sin(this.time * 3 + p.x) * 0.2;
      for (const r of this.robots) {
        if (!r.alive || Math.hypot(r.pos.x - p.x, r.pos.z - p.z) > 2.2) continue;
        if (p.type === 'repair') { if (r.hp >= r.maxHp - 1) continue; r.heal(PICKUP.repair); }
        else { r.ultCharge = Math.min(100, r.ultCharge + PICKUP.core); r.en = r.maxEn; }
        p.active = false; p.t = PICKUP.respawn; p.item.visible = false;
        this.fx.burst(_v.set(p.x, 1.5, p.z), 20, { color: 0xffffff, color1: p.type === 'repair' ? 0x50ff80 : 0x50b8ff, speed: 6, life: 0.5, size: 0.8, size1: 0.1, up: 0.5 });
        this.sfx('pickup', r);
        if (r.isPlayer) this.emit('announce', { text: p.type === 'repair' ? 'REPAIR +' + PICKUP.repair : 'CORE +' + PICKUP.core + '% ULT', color: p.type === 'repair' ? '#50ff80' : '#50b8ff', small: true, mini: true });
        break;
      }
    }

    this.updateDeployables(dt);
    this.proj.update(dt);
    this.fx.update(dt);
    // 煙突の煙
    this.smokeT -= dt;
    if (this.smokeT <= 0) {
      this.smokeT = 0.12;
      for (const l of this.map.lights) {
        if (l.kind !== 'smoke') continue;
        if (Math.hypot(l.x - this.camTarget.x, l.z - this.camTarget.z) > 70) continue;
        this.fx.smoke.spawn(l.x, l.y, l.z, rand(-0.3, 0.3) + 1.2, rand(1.5, 2.5), rand(-0.3, 0.3) + 0.6, 3.5, 2.5, 8, SMOKE_A, SMOKE_B, -0.1, 0.2, 0.35);
      }
    }

    this.updateTrueSight(dt);

    this.updateCamera(dt);
    audio.setListener(this.camTarget.x, this.camTarget.z);
  }

  // 視界内か（TrueSight 無効時は常に true）
  canSee(x, z, rad = 0) {
    return !this.tsOn || this.ts.isVisible(x, z, rad);
  }

  updateTrueSight(dt) {
    const p = this.player;
    this.tsOn = !!(this.ts && settings.gameplay.trueSight);
    visUniforms.uVisOn.value = this.tsOn ? 1 : 0;
    if (this.tsOn) {
      this.ts.update(p.pos.x, p.pos.z);
      visUniforms.uVisStrength.value = settings.gameplay.visDark;
      visUniforms.uVisSoft.value = settings.graphics.softVision ? 0.9 : 0.0;
    } else if (this.ts) this.ts.active = false;

    // ロボット：視界外はフェードアウトして非表示
    const k = Math.min(1, dt * 10);
    for (const r of this.robots) {
      if (!r.alive) continue;
      const want = r === p || this.canSee(r.pos.x, r.pos.z, r.radius) ? 1 : 0;
      r.seen += (want - r.seen) * k;
      if (want === 1 && r.seen > 0.98) r.seen = 1;
      r.updateVisibility(p || null, r.seen);
    }
    // 弾
    for (const pr of this.proj.list) {
      pr.mesh.visible = pr.owner === p || this.canSee(pr.pos.x, pr.pos.z, 0.6);
    }
    // 設置物
    for (const d of this.deployables) {
      if (d.mesh) d.mesh.visible = d.owner === p || this.canSee(d.x, d.z, 1.0);
    }
    // 補給ポッド
    for (const pk of this.pickups) pk.item.visible = pk.active && this.canSee(pk.x, pk.z, 1.0);
  }

  updateCamera(dt) {
    let tx, tz;
    if (this.attract) {
      this.followT -= dt;
      let f = this.robots[this.followIdx % this.robots.length];
      if (this.followT <= 0 || !f.alive) {
        this.followIdx = (this.followIdx + 1 + Math.floor(Math.random() * 3)) % this.robots.length;
        this.followT = 10;
        f = this.robots[this.followIdx];
      }
      tx = f.pos.x; tz = f.pos.z;
      this.camAngle += dt * 0.05;
      this.camZoom = 1.15;
    } else {
      const p = this.player;
      tx = p.pos.x; tz = p.pos.z;
      if (p.alive) {
        const ax = clamp((p.aim.x - p.pos.x) * 0.18, -7, 7), az = clamp((p.aim.z - p.pos.z) * 0.18, -7, 7);
        tx += ax; tz += az;
      }
    }
    const k = Math.min(1, dt * 6);
    this.camTarget.x += (tx - this.camTarget.x) * k;
    this.camTarget.z += (tz - this.camTarget.z) * k;
    const h = 40 * this.camZoom, back = 25 * this.camZoom;
    const sh = this.fx.shake;
    this.camera.position.set(
      this.camTarget.x + Math.sin(this.camAngle) * back + (Math.random() - 0.5) * sh,
      h + (Math.random() - 0.5) * sh,
      this.camTarget.z + Math.cos(this.camAngle) * back + (Math.random() - 0.5) * sh,
    );
    this.camera.lookAt(this.camTarget.x, 0, this.camTarget.z);
    // 影カメラ追従
    this.sun.position.set(this.camTarget.x + 35, 70, this.camTarget.z + 20);
    this.sun.target.position.set(this.camTarget.x, 0, this.camTarget.z);
    // カットアウェイ
    const focus = this.attract ? this.robots[this.followIdx % this.robots.length] : this.player;
    cutUniforms.uCutTarget.value.set(focus.pos.x, 1.5, focus.pos.z);
    cutUniforms.uCutCam.value.copy(this.camera.position);
    cutUniforms.uCutR.value = 6.5 * focus.def.scale;
    cutUniforms.uCutOn.value = focus.alive ? 1 : 0;
  }

  // デバッグ用：プレイヤー機をAI操作にする
  enableAutoplay() {
    this.autoplay = true;
    this.player.brain = new BotBrain(this.player, this, 'hard');
  }

  endMatch() {
    if (this.state === 'ended') return;
    this.state = 'ended';
    this.endT = 0;
    this.emit('announce', { text: 'MATCH OVER', sub: '', color: '#ffd24a' });
    this.sfx('zone', null);
  }

  results() {
    const list = [...this.robots].sort((a, b) => b.stats.score - a.stats.score || b.stats.kills - a.stats.kills || a.stats.deaths - b.stats.deaths);
    return list.map((r, i) => ({ rank: i + 1, name: r.name, cls: r.def, isPlayer: r.isPlayer, ...r.stats }));
  }

  ranking() {
    return [...this.robots].sort((a, b) => b.stats.score - a.stats.score || b.stats.kills - a.stats.kills);
  }

  dispose() {
    if (this.ts) this.ts.dispose();
    visUniforms.uVisOn.value = 0;
    this.proj.clear();
    this.fx.clear();
    for (const d of [...this.deployables]) this.removeDeployable(d);
    for (const r of this.robots) r.destroy();
    for (const p of this.pickups) this.scene.remove(p.group);
    this.scene.remove(this.map.group);
    this.listeners.length = 0;
  }
}

const IDLE = { mx: 0, mz: 0, aimX: 0, aimZ: 0, fire: false, skill: [false, false, false], ult: false, boost: false };
const FIRE_A = new THREE.Color(1, 0.8, 0.3);
const FIRE_B = new THREE.Color(0.7, 0.1, 0.0);
const SMOKE_A = new THREE.Color(0.35, 0.33, 0.32);
const SMOKE_B = new THREE.Color(0.12, 0.12, 0.12);

export { DIFFICULTY, pick };
