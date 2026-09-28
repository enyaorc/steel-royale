import * as THREE from 'three';
import { settings, keyName } from './settings.js';
import { input } from './input.js';
import { touch } from './touch.js';
import { TEAMS } from './conquest.js';
import { icon } from './icons.js';
import { fmtTime, hexToCss } from './util.js';
import { MAP_HALF, BOOST, SCORE, RESPAWN_TIME } from './config.js';

// ゲーム中HUD

const $ = (s) => document.querySelector(s);
const _v = new THREE.Vector3();

export class HUD {
  constructor(portraits) {
    this.portraits = portraits;
    this.root = $('#hud');
    this.overlay = $('#overlay');
    this.octx = this.overlay.getContext('2d');
    this.mini = $('#minimap');
    this.mctx = this.mini.getContext('2d');
    this.boardT = 0;
    this.game = null;
    this.announceQueue = [];
    this.announceT = 0;
    this.hurtFlash = 0;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.dpr = dpr;
    this.overlay.width = window.innerWidth * dpr;
    this.overlay.height = window.innerHeight * dpr;
  }

  bind(game) {
    this.game = game;
    const p = game.player;
    this.root.classList.remove('hidden');
    $('#pc-portrait').src = this.portraits[p.def.id];
    $('#pc-name').textContent = p.name;
    $('#pc-class').textContent = `${p.def.name} / ${p.def.role}`;
    $('#pc-name').style.color = '#fff';
    $('#hud-players').textContent = `${game.robots.length} PLAYERS`;
    // チーム制圧モードの表示切替
    const team = game.mode === 'team';
    document.body.classList.toggle('mode-team', team);
    $('#team-bar').classList.toggle('hidden', !team);
    $('#hud-title').classList.toggle('hidden', team);
    $('#cap-status').classList.add('hidden');
    if (team) {
      const mine = p.team;
      $('#tb-left .tb-name').textContent = `${TEAMS[mine].name}${' (YOU)'}`;
      $('#tb-right .tb-name').textContent = TEAMS[mine === 'blue' ? 'red' : 'blue'].name;
      $('#tb-left').className = `tb-side ${mine}`;
      $('#tb-right').className = `tb-side ${mine === 'blue' ? 'red' : 'blue'}`;
      $('#tb-target').textContent = `目標 ${game.conquest.target}`;
      this._ptEls = null;
      $('#tb-points').innerHTML = game.conquest.points.map((pt) => `<div class="tb-pt" data-id="${pt.id}"><i></i><span>${pt.id}</span></div>`).join('');
    }
    // スキルスロット
    const slots = $('#skills');
    slots.innerHTML = '';
    const defs = [
      { key: 'boost', id: 'boost', name: 'ブースト' },
      { key: 'skill1', id: p.def.skills[0].id, name: p.def.skills[0].name },
      { key: 'skill2', id: p.def.skills[1].id, name: p.def.skills[1].name },
      { key: 'skill3', id: p.def.skills[2].id, name: p.def.skills[2].name },
      { key: 'ult', id: p.def.ult.id, name: p.def.ult.name, ult: true },
    ];
    touch.build(document.querySelector('#touch-ui'), defs.map((d) => ({ ...d, icon: icon(d.id), glow: d.ult ? '#ffd24a' : hexToCss(p.def.colors.glow) })));
    this.slots = defs.map((d) => {
      const el = document.createElement('div');
      el.className = 'skill' + (d.ult ? ' ult' : '') + (d.key === 'boost' ? ' boost' : '');
      el.innerHTML = `<div class="sk-icon">${icon(d.id)}</div><div class="sk-cd"></div><div class="sk-num"></div><div class="sk-key">${keyName(settings.keys[d.key])}</div><div class="sk-name">${d.name}</div>`;
      el.style.setProperty('--glow', hexToCss(p.def.colors.glow));
      slots.appendChild(el);
      return { ...d, el, cd: el.querySelector('.sk-cd'), num: el.querySelector('.sk-num') };
    });
    $('#killfeed').innerHTML = '';
    $('#announce').innerHTML = '';
    $('#respawn').classList.add('hidden');
    $('#countdown').classList.add('hidden');
    game.on((type, data) => this.onEvent(type, data));
    this.buildBoard();
  }

