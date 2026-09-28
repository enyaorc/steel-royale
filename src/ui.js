import * as THREE from 'three';
import { CLASSES, CLASS_BY_ID, DIFFICULTY, DURATIONS, GAME_TITLE } from './config.js';
import { settings, saveSettings, resetSettings, KEY_LABELS, keyName, DEFAULT_SETTINGS } from './settings.js';
import { RobotModel } from './models.js';
import { icon } from './icons.js';
import { audio } from './audio.js';
import { input } from './input.js';
import { touch } from './touch.js';
import { TEAMS } from './conquest.js';
import { hexToCss, fmtTime } from './util.js';

// メニュー画面群

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

// 機体ポートレートを生成（オフスクリーン描画）
export function renderPortraits(env) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  renderer.setSize(192, 192);
  renderer.setPixelRatio(1);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();
  scene.environment = env;
  scene.environmentIntensity = 0.6;
  scene.add(new THREE.HemisphereLight(0xbfd4ff, 0x302820, 1.5));
  const key = new THREE.DirectionalLight(0xffffff, 3);
  key.position.set(3, 5, 6);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x88aaff, 3);
  rim.position.set(-4, 3, -5);
  scene.add(rim);
  const cam = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
  const out = {};
  for (const def of CLASSES) {
    const m = new RobotModel(def);
    m.update(0.016, { speedNorm: 0, moving: false, moveYaw: 0, aimYaw: 0.5, boost: false, airborne: false });
    m.root.rotation.y = 0.5;
    scene.add(m.root);
    const h = (m.hipY + 1.6) * def.scale;
    cam.position.set(2.6 * def.scale, h + 0.6, 5.6 * def.scale);
    cam.lookAt(0, h - 0.55 * def.scale, 0);
    renderer.render(scene, cam);
    out[def.id] = renderer.domElement.toDataURL('image/png');
    scene.remove(m.root);
    m.dispose();
  }
  renderer.dispose();
  renderer.forceContextLoss();
  return out;
}

// ハンガーの3Dプレビュー
class HangarView {
  constructor(canvas, env) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled = true;
    this.scene = new THREE.Scene();
    this.scene.environment = env;
    this.scene.environmentIntensity = 0.5;
    this.scene.add(new THREE.HemisphereLight(0xbfd4ff, 0x302820, 1.2));
    const key = new THREE.DirectionalLight(0xffffff, 3);
    key.position.set(4, 8, 6);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    this.scene.add(key);
    const rim = new THREE.DirectionalLight(0x66aaff, 4);
    rim.position.set(-5, 4, -6);
    this.scene.add(rim);
    // 台座
    const base = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.5, 0.4, 48), new THREE.MeshStandardMaterial({ color: 0x2a2e34, metalness: 0.8, roughness: 0.35 }));
    base.position.y = -0.2;
    base.receiveShadow = true;
    this.scene.add(base);
    this.ring = new THREE.Mesh(new THREE.TorusGeometry(3.3, 0.05, 8, 64), new THREE.MeshBasicMaterial({ color: 0x4fc3ff }));
    this.ring.rotation.x = Math.PI / 2;
    this.ring.position.y = 0.02;
    this.scene.add(this.ring);
    const grid = new THREE.GridHelper(40, 40, 0x224466, 0x1a2a3a);
    grid.position.y = -0.4;
    this.scene.add(grid);
    this.cam = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    this.model = null;
    this.rot = 0.6;
    this.t = 0;
    this.dragging = false;
    canvas.style.touchAction = 'none';
    canvas.addEventListener('pointerdown', (e) => { this.dragging = true; this.lx = e.clientX; canvas.setPointerCapture(e.pointerId); });
    canvas.addEventListener('pointerup', () => { this.dragging = false; });
    canvas.addEventListener('pointercancel', () => { this.dragging = false; });
    canvas.addEventListener('pointermove', (e) => { if (this.dragging) { this.rot += (e.clientX - this.lx) * 0.01; this.lx = e.clientX; } });
  }

  setClass(def) {
    if (this.model) { this.scene.remove(this.model.root); this.model.dispose(); }
    this.def = def;
    this.model = new RobotModel(def);
    this.model.root.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    this.scene.add(this.model.root);
    this.ring.material.color.set(def.colors.glow);
  }

  render(dt) {
    const w = this.canvas.clientWidth, h = this.canvas.clientHeight;
    if (!w || !h) return;
    if (this.canvas.width !== Math.floor(w * devicePixelRatio) || this.canvas.height !== Math.floor(h * devicePixelRatio)) {
      this.renderer.setPixelRatio(devicePixelRatio);
      this.renderer.setSize(w, h, false);
      this.cam.aspect = w / h;
      this.cam.updateProjectionMatrix();
    }
    this.t += dt;
    if (!this.dragging) this.rot += dt * 0.4;
    if (this.model) {
      const s = this.def.scale;
      this.model.update(dt, { speedNorm: 0, moving: false, moveYaw: this.rot, aimYaw: this.rot, boost: false, airborne: false });
      this.model.legsYaw = this.rot;
      this.model.root.rotation.y = this.rot;
      this.model.inner.position.y = Math.sin(this.t * 1.5) * 0.04;
      this.cam.position.set(0, 3.2 * s + 0.8, 13.5 * s);
      this.cam.lookAt(0, 1.8 * s, 0);
    }
    this.renderer.render(this.scene, this.cam);
  }
}

