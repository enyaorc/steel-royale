import { settings } from './settings.js';
import { input } from './input.js';

// スマホ用タッチ操作
// 左スティック：移動 / 右スティック：通常攻撃の方向（倒している間連射、タップで自動照準射撃）
// スキルボタン：押して射出方向へフリックして離すと発動。タップのみは自動照準。
// 出力は Game.playerControls と同じ controls 形式。PC操作とは独立して共存する。

// スキルごとの照準ガイド種別と射程
// point: 地点指定（フリック距離で着弾距離） / line: 方向指定 / self: 自機中心（方向不要）
export const SKILL_AIM = {
  missiles: { t: 'point', r: 30, a: 4 },
  shield: { t: 'self' },
  grenade: { t: 'point', r: 26, a: 5.5 },
  hyperbeam: { t: 'line', r: 60, w: 1.6 },
  slam: { t: 'self', r: 7 },
  fortress: { t: 'self' },
  rocket: { t: 'line', r: 45, w: 0.6 },
  artillery: { t: 'point', r: 42, a: 12 },
  cloak: { t: 'self' },
  mine: { t: 'self' },
  blink: { t: 'point', r: 15, a: 1.5 },
  gauss: { t: 'line', r: 90, w: 1.5 },
  lunge: { t: 'line', r: 14, w: 1.2 },
  cyclone: { t: 'self', r: 5 },
  grapple: { t: 'line', r: 21, w: 0.5 },
  berserk: { t: 'self' },
  turret: { t: 'self' },
  repair: { t: 'self' },
  emp: { t: 'self', r: 9 },
  drones: { t: 'self' },
  napalm: { t: 'point', r: 24, a: 5 },
  leap: { t: 'point', r: 18, a: 5.5 },
  vent: { t: 'line', r: 9.5, w: 3 },
  meltdown: { t: 'self', r: 14 },
};

const STICK_R = 60;        // スティックの最大移動量(px)
const FLICK_FULL = 130;    // この距離フリックすると最大射程(px)
const TAP_MOVE = 14;       // これ以下の移動はタップ扱い(px)
const TAP_TIME = 280;      // ms

// ポインタキャプチャ（非対応・失敗時は無視）
function cap(el, id) {
  try { el.setPointerCapture(id); } catch (e) { /* ignore */ }
}

function isCoarse() {
  return window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
}