  unbind() {
    this.game = null;
    this.root.classList.add('hidden');
    $('#scoreboard').classList.add('hidden');
    this.octx.clearRect(0, 0, this.overlay.width, this.overlay.height);
  }

  onEvent(type, d) {
    const g = this.game;
    if (type === 'kill') {
      const el = document.createElement('div');
      el.className = 'kf';
      const kn = d.killer ? `<span class="kf-name ${d.killer.isPlayer ? 'me' : ''}" style="--c:${this.robotColor(d.killer)}">${d.killer.name}</span>` : '<span class="kf-name zone">ZONE</span>';
      const vn = `<span class="kf-name ${d.victim.isPlayer ? 'me' : ''}" style="--c:${this.robotColor(d.victim)}">${d.victim.name}</span>`;
      el.innerHTML = `${kn}<span class="kf-icon">&#9760;</span>${vn}`;
      if ((d.killer && d.killer.isPlayer) || d.victim.isPlayer) el.classList.add('hl');
      const kf = $('#killfeed');
      kf.prepend(el);
      while (kf.children.length > 6) kf.lastChild.remove();
      setTimeout(() => el.classList.add('fade'), 6000);
      setTimeout(() => el.remove(), 7000);
      if (d.assists.includes(g.player)) this.announce({ text: 'ASSIST', sub: `+${SCORE.assist}`, color: '#8fd0ff', small: true, mini: true });
      this.boardT = 0;
    } else if (type === 'announce') {
      this.announce(d);
    } else if (type === 'conquest') {
      const mine = g.player.team;
      const pt = d.point.id;
      if (d.team === mine) this.announce({ text: `拠点${pt}を占拠`, sub: d.contributors.includes(g.player) ? '+50' : '', color: TEAMS[mine].css, small: true });
      else if (d.team) this.announce({ text: `拠点${pt}を奪われた`, color: TEAMS[d.team].css, small: true });
      else if (d.prev === mine) this.announce({ text: `拠点${pt}が中立化された`, color: '#dddddd', small: true, mini: true });
      else this.announce({ text: `拠点${pt}を中立化`, sub: d.contributors.includes(g.player) ? '+25' : '', color: '#dddddd', small: true, mini: true });
    } else if (type === 'playerDeath') {
      $('#respawn').classList.remove('hidden');
      $('#rs-killer').innerHTML = d.killer ? `<span style="color:${hexToCss(d.killer.def.colors.glow)}">${d.killer.name}</span> (${d.killer.def.name}) に撃破された` : 'ゾーンにより大破';
      $('#rs-penalty').textContent = `${SCORE.death} SCORE`;
    } else if (type === 'respawn') {
      $('#respawn').classList.add('hidden');
    } else if (type === 'countdown') {
      const el = $('#countdown');
      el.classList.remove('hidden');
      el.textContent = d > 0 ? d : 'FIGHT!';
      el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop');
      if (d === 0) setTimeout(() => el.classList.add('hidden'), 900);
    } else if (type === 'hurt') {
      this.hurtFlash = Math.min(1, this.hurtFlash + d.amount / 250);
    }
  }

  announce(d) {
    const box = $('#announce');
    const el = document.createElement('div');
    el.className = 'an' + (d.small ? ' small' : '') + (d.mini ? ' mini' : '');
    el.innerHTML = `<div class="an-text" style="color:${d.color || '#fff'}">${d.text}</div>${d.sub ? `<div class="an-sub">${d.sub}</div>` : ''}`;
    box.appendChild(el);
    while (box.children.length > 3) box.firstChild.remove();
    setTimeout(() => el.classList.add('out'), d.mini ? 1200 : 2000);
    setTimeout(() => el.remove(), d.mini ? 1700 : 2600);
  }