export class UI {
  constructor(env, portraits, handlers) {
    this.env = env;
    this.portraits = portraits;
    this.h = handlers;
    this.screen = null;
    this.prevScreen = 'title';
    this.hangar = new HangarView($('#hangar-canvas'), env);
    this.buildTitle();
    this.buildHangar();
    this.buildSettings();
    this.buildHowto();
    this.bindSounds();
  }

  show(name) {
    if (this.screen && this.screen !== name && name === 'settings') this.prevScreen = this.screen;
    this.screen = name;
    $$('.screen').forEach((el) => el.classList.toggle('active', el.id === `screen-${name}`));
    if (name === 'hangar') this.refreshHangar();
    if (name === 'settings') this.refreshSettings();
    if (name === 'howto') this.buildHowto();
  }

  hideAll() {
    this.screen = null;
    $$('.screen').forEach((el) => el.classList.remove('active'));
  }

  bindSounds() {
    document.addEventListener('mouseover', (e) => {
      const b = e.target.closest('button, .cls-card, .opt');
      if (b && b !== this._hov) { this._hov = b; audio.play('ui_hover'); }
    });
    document.addEventListener('click', (e) => {
      audio.init();
      const b = e.target.closest('button, .cls-card, .opt');
      if (b) audio.play(b.classList.contains('back') ? 'ui_back' : 'ui_click');
    });
  }

  // ---------- タイトル ----------
  buildTitle() {
    $('#title-logo').innerHTML = GAME_TITLE.split(' ').map((w, i) => `<span class="${i ? 'b' : 'a'}">${w}</span>`).join('');
    $('#btn-play').onclick = () => this.show('hangar');
    $('#btn-settings').onclick = () => this.show('settings');
    $('#btn-howto').onclick = () => this.show('howto');
    $('#btn-credits').onclick = () => this.show('credits');
    $$('.btn-back-title').forEach((b) => { b.onclick = () => this.show('title'); });
  }