class TouchControls {
  constructor() {
    this.active = false;
    this.left = { id: null, ox: 0, oy: 0, vx: 0, vy: 0 };
    this.right = { id: null, cx: 0, cy: 0, vx: 0, vy: 0, mag: 0, t0: 0, moved: 0 };
    this.sk = null;           // 操作中のスキルボタン
    this.pending = [];        // 離した瞬間のスキル発動
    this.tapFireT = 0;
    this.boostTap = false;
    this.boardOpen = false;
    this.indicator = null;    // HUD描画用の照準ガイド
    this.root = null;
    this.buttons = {};
    this.lastAim = { x: 0, z: 1 };

    window.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'touch' && settings.touch.mode === 'auto') this.setActive(true);
    }, true);
    window.addEventListener('pointermove', (e) => {
      if (e.pointerType === 'mouse' && settings.touch.mode === 'auto' && (Math.abs(e.movementX) + Math.abs(e.movementY)) > 2) this.setActive(false);
    });
    window.addEventListener('keydown', () => {
      if (settings.touch.mode === 'auto' && this.active && !document.activeElement?.matches?.('input')) this.setActive(false);
    });
    this.applyMode();
  }

  applyMode() {
    const m = settings.touch.mode;
    this.setActive(m === 'touch' ? true : m === 'pc' ? false : (this.active || isCoarse()));
  }

  setActive(v) {
    if (this.active === v && document.body.classList.contains('touch-mode') === v) return;
    this.active = v;
    input.touchMode = v;
    document.body.classList.toggle('touch-mode', v);
    if (!v) this.resetSticks();
    this.layout();
  }

  resetSticks() {
    this.left.id = null; this.left.vx = this.left.vy = 0;
    this.right.id = null; this.right.vx = this.right.vy = 0; this.right.mag = 0;
    this.sk = null; this.indicator = null;
    this.pending.length = 0;
    if (this.root) {
      this.root.querySelector('#ls-base').classList.remove('on');
      this.setKnob('#rs-knob', 0, 0);
    }
  }

  // HUD.bind から呼ばれる：タッチUIの構築
  build(root, slotDefs) {
    this.root = root;
    root.innerHTML = `
      <div id="tz-left"><div id="ls-base"><div id="ls-knob"></div></div></div>
      <div id="rs-base"><div id="rs-knob"></div></div>
      <div id="tbtn-top"><button id="tbtn-board" class="tbtn-s">SCORE</button><button id="tbtn-pause" class="tbtn-s">II</button></div>`;
    this.buttons = {};
    for (const d of slotDefs) {
      const el = document.createElement('div');
      el.className = 'tbtn skill' + (d.ult ? ' ult' : '') + (d.key === 'boost' ? ' boost' : '');
      el.dataset.key = d.key;
      el.innerHTML = `<div class="sk-icon">${d.icon}</div><div class="sk-cd"></div><div class="sk-num"></div>`;
      el.style.setProperty('--glow', d.glow);
      root.appendChild(el);
      this.buttons[d.key] = { el, def: d, cd: el.querySelector('.sk-cd'), num: el.querySelector('.sk-num') };
    }
    this.slotDefs = slotDefs;
    this.bindEvents();
    this.layout();
    this.resetSticks();
  }

  layout() {
    if (!this.root) return;
    const s = settings.touch.scale;
    this.root.style.setProperty('--ts', s);
    this.root.style.opacity = settings.touch.opacity;
    const W = window.innerWidth, H = window.innerHeight;
    const size = Math.min(1, H / 420) * s;
    const rsR = 66 * size;
    const cx = W - 40 * size - rsR - 20, cy = H - 30 * size - rsR - 10;
    const rs = this.root.querySelector('#rs-base');
    rs.style.width = rs.style.height = `${rsR * 2}px`;
    rs.style.left = `${cx - rsR}px`; rs.style.top = `${cy - rsR}px`;
    this.right.cx = cx; this.right.cy = cy; this.right.r = rsR;
    // スキルボタンを右スティックの周りに円弧状に配置
    const place = { skill1: [180, 118], skill2: [140, 122], skill3: [100, 124], ult: [158, 196], boost: [212, 116] };
    for (const [key, b] of Object.entries(this.buttons)) {
      const [ang, dist] = place[key] || [180, 120];
      const a = (ang * Math.PI) / 180;
      const bs = (key === 'ult' ? 70 : 56) * size;
      const x = cx + Math.cos(a) * dist * size, y = cy - Math.sin(a) * dist * size;
      b.el.style.width = b.el.style.height = `${bs}px`;
      b.el.style.left = `${x - bs / 2}px`; b.el.style.top = `${y - bs / 2}px`;
      b.cx = x; b.cy = y; b.r = bs / 2;
    }
  }

  setKnob(sel, dx, dy) {
    const k = this.root && this.root.querySelector(sel);
    if (k) k.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
  }

  bindEvents() {
    const root = this.root;
    const opts = { passive: false };
    // 左スティック（触れた位置に出現）
    const tz = root.querySelector('#tz-left');
    const base = root.querySelector('#ls-base');
    tz.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      if (this.left.id !== null) return;
      cap(tz, e.pointerId);
      this.left.id = e.pointerId;
      this.left.ox = e.clientX; this.left.oy = e.clientY;
      this.left.vx = this.left.vy = 0;
      base.style.left = `${e.clientX}px`; base.style.top = `${e.clientY}px`;
      base.classList.add('on');
      this.setKnob('#ls-knob', 0, 0);
    }, opts);
    tz.addEventListener('pointermove', (e) => {
      if (e.pointerId !== this.left.id) return;
      let dx = e.clientX - this.left.ox, dy = e.clientY - this.left.oy;
      const l = Math.hypot(dx, dy);
      const R = STICK_R * settings.touch.scale;
      if (l > R) { dx = (dx / l) * R; dy = (dy / l) * R; }
      this.left.vx = dx / R; this.left.vy = dy / R;
      this.setKnob('#ls-knob', dx, dy);
    });
    const endL = (e) => {
      if (e.pointerId !== this.left.id) return;
      this.left.id = null; this.left.vx = this.left.vy = 0;
      base.classList.remove('on');
    };
    tz.addEventListener('pointerup', endL);
    tz.addEventListener('pointercancel', endL);

    // 右スティック
    const rs = root.querySelector('#rs-base');
    rs.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      if (this.right.id !== null) return;
      cap(rs, e.pointerId);
      Object.assign(this.right, { id: e.pointerId, vx: 0, vy: 0, mag: 0, t0: performance.now(), moved: 0 });
    }, opts);
    rs.addEventListener('pointermove', (e) => {
      if (e.pointerId !== this.right.id) return;
      let dx = e.clientX - this.right.cx, dy = e.clientY - this.right.cy;
      const l = Math.hypot(dx, dy);
      const R = this.right.r * 0.8;
      this.right.moved = Math.max(this.right.moved, l);
      if (l > R) { dx = (dx / l) * R; dy = (dy / l) * R; }
      this.right.vx = dx / R; this.right.vy = dy / R;
      this.right.mag = Math.min(1, l / R);
      this.setKnob('#rs-knob', dx, dy);
    });
    const endR = (e) => {
      if (e.pointerId !== this.right.id) return;
      const tap = performance.now() - this.right.t0 < TAP_TIME && this.right.moved < TAP_MOVE;
      if (tap) this.tapFireT = 0.22;
      this.right.id = null; this.right.vx = this.right.vy = 0; this.right.mag = 0;
      this.setKnob('#rs-knob', 0, 0);
    };
    rs.addEventListener('pointerup', endR);
    rs.addEventListener('pointercancel', endR);

    // スキルボタン
    for (const [key, b] of Object.entries(this.buttons)) {
      const el = b.el;
      el.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        if (this.sk) return;
        cap(el, e.pointerId);
        if (key === 'boost') { this.boostTap = true; el.classList.add('press'); this.sk = { id: e.pointerId, key, boost: true, b }; return; }
        this.sk = { id: e.pointerId, key, b, x: e.clientX, y: e.clientY, t0: performance.now(), left: false };
        el.classList.add('press');
      }, opts);
      el.addEventListener('pointermove', (e) => {
        const s = this.sk;
        if (!s || e.pointerId !== s.id || s.boost) return;
        s.x = e.clientX; s.y = e.clientY;
        if (Math.hypot(s.x - b.cx, s.y - b.cy) > b.r + 6) s.left = true;
      });
      const endS = (e) => {
        const s = this.sk;
        if (!s || e.pointerId !== s.id) return;
        this.sk = null;
        el.classList.remove('press');
        this.indicator = null;
        if (s.boost) return;
        const d = Math.hypot(s.x - b.cx, s.y - b.cy);
        const onBtn = d <= b.r + 6;
        const tap = !s.left && performance.now() - s.t0 < 600;
        if (e.type === 'pointercancel') return;
        if (onBtn && s.left) return; // ボタン上に戻して離した → キャンセル
        const act = { key, auto: tap || d < TAP_MOVE, sx: s.x - b.cx, sy: s.y - b.cy, frac: Math.min(1, Math.max(0.12, d / (FLICK_FULL * settings.touch.scale))) };
        this.pending.push(act);
      };
      el.addEventListener('pointerup', endS);
      el.addEventListener('pointercancel', endS);
    }

    root.querySelector('#tbtn-pause').addEventListener('click', () => window.dispatchEvent(new Event('steel-pause')));
    root.querySelector('#tbtn-board').addEventListener('click', () => { this.boardOpen = !this.boardOpen; });
  }

  // 画面ベクトル → ワールド方向（W=画面上 と同じ基準）
  toWorld(game, sx, sy) {
    const f = { x: -Math.sin(game.camAngle), z: -Math.cos(game.camAngle) };
    const rt = { x: -f.z, z: f.x };
    return { x: rt.x * sx + f.x * -sy, z: rt.z * sx + f.z * -sy };
  }

  nearestEnemy(game, range) {
    const p = game.player;
    let best = null, bd = range;
    for (const r of game.robots) {
      if (r === p || !r.alive || r.isCloakedFrom(p) || r.seen < 0.5) continue;
      const d = Math.hypot(r.pos.x - p.pos.x, r.pos.z - p.pos.z);
      if (d < bd) { bd = d; best = r; }
    }
    return best;
  }

  skillIdOf(game, key) {
    const def = game.player.def;
    if (key === 'ult') return def.ult.id;
    return def.skills[+key.slice(-1) - 1].id;
  }

  // controls を埋める
  fill(game, c, dt) {
    const p = game.player;
    const mv = this.toWorld(game, this.left.vx, this.left.vy);
    c.mx = mv.x; c.mz = mv.z;
    c.skill[0] = c.skill[1] = c.skill[2] = false; c.ult = false;
    c.boost = this.boostTap; this.boostTap = false;
    c.fire = false;

    // 照準方向
    let dir = null;
    if (this.right.id !== null && this.right.mag > 0.2) {
      dir = this.toWorld(game, this.right.vx, this.right.vy);
      c.fire = this.right.mag > 0.35;
    } else if (this.tapFireT > 0) {
      this.tapFireT -= dt;
      const t = this.nearestEnemy(game, (p.def.primary.range || 10) + 6);
      if (t) dir = { x: t.pos.x - p.pos.x, z: t.pos.z - p.pos.z };
      c.fire = true;
    } else if (Math.hypot(mv.x, mv.z) > 0.2) {
      dir = { x: mv.x, z: mv.z };
    }
    if (dir) {
      const l = Math.hypot(dir.x, dir.z) || 1;
      this.lastAim = { x: dir.x / l, z: dir.z / l };
    }
    let aimDist = 14;

    // 照準ガイド（押している間）
    this.indicator = null;
    if (this.sk && !this.sk.boost) {
      const s = this.sk, b = s.b;
      const id = this.skillIdOf(game, s.key);
      const A = SKILL_AIM[id] || { t: 'self' };
      const d = Math.hypot(s.x - b.cx, s.y - b.cy);
      const cancel = s.left && d <= b.r + 6;
      let wd = this.lastAim, frac = 0.6;
      if (d >= TAP_MOVE) {
        const w = this.toWorld(game, s.x - b.cx, s.y - b.cy);
        const l = Math.hypot(w.x, w.z) || 1;
        wd = { x: w.x / l, z: w.z / l };
        frac = Math.min(1, Math.max(0.12, d / (FLICK_FULL * settings.touch.scale)));
      } else if (A.t !== 'self') {
        const t = this.nearestEnemy(game, (A.r || 20) + 8);
        if (t) {
          const dx = t.pos.x - p.pos.x, dz = t.pos.z - p.pos.z, l = Math.hypot(dx, dz) || 1;
          wd = { x: dx / l, z: dz / l };
          frac = A.r ? Math.min(1, l / A.r) : 0.6;
        }
      }
      this.indicator = { ...A, dirX: wd.x, dirZ: wd.z, dist: (A.r || 0) * frac, cancel, auto: d < TAP_MOVE };
    }

    // スキル発動（1フレームに1つ）
    const act = this.pending.shift();
    if (act) {
      const id = this.skillIdOf(game, act.key);
      const A = SKILL_AIM[id] || { t: 'self' };
      let wd = this.lastAim, dist = (A.r || 14) * 0.6;
      if (A.t !== 'self') {
        if (act.auto) {
          const t = this.nearestEnemy(game, (A.r || 20) + 8);
          if (t) {
            const dx = t.pos.x - p.pos.x, dz = t.pos.z - p.pos.z, l = Math.hypot(dx, dz) || 1;
            wd = { x: dx / l, z: dz / l };
            dist = l;
          }
        } else {
          const w = this.toWorld(game, act.sx, act.sy);
          const l = Math.hypot(w.x, w.z) || 1;
          wd = { x: w.x / l, z: w.z / l };
          dist = A.t === 'point' ? Math.max(2, (A.r || 14) * act.frac) : (A.r || 14);
        }
      }
      dir = wd;
      this.lastAim = wd;
      aimDist = Math.max(2, dist);
      if (act.key === 'ult') c.ult = true;
      else c.skill[+act.key.slice(-1) - 1] = true;
    }

    const a = dir ? (() => { const l = Math.hypot(dir.x, dir.z) || 1; return { x: dir.x / l, z: dir.z / l }; })() : this.lastAim;
    c.aimX = p.pos.x + a.x * aimDist;
    c.aimZ = p.pos.z + a.z * aimDist;
    return c;
  }
}

export const touch = new TouchControls();