  // 機体の表示色（チーム戦ではチーム色、それ以外は機体色）
  robotColor(r) {
    if (r.team) return TEAMS[r.team].css;
    return hexToCss(r.def.colors.glow);
  }

  buildBoard() {
    const g = this.game;
    const list = g.ranking();
    const el = $('#board');
    el.innerHTML = list.map((r, i) => {
      const dead = !r.alive;
      return `<div class="br ${r.isPlayer ? 'me' : ''} ${dead ? 'dead' : ''}">
        <span class="br-rank">${i + 1}</span>
        <span class="br-dot" style="background:${this.robotColor(r)}"></span>
        <span class="br-name">${r.name}</span>
        <span class="br-score">${r.stats.score}</span>
        <span class="br-state">${dead ? Math.ceil(r.respawnT) : '&#10003;'}</span>
      </div>`;
    }).join('');
    if (input.isDown('scoreboard') || touch.boardOpen) this.buildScoreboard();
  }

  buildScoreboard() {
    const g = this.game;
    const list = g.ranking();
    $('#sb-body').innerHTML = list.map((r, i) => `<tr class="${r.isPlayer ? 'me' : ''}">
      <td>${i + 1}</td><td class="sb-name" style="${r.team ? `box-shadow: inset 3px 0 0 ${TEAMS[r.team].css}` : ''}"><img src="${this.portraits[r.def.id]}">${r.name}</td><td style="color:${hexToCss(r.def.colors.glow)}">${r.def.name}</td>
      <td>${r.stats.kills}</td><td>${r.stats.deaths}</td><td>${r.stats.assists}</td><td>${Math.round(r.stats.dmg)}</td><td class="sb-score">${r.stats.score}</td></tr>`).join('');
  }