  // ---------- ハンガー ----------
  buildHangar() {
    const list = $('#cls-list');
    list.innerHTML = CLASSES.map((c) => `<div class="cls-card" data-id="${c.id}" style="--glow:${hexToCss(c.colors.glow)}">
      <img src="${this.portraits[c.id]}"><div><div class="cls-name">${c.name}</div><div class="cls-role">${c.role}</div></div></div>`).join('');
    $$('.cls-card').forEach((el) => {
      el.onclick = () => { settings.player.classId = el.dataset.id; saveSettings(); this.refreshHangar(); };
    });
    const nameIn = $('#pilot-name');
    nameIn.value = settings.player.name;
    nameIn.addEventListener('input', () => {
      const v = nameIn.value.toUpperCase().replace(/[^A-Z0-9_\-]/g, '').slice(0, 14);
      if (v !== nameIn.value) nameIn.value = v;
      settings.player.name = v || 'PLAYER';
      saveSettings();
    });
    nameIn.addEventListener('keydown', (e) => e.stopPropagation());
    const bots = $('#opt-bots');
    bots.value = settings.player.bots;
    bots.oninput = () => { settings.player.bots = +bots.value; $('#opt-bots-v').textContent = bots.value; saveSettings(); };
    $('#opt-mode').innerHTML = [['br', 'バトルロイヤル'], ['team', 'チーム制圧']].map(([v, l]) => `<div class="opt" data-v="${v}">${l}</div>`).join('');
    $$('#opt-mode .opt').forEach((el) => { el.onclick = () => { settings.player.mode = el.dataset.v; saveSettings(); this.refreshHangar(); }; });
    $('#opt-diff').innerHTML = Object.entries(DIFFICULTY).map(([k, d]) => `<div class="opt" data-v="${k}">${d.label}</div>`).join('');
    $$('#opt-diff .opt').forEach((el) => { el.onclick = () => { settings.player.difficulty = el.dataset.v; saveSettings(); this.refreshHangar(); }; });
    $('#opt-time').innerHTML = DURATIONS.map((d) => `<div class="opt" data-v="${d}">${d / 60}分</div>`).join('');
    $$('#opt-time .opt').forEach((el) => { el.onclick = () => { settings.player.duration = +el.dataset.v; saveSettings(); this.refreshHangar(); }; });
    $('#btn-launch').onclick = () => this.h.startMatch();
    $('#btn-hangar-back').onclick = () => this.show('title');
  }

  refreshHangar() {
    const def = CLASS_BY_ID[settings.player.classId] || CLASSES[0];
    $$('.cls-card').forEach((el) => el.classList.toggle('sel', el.dataset.id === def.id));
    $$('#opt-diff .opt').forEach((el) => el.classList.toggle('sel', el.dataset.v === settings.player.difficulty));
    $$('#opt-mode .opt').forEach((el) => el.classList.toggle('sel', el.dataset.v === settings.player.mode));
    $('#opt-bots-l').textContent = settings.player.mode === 'team' ? 'AI機数' : '敵機数';
    $$('#opt-time .opt').forEach((el) => el.classList.toggle('sel', +el.dataset.v === settings.player.duration));
    $('#opt-bots').value = settings.player.bots;
    $('#opt-bots-v').textContent = settings.player.bots;
    $('#pilot-name').value = settings.player.name;
    if (this.hangar.def !== def) this.hangar.setClass(def);
    const glow = hexToCss(def.colors.glow);
    const bar = (label, v) => `<div class="stat"><span>${label}</span><div class="stat-bar">${[1, 2, 3, 4, 5].map((i) => `<i class="${i <= v ? 'on' : ''}"></i>`).join('')}</div></div>`;
    const keys = ['skill1', 'skill2', 'skill3'];
    $('#cls-detail').style.setProperty('--glow', glow);
    $('#cls-detail').innerHTML = `
      <div class="cd-head"><div class="cd-name">${def.name}</div><div class="cd-role">${def.role}</div></div>
      <div class="cd-desc">${def.desc}</div>
      <div class="cd-stats">
        ${bar('火力', def.stats.firepower)}${bar('装甲', def.stats.armor)}${bar('機動', def.stats.mobility)}${bar('射程', def.stats.range)}
        <div class="cd-nums">HP <b>${def.hp}</b>　SPEED <b>${def.speed}</b>　EN <b>${def.energy}</b></div>
      </div>
      <div class="cd-skill"><div class="cd-ic">${icon(def.primary.kind)}</div><div><div class="cd-sn"><span class="key">LMB</span>${def.primary.name}</div><div class="cd-sd">通常攻撃（左クリック長押しで連射）</div></div></div>
      ${def.skills.map((s, i) => `<div class="cd-skill"><div class="cd-ic">${icon(s.id)}</div><div><div class="cd-sn"><span class="key">${keyName(settings.keys[keys[i]])}</span>${s.name}<span class="cd-cd">CD ${s.cd}s</span></div><div class="cd-sd">${s.desc}</div></div></div>`).join('')}
      <div class="cd-skill ult"><div class="cd-ic">${icon(def.ult.id)}</div><div><div class="cd-sn"><span class="key">${keyName(settings.keys.ult)}</span>${def.ult.name}<span class="cd-cd">ULT</span></div><div class="cd-sd">${def.ult.desc}</div></div></div>`;
  }