  update(dt, camera) {
    const g = this.game;
    if (!g) return;
    const p = g.player;

    // 上部
    const zt = g.zoneTimerText();
    $('#hud-zone').innerHTML = zt.t === null ? zt.label : `${zt.label}: <b>${fmtTime(zt.t)}</b>`;
    $('#hud-zone').classList.toggle('shrinking', g.zone.state === 'shrink');
    const alive = g.robots.filter((r) => r.alive).length;
    $('#hud-players').textContent = `${alive} / ${g.robots.length} ALIVE`;
    if (g.conquest) this.updateTeamBar();
    $('#mm-time').textContent = fmtTime(g.timeLeft);
    $('#mm-time').classList.toggle('low', g.timeLeft < 30);

    // プレイヤーカード
    const hpP = Math.max(0, p.hp / p.maxHp);
    $('#hp-fill').style.width = `${hpP * 100}%`;
    $('#hp-fill').classList.toggle('low', hpP < 0.3);
    $('#hp-shield').style.width = `${Math.min(1, p.s.shield / p.maxHp) * 100}%`;
    $('#hp-text').textContent = `${Math.ceil(Math.max(0, p.hp))} / ${p.maxHp}`;
    $('#en-fill').style.width = `${(p.en / p.maxEn) * 100}%`;
    $('#en-text').textContent = `${Math.floor(p.en)}`;
    $('#pc-score').textContent = p.stats.score;
    $('#pc-kda').textContent = `${p.stats.kills} / ${p.stats.deaths} / ${p.stats.assists}`;
    // 状態
    const st = [];
    if (p.s.shield > 0) st.push('<span class="st sh">SHIELD</span>');
    if (p.s.fortressT > 0) st.push('<span class="st ft">FORTRESS</span>');
    if (p.s.berserkT > 0) st.push('<span class="st bz">BERSERK</span>');
    if (p.s.cloakT > 0) st.push('<span class="st ck">CLOAK</span>');
    if (p.s.stunT > 0) st.push('<span class="st bad">STUN</span>');
    if (p.s.slowT > 0) st.push('<span class="st bad">SLOW</span>');
    if (p.s.burnT > 0) st.push('<span class="st bad">BURN</span>');
    if (p.s.invulnT > 0) st.push('<span class="st sh">PROTECT</span>');
    const sts = st.join('');
    if (sts !== this._sts) { $('#pc-status').innerHTML = sts; this._sts = sts; }

    // スキル
    for (const s of this.slots) {
      let frac = 0, txt = '', ready = true;
      if (s.key === 'boost') {
        frac = p.en >= BOOST.cost ? 0 : 1 - p.en / BOOST.cost;
        ready = p.en >= BOOST.cost;
      } else if (s.key === 'ult') {
        frac = 1 - p.ultCharge / 100;
        ready = p.ultCharge >= 100;
        txt = ready ? '' : `${Math.floor(p.ultCharge)}%`;
      } else {
        const i = +s.key.slice(-1) - 1;
        const cd = p.cds[i];
        frac = cd / p.def.skills[i].cd;
        ready = cd <= 0;
        txt = ready ? '' : cd.toFixed(cd < 1 ? 1 : 0);
      }
      s.cd.style.setProperty('--p', `${frac * 100}%`);
      if (s.num.textContent !== txt) s.num.textContent = txt;
      s.el.classList.toggle('ready', ready && p.alive);
      const tb = touch.buttons[s.key];
      if (tb) {
        tb.cd.style.setProperty('--p', `${frac * 100}%`);
        if (tb.num.textContent !== txt) tb.num.textContent = txt;
        tb.el.classList.toggle('ready', ready && p.alive);
      }
    }

    // リスポーン
    if (!p.alive) $('#rs-time').textContent = Math.max(0, p.respawnT).toFixed(1);

    // スコアボード
    this.boardT -= dt;
    if (this.boardT <= 0) { this.boardT = 0.3; this.buildBoard(); }
    const sbOpen = input.isDown('scoreboard') || (touch.active && touch.boardOpen);
    $('#scoreboard').classList.toggle('hidden', !sbOpen);

    // ビネット
    this.hurtFlash = Math.max(0, this.hurtFlash - dt * 1.5);
    const outZone = p.alive && Math.hypot(p.pos.x - g.zone.cx, p.pos.z - g.zone.cz) > g.zone.r;
    $('#vignette').style.opacity = Math.max(this.hurtFlash, hpP < 0.3 && p.alive ? 0.35 + Math.sin(g.time * 6) * 0.1 : 0);
    $('#zone-warn').classList.toggle('hidden', !outZone);
    $('#zone-vig').style.opacity = outZone ? 1 : 0;

    // クロスヘア
    const ch = $('#crosshair');
    ch.style.transform = `translate(${input.mouseX}px, ${input.mouseY}px)`;
    ch.classList.toggle('firing', input.mouseDown);

    this.drawOverlay(camera);
    this.drawMinimap();
  }