  // ---------- 設定 ----------
  buildSettings() {
    $$('.set-tab').forEach((t) => {
      t.onclick = () => {
        $$('.set-tab').forEach((x) => x.classList.toggle('sel', x === t));
        $$('.set-page').forEach((p) => p.classList.toggle('active', p.id === 'set-' + t.dataset.tab));
      };
    });
    $('#btn-set-back').onclick = () => { saveSettings(); this.h.settingsClosed(); this.show(this.prevScreen === 'settings' ? 'title' : this.prevScreen); };
    $('#btn-set-reset').onclick = () => { resetSettings(); this.refreshSettings(); this.h.settingsChanged(); };
  }

  refreshSettings() {
    const S = settings;
    const g = S.graphics, a = S.audio, gp = S.gameplay;
    const sel = (id, opts, cur, fn) => `<div class="row"><label>${id}</label><div class="opts">${opts.map(([v, l]) => `<div class="opt ${v === cur ? 'sel' : ''}" data-fn="${fn}" data-v="${v}">${l}</div>`).join('')}</div></div>`;
    const slider = (label, key, v, min, max, step, fmt, tip) => `<div class="row" title="${tip || ''}"><label>${label}</label><input type="range" data-key="${key}" min="${min}" max="${max}" step="${step}" value="${v}"><span class="val" data-for="${key}">${fmt(v)}</span></div>`;
    const tog = (label, key, v, tip) => `<div class="row" title="${tip || ''}"><label>${label}</label><div class="toggle ${v ? 'on' : ''}" data-key="${key}"><i></i></div></div>`;
    const pct = (v) => `${Math.round(v * 100)}%`;

    $('#set-graphics').innerHTML =
      sel('描画品質', [['low', '低'], ['medium', '中'], ['high', '高']], g.quality, 'quality') +
      tog('影', 'graphics.shadows', g.shadows, 'リアルタイムの影を描画する') +
      tog('ブルーム（発光）', 'graphics.bloom', g.bloom, 'ビームや爆発の発光表現') +
      slider('解像度スケール', 'graphics.resolution', g.resolution, 0.5, 1.0, 0.05, pct, '描画解像度。下げると軽くなる') +
      slider('パーティクル量', 'graphics.particles', g.particles, 0.25, 1.0, 0.05, pct, '爆発や炎などの粒子量') +
      tog('視界境界のぼかし', 'graphics.softVision', g.softVision, 'TrueSightの見える/見えない境界を柔らかくする');
    $('#set-audio').innerHTML =
      slider('マスター音量', 'audio.master', a.master, 0, 1, 0.05, pct) +
      slider('BGM音量', 'audio.music', a.music, 0, 1, 0.05, pct) +
      slider('効果音音量', 'audio.sfx', a.sfx, 0, 1, 0.05, pct);
    $('#set-gameplay').innerHTML =
      tog('画面の揺れ', 'gameplay.shake', gp.shake, '爆発時などのカメラシェイク') +
      tog('ダメージ数値表示', 'gameplay.damageNumbers', gp.damageNumbers) +
      tog('ネームプレート表示', 'gameplay.nameplates', gp.nameplates, '機体上部の名前とHPバー') +
      tog('TrueSight（視界システム）', 'gameplay.trueSight', gp.trueSight, '自機から見えない範囲を暗くし、視界外の敵・弾を隠す') +
      slider('視界外の暗さ', 'gameplay.visDark', gp.visDark, 0.4, 1.0, 0.05, pct, 'TrueSightで見えない範囲をどれだけ暗くするか') +
      slider('カメラ距離', 'gameplay.camZoom', gp.camZoom, 0.7, 1.4, 0.05, (v) => `${Math.round(v * 100)}%`, 'ゲーム中はマウスホイールでも変更可能');
    const T = S.touch;
    $('#set-controls').innerHTML =
      sel('操作モード', [['auto', '自動'], ['pc', 'PC'], ['touch', 'タッチ']], T.mode, 'tmode') +
      slider('タッチボタンの大きさ', 'touch.scale', T.scale, 0.7, 1.4, 0.05, pct, 'スマホ操作時の仮想スティック・スキルボタンの大きさ') +
      slider('タッチボタンの不透明度', 'touch.opacity', T.opacity, 0.3, 1.0, 0.05, pct, 'スマホ操作時の仮想パッドの濃さ') +
      `<div class="keys-note">ボタンをクリック後、割り当てたいキーを押してください（ESCでキャンセル）。照準＝マウス、通常攻撃＝左クリック。</div>` +
      Object.keys(DEFAULT_SETTINGS.keys).map((k) => `<div class="row"><label>${KEY_LABELS[k]}</label><button class="keybtn" data-k="${k}">${keyName(S.keys[k])}</button></div>`).join('');

    // イベント
    $$('#screen-settings .opt[data-fn="quality"]').forEach((el) => {
      el.onclick = () => {
        const q = el.dataset.v;
        g.quality = q;
        if (q === 'low') Object.assign(g, { shadows: false, bloom: false, resolution: 0.75, particles: 0.5 });
        if (q === 'medium') Object.assign(g, { shadows: true, bloom: false, resolution: 0.9, particles: 0.75 });
        if (q === 'high') Object.assign(g, { shadows: true, bloom: true, resolution: 1.0, particles: 1.0 });
        saveSettings(); this.refreshSettings(); this.h.settingsChanged();
      };
    });
    $$('#screen-settings .opt[data-fn="tmode"]').forEach((el) => {
      el.onclick = () => {
        settings.touch.mode = el.dataset.v;
        saveSettings(); touch.applyMode(); this.refreshSettings(); this.h.settingsChanged();
      };
    });
    $$('#screen-settings input[type=range]').forEach((el) => {
      el.oninput = () => {
        const [sec, key] = el.dataset.key.split('.');
        settings[sec][key] = +el.value;
        const span = $(`.val[data-for="${el.dataset.key}"]`);
        span.textContent = key === 'camZoom' ? `${Math.round(el.value * 100)}%` : `${Math.round(el.value * 100)}%`;
        saveSettings();
        this.h.settingsChanged();
      };
    });
    $$('#screen-settings .toggle').forEach((el) => {
      el.onclick = () => {
        const [sec, key] = el.dataset.key.split('.');
        settings[sec][key] = !settings[sec][key];
        el.classList.toggle('on', settings[sec][key]);
        saveSettings();
        this.h.settingsChanged();
      };
    });
    $$('#screen-settings .keybtn').forEach((el) => {
      el.onclick = () => {
        $$('.keybtn').forEach((b) => b.classList.remove('wait'));
        el.classList.add('wait');
        el.textContent = '...';
        input.captureHandler = (code) => {
          input.captureHandler = null;
          el.classList.remove('wait');
          if (code !== 'Escape') {
            // 重複を入れ替え
            const k = el.dataset.k;
            for (const other of Object.keys(settings.keys)) if (other !== k && settings.keys[other] === code) settings.keys[other] = settings.keys[k];
            settings.keys[k] = code;
            saveSettings();
            audio.play('ui_click');
          }
          this.refreshSettings();
        };
      };
    });
  }