  drawOverlay(camera) {
    const g = this.game;
    const ctx = this.octx;
    const W = this.overlay.width, H = this.overlay.height, dpr = this.dpr;
    ctx.clearRect(0, 0, W, H);
    const p = g.player;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    if (settings.gameplay.nameplates) {
      for (const r of g.robots) {
        if (!r.alive) continue;
        if (r !== p && (r.isCloakedFrom(p) || r.seen < 0.5)) continue;
        _v.set(r.pos.x, (3.6 * r.def.scale) + r.airY + 0.6, r.pos.z).project(camera);
        if (_v.z > 1 || _v.x < -1.1 || _v.x > 1.1 || _v.y < -1.1 || _v.y > 1.1) continue;
        const x = (_v.x * 0.5 + 0.5) * W, y = (-_v.y * 0.5 + 0.5) * H;
        const bw = 56 * dpr, bh = 5 * dpr;
        ctx.font = `600 ${11 * dpr}px Rajdhani, "Segoe UI", sans-serif`;
        const ally = r.team && p.team && r.team === p.team;
        ctx.fillStyle = r.isPlayer ? '#ffe070' : ally ? '#9fcaff' : r.team ? '#ffb0b0' : '#ffffff';
        ctx.strokeStyle = 'rgba(0,0,0,0.8)';
        ctx.lineWidth = 3 * dpr;
        ctx.strokeText(r.name, x, y - 10 * dpr);
        ctx.fillText(r.name, x, y - 10 * dpr);
        ctx.fillStyle = 'rgba(0,0,0,0.7)';
        ctx.fillRect(x - bw / 2 - dpr, y - dpr, bw + 2 * dpr, bh + 2 * dpr);
        const hp = Math.max(0, r.hp / r.maxHp);
        ctx.fillStyle = r.isPlayer ? '#4ade80' : hp > 0.5 ? '#e0e6ee' : hp > 0.25 ? '#ffb040' : '#ff4040';
        if (!r.isPlayer) ctx.fillStyle = hp > 0.5 ? '#ff5a5a' : hp > 0.25 ? '#ff9a40' : '#ff3030';
        if (ally) ctx.fillStyle = hp > 0.3 ? '#5aa8ff' : '#ff9a40';
        ctx.fillRect(x - bw / 2, y, bw * hp, bh);
        if (r.s.shield > 0) {
          ctx.fillStyle = '#7fd4ff';
          ctx.fillRect(x - bw / 2, y - 2 * dpr, bw * Math.min(1, r.s.shield / r.maxHp), 2 * dpr);
        }
        ctx.fillStyle = this.robotColor(r);
        ctx.fillRect(x - bw / 2 - 5 * dpr, y - dpr, 3 * dpr, bh + 2 * dpr);
      }
    }
    if (touch.active && touch.indicator && p.alive) this.drawAimGuide(ctx, camera, p, touch.indicator, W, H);
    // ダメージ数値
    for (const n of g.fx.dmgNumbers) {
      _v.set(n.x, n.y, n.z).project(camera);
      if (_v.z > 1) continue;
      const x = (_v.x * 0.5 + 0.5) * W, y = (-_v.y * 0.5 + 0.5) * H;
      const a = n.t < 0.6 ? 1 : 1 - (n.t - 0.6) / 0.3;
      const sc = n.t < 0.1 ? 1 + (0.1 - n.t) * 5 : 1;
      ctx.globalAlpha = Math.max(0, a);
      ctx.font = `700 ${(n.big ? 22 : 15) * sc * dpr}px Rajdhani, "Segoe UI", sans-serif`;
      ctx.lineWidth = 3 * dpr;
      ctx.strokeStyle = 'rgba(0,0,0,0.85)';
      ctx.strokeText(n.text, x, y);
      ctx.fillStyle = n.color;
      ctx.fillText(n.text, x, y);
    }
    ctx.globalAlpha = 1;
    // ゾーン方向インジケータ
    if (p.alive && !g.conquest) {
      const z = g.zone;
      const d = Math.hypot(p.pos.x - z.cx, p.pos.z - z.cz);
      if (d > z.r - 8) {
        _v.set(z.cx, 0, z.cz).project(camera);
        const cx = W / 2, cy = H / 2;
        let dx = (_v.x * 0.5 + 0.5) * W - cx, dy = (-_v.y * 0.5 + 0.5) * H - cy;
        const l = Math.hypot(dx, dy) || 1;
        dx /= l; dy /= l;
        const rr = Math.min(W, H) * 0.3;
        ctx.save();
        ctx.translate(cx + dx * rr, cy + dy * rr);
        ctx.rotate(Math.atan2(dy, dx));
        ctx.fillStyle = 'rgba(90,176,255,0.9)';
        ctx.beginPath(); ctx.moveTo(16 * dpr, 0); ctx.lineTo(-8 * dpr, -10 * dpr); ctx.lineTo(-8 * dpr, 10 * dpr); ctx.fill();
        ctx.restore();
      }
    }
  }