  // ---------- 操作説明 ----------
  buildHowto() {
    const k = settings.keys;
    $('#howto-body').innerHTML = `
      <div class="ht-col">
        <h3>操作方法</h3>
        <table class="ht-keys">
          <tr><td>${['up', 'left', 'down', 'right'].map((a) => `<span class="key">${keyName(k[a])}</span>`).join('')}</td><td>移動（画面基準）</td></tr>
          <tr><td><span class="key">マウス</span></td><td>照準（機体上半身がカーソル方向を向く）</td></tr>
          <tr><td><span class="key">左クリック</span></td><td>通常攻撃（長押しで連射）</td></tr>
          <tr><td>${['skill1', 'skill2', 'skill3'].map((a) => `<span class="key">${keyName(k[a])}</span>`).join('')}</td><td>スキル1〜3</td></tr>
          <tr><td><span class="key">${keyName(k.ult)}</span></td><td>ウルト（ゲージ100%で使用可能）</td></tr>
          <tr><td><span class="key">${keyName(k.boost)}</span></td><td>ブースト（移動方向へ高速ダッシュ／EN消費）</td></tr>
          <tr><td><span class="key">${keyName(k.scoreboard)}</span></td><td>スコアボード表示</td></tr>
          <tr><td><span class="key">ホイール</span></td><td>カメラ距離</td></tr>
          <tr><td><span class="key">ESC</span></td><td>ポーズメニュー</td></tr>
        </table>
        <p class="ht-note">※キー割り当ては設定画面から変更できます。</p>
        <h3 style="margin-top:14px">スマホ（タッチ）操作</h3>
        <table class="ht-keys">
          <tr><td><span class="key">左スティック</span></td><td>移動（画面左側のどこを触っても出現）</td></tr>
          <tr><td><span class="key">右スティック</span></td><td>倒した方向へ通常攻撃（連射）。タップで最寄りの敵へ自動照準射撃</td></tr>
          <tr><td><span class="key">スキル/ウルト</span></td><td>押したまま撃ちたい方向へフリックして離す（距離で着弾位置を調整）。タップのみは自動照準。ボタン上に戻して離すとキャンセル</td></tr>
          <tr><td><span class="key">ブースト</span></td><td>左スティックの方向へダッシュ</td></tr>
        </table>
        <p class="ht-note">※PCとスマホは自動で切り替わります（設定の「操作」タブで固定も可能）。</p>
      </div>
      <div class="ht-col">
        <h3>ルール</h3>
        <ul>
          <li>全員が敵のソロ・バトルロイヤル。制限時間終了時に<b>スコア最上位</b>が勝者。</li>
          <li>撃破 <b class="pos">+100</b>／アシスト <b class="pos">+30</b>／被撃破 <b class="neg">-50</b></li>
          <li>撃破されても<b>5秒後に何度でも復活</b>（復活直後2秒間は無敵）。</li>
          <li>時間経過で<b>安全地帯（青い壁）が縮小</b>。外側にいると継続ダメージ。白い円が次の安全地帯。</li>
          <li>ウルトゲージは時間経過・与ダメージ・撃破で溜まる。</li>
          <li>マップ上の補給ポッド：<span style="color:#50ff80">緑＝修理（HP回復）</span>、<span style="color:#50b8ff">青＝コア（ウルト+30%・EN全快）</span></li>
          <li>建物の陰に入ると手前の建物は自動で透過表示される。</li>
        </ul>
        <h3 style="margin-top:14px">チーム制圧モード</h3>
        <ul>
          <li><b style="color:#4a9dff">青チーム</b>と<b style="color:#ff5050">赤チーム</b>の対戦（あなたは青）。安全地帯の縮小はなし。</li>
          <li>拠点 <b>A〜E</b> の円の中に留まるとゲージが進み、満タンで占拠。味方が多いほど速い。敵味方が同時にいると争奪中で停止。敵の拠点はまず中立に戻してから奪う。</li>
          <li>占拠中の拠点1つにつき毎秒1点。<b>目標点に先に到達</b>するか、時間切れ時に多い方が勝利。</li>
          <li>撃破はチーム得点に影響しない（相手を拠点から追い出す手段）。味方への攻撃は無効。復活は自陣の出撃地点から。</li>
          <li>味方が見ている敵は、自分から見えなくても表示される。</li>
          <li><b>TrueSight</b>：自機から見えない場所は暗くなり、そこにいる敵・弾・設置物は表示されない（ミニマップにも出ない）。高さ2m以下の木箱や柵は越して見える。設定で無効化可能。</li>
        </ul>
      </div>`;
  }

  // ---------- リザルト ----------
  showResults(res, opts) {
    const me = res.find((r) => r.isPlayer);
    const rank = me ? me.rank : 0;
    const ti = res.teamInfo;
    if (ti) {
      // チーム制圧：チームの勝敗
      const win = ti.winner === ti.playerTeam, draw = ti.winner === 'draw';
      $('#res-title').textContent = draw ? 'DRAW' : win ? 'VICTORY' : 'DEFEAT';
      $('#res-title').className = draw ? 'top' : win ? 'win' : 'lose';
      $('#res-team').innerHTML = `<div class="res-team"><div class="rt blue"><small>BLUE</small>${ti.blue}</div><div>-</div><div class="rt red"><small>RED</small>${ti.red}</div></div>`;
      $('#res-sub').textContent = `チーム制圧 ／ 目標 ${ti.target} ／ 個人スコア ${res.length}機中 ${rank}位 ／ ${DIFFICULTY[opts.difficulty].label} ／ ${fmtTime(opts.duration)}`;
    } else {
      const title = rank === 1 ? 'VICTORY' : rank <= 3 ? `TOP ${rank}` : `RANK #${rank}`;
      $('#res-title').textContent = title;
      $('#res-title').className = rank === 1 ? 'win' : rank <= 3 ? 'top' : '';
      $('#res-team').innerHTML = '';
      $('#res-sub').textContent = `${res.length}機中 ${rank}位 ／ ${DIFFICULTY[opts.difficulty].label} ／ ${fmtTime(opts.duration)}`;
    }
    if (me) {
      $('#res-me').innerHTML = `
        <img src="${this.portraits[me.cls.id]}">
        <div class="rm-stats">
          <div><span>SCORE</span><b>${me.score}</b></div>
          <div><span>KILLS</span><b>${me.kills}</b></div>
          <div><span>DEATHS</span><b>${me.deaths}</b></div>
          <div><span>ASSISTS</span><b>${me.assists}</b></div>
          <div><span>DAMAGE</span><b>${Math.round(me.dmg)}</b></div>
          <div><span>BEST STREAK</span><b>${me.bestStreak}</b></div>
        </div>`;
    }
    $('#res-body').innerHTML = res.map((r) => `<tr class="${r.isPlayer ? 'me' : ''} ${r.rank === 1 ? 'first' : ''}">
      <td>${r.rank}</td><td class="sb-name" style="${r.team ? `box-shadow: inset 3px 0 0 ${TEAMS[r.team].css}` : ''}"><img src="${this.portraits[r.cls.id]}">${r.name}</td><td style="color:${hexToCss(r.cls.colors.glow)}">${r.cls.name}</td>
      <td>${r.kills}</td><td>${r.deaths}</td><td>${r.assists}</td><td>${Math.round(r.dmg)}</td><td class="sb-score">${r.score}</td></tr>`).join('');
    this.show('results');
  }

  renderHangar(dt) {
    if (this.screen === 'hangar') this.hangar.render(dt);
  }
}