  // タッチ操作時のスキル照準ガイド（地面に投影）
  drawAimGuide(ctx, camera, p, ind, W, H) {
    const dpr = this.dpr;
    const toS = (x, z) => { _v.set(x, 0.2, z).project(camera); return [(_v.x * 0.5 + 0.5) * W, (-_v.y * 0.5 + 0.5) * H]; };
    const circle = (cx, cz, r) => {
      ctx.beginPath();
      for (let i = 0; i <= 48; i++) {
        const a = (i / 48) * Math.PI * 2;
        const [x, y] = toS(cx + Math.cos(a) * r, cz + Math.sin(a) * r);
        if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y);
      }
    };
    const col = ind.cancel ? '255,80,80' : '120,210,255';
    ctx.save();
    ctx.lineWidth = 2 * dpr;
    const px = p.pos.x, pz = p.pos.z;
    if (ind.r) {
      circle(px, pz, ind.r);
      ctx.strokeStyle = `rgba(${col},0.45)`;
      ctx.stroke();
    }
    if (ind.t === 'point') {
      const tx = px + ind.dirX * ind.dist, tz = pz + ind.dirZ * ind.dist;
      circle(tx, tz, ind.a || 2);
      ctx.fillStyle = `rgba(${col},0.22)`;
      ctx.fill();
      ctx.strokeStyle = `rgba(${col},0.9)`;
      ctx.stroke();
      const [ax, ay] = toS(px, pz), [bx, by] = toS(tx, tz);
      ctx.setLineDash([6 * dpr, 6 * dpr]);
      ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke();
    } else if (ind.t === 'line') {
      const w = ind.w || 1, L = ind.r || 14;
      const nx = -ind.dirZ, nz = ind.dirX;
      const pts = [[px + nx * w, pz + nz * w], [px + ind.dirX * L + nx * w, pz + ind.dirZ * L + nz * w], [px + ind.dirX * L - nx * w, pz + ind.dirZ * L - nz * w], [px - nx * w, pz - nz * w]].map(([x, z]) => toS(x, z));
      ctx.beginPath();
      pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
      ctx.closePath();
      ctx.fillStyle = `rgba(${col},0.22)`;
      ctx.fill();
      ctx.strokeStyle = `rgba(${col},0.9)`;
      ctx.stroke();
    }
    if (ind.cancel) {
      const [x, y] = toS(px, pz);
      ctx.font = `700 ${14 * dpr}px "Noto Sans JP", sans-serif`;
      ctx.fillStyle = '#ff6060';
      ctx.textAlign = 'center';
      ctx.fillText('キャンセル', x, y - 60 * dpr);
    }
    ctx.restore();
  }

  // チーム得点バー・拠点状況
  updateTeamBar() {
    const g = this.game, cq = g.conquest, p = g.player;
    const mine = p.team, other = mine === 'blue' ? 'red' : 'blue';
    const sm = Math.floor(cq.scores[mine]), so = Math.floor(cq.scores[other]);
    $('#tb-left .tb-score').textContent = sm;
    $('#tb-right .tb-score').textContent = so;
    $('#tb-left .tb-fill').style.width = `${(sm / cq.target) * 100}%`;
    $('#tb-right .tb-fill').style.width = `${(so / cq.target) * 100}%`;
    for (const pt of cq.points) {
      const el = this._ptEls ? this._ptEls[pt.id] : null;
      const e = el || document.querySelector(`.tb-pt[data-id="${pt.id}"]`);
      if (!this._ptEls) this._ptEls = {};
      this._ptEls[pt.id] = e;
      e.className = `tb-pt ${pt.owner || 'neutral'}${pt.contested ? ' contested' : ''}`;
      const side = pt.v > 0 ? 'blue' : pt.v < 0 ? 'red' : 'neutral';
      const fill = e.firstElementChild;
      fill.style.height = `${Math.abs(pt.v)}%`;
      fill.className = side;
    }
    // 自機が拠点内にいるときの状況表示
    const cs = $('#cap-status');
    const here = p.alive ? cq.pointAt(p.pos.x, p.pos.z) : null;
    if (here) {
      const mineSide = mine === 'blue' ? here.v : -here.v;
      let txt;
      if (here.contested) txt = `拠点${here.id} 争奪中！`;
      else if (here.owner === mine && mineSide >= 100) txt = `拠点${here.id} 確保中`;
      else txt = `拠点${here.id} 占拠中 ${Math.max(0, Math.round(mineSide))}%`;
      cs.textContent = txt;
      cs.className = here.contested ? 'contested' : '';
    } else cs.classList.add('hidden');
  }

  drawMinimap() {
    const g = this.game;
    const c = this.mctx;
    const S = this.mini.width;
    const k = S / (MAP_HALF * 2) * 0.98;
    c.clearRect(0, 0, S, S);
    c.save();
    c.beginPath(); c.arc(S / 2, S / 2, S / 2 - 1, 0, Math.PI * 2); c.clip();
    c.fillStyle = '#0b1118';
    c.fillRect(0, 0, S, S);
    c.translate(S / 2, S / 2);
    c.rotate(g.camAngle);
    c.drawImage(g.map.minimapCanvas, -MAP_HALF * k, -MAP_HALF * k, MAP_HALF * 2 * k, MAP_HALF * 2 * k);
    const z = g.zone;
    if (g.conquest) {
      // 拠点
      for (const pt of g.conquest.points) {
        const col = pt.owner ? TEAMS[pt.owner].css : '#dddddd';
        c.fillStyle = col + '44';
        c.strokeStyle = pt.contested && Math.sin(g.time * 12) > 0 ? '#ffffff' : col;
        c.lineWidth = 2;
        c.beginPath(); c.arc(pt.x * k, pt.z * k, pt.r * k + 2, 0, Math.PI * 2); c.fill(); c.stroke();
        c.save();
        c.translate(pt.x * k, pt.z * k);
        c.rotate(-g.camAngle);
        c.fillStyle = '#fff';
        c.font = '700 11px Orbitron, Arial, sans-serif';
        c.textAlign = 'center'; c.textBaseline = 'middle';
        c.fillText(pt.id, 0, 1);
        c.restore();
      }
    } else {
    // ゾーン外
    c.fillStyle = 'rgba(30,70,160,0.35)';
    c.beginPath();
    c.rect(-S, -S, S * 2, S * 2);
    c.arc(z.cx * k, z.cz * k, z.r * k, 0, Math.PI * 2, true);
    c.fill();
    c.strokeStyle = '#5ab0ff'; c.lineWidth = 2;
    c.beginPath(); c.arc(z.cx * k, z.cz * k, z.r * k, 0, Math.PI * 2); c.stroke();
    }
    if (z.next && !g.conquest) {
      c.strokeStyle = 'rgba(255,255,255,0.8)'; c.lineWidth = 1; c.setLineDash([4, 3]);
      c.beginPath(); c.arc(z.next.cx * k, z.next.cz * k, z.next.r * k, 0, Math.PI * 2); c.stroke();
      c.setLineDash([]);
    }
    for (const pk of g.pickups) {
      if (!pk.active) continue;
      c.fillStyle = pk.type === 'repair' ? '#50ff80' : '#50b8ff';
      c.fillRect(pk.x * k - 2, pk.z * k - 2, 4, 4);
    }
    const p = g.player;
    for (const r of g.robots) {
      if (!r.alive || r === p || r.isCloakedFrom(p) || r.seen < 0.5) continue;
      c.fillStyle = this.robotColor(r);
      c.strokeStyle = '#000';
      c.lineWidth = 1;
      c.beginPath(); c.arc(r.pos.x * k, r.pos.z * k, 3.2, 0, Math.PI * 2); c.fill(); c.stroke();
    }
    if (p.alive) {
      c.save();
      c.translate(p.pos.x * k, p.pos.z * k);
      c.rotate(-p.aimYaw + Math.PI);
      c.fillStyle = '#ffe070';
      c.strokeStyle = '#000';
      c.beginPath(); c.moveTo(0, -7); c.lineTo(5, 5); c.lineTo(0, 2); c.lineTo(-5, 5); c.closePath(); c.fill(); c.stroke();
      c.restore();
    }
    c.restore();
    c.strokeStyle = 'rgba(120,190,255,0.7)';
    c.lineWidth = 2;
    c.beginPath(); c.arc(S / 2, S / 2, S / 2 - 1, 0, Math.PI * 2); c.stroke();
  }
}

export { RESPAWN_TIME };
