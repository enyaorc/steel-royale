// 設定の保存/読込 (localStorage)
const KEY = 'steelroyale.settings.v1';

export const DEFAULT_SETTINGS = {
  graphics: { quality: 'high', shadows: true, bloom: true, resolution: 1.0, particles: 1.0, softVision: true },
  audio: { master: 0.8, music: 0.45, sfx: 0.8 },
  gameplay: { shake: true, damageNumbers: true, nameplates: true, camZoom: 1.0, trueSight: true, visDark: 0.9 },
  keys: {
    up: 'KeyW', down: 'KeyS', left: 'KeyA', right: 'KeyD',
    skill1: 'Digit1', skill2: 'Digit2', skill3: 'Digit3', ult: 'Digit4',
    boost: 'Space', scoreboard: 'Tab',
  },
  touch: { mode: 'auto', scale: 1.0, opacity: 0.85 },
  player: { name: 'STEEL_WOLF', classId: 'vanguard', bots: 9, difficulty: 'normal', duration: 300, mode: 'br' },
};

export const KEY_LABELS = {
  up: '前進', down: '後退', left: '左移動', right: '右移動',
  skill1: 'スキル1', skill2: 'スキル2', skill3: 'スキル3', ult: 'ウルト',
  boost: 'ブースト', scoreboard: 'スコアボード',
};

function deepMerge(base, over) {
  const out = Array.isArray(base) ? [...base] : { ...base };
  if (!over || typeof over !== 'object') return out;
  for (const k of Object.keys(base)) {
    if (over[k] === undefined) continue;
    if (base[k] && typeof base[k] === 'object' && !Array.isArray(base[k])) out[k] = deepMerge(base[k], over[k]);
    else if (typeof over[k] === typeof base[k]) out[k] = over[k];
  }
  return out;
}

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return deepMerge(DEFAULT_SETTINGS, JSON.parse(raw));
  } catch (e) { /* storage unavailable */ }
  const s = deepMerge(DEFAULT_SETTINGS, {});
  // 初回起動がスマホ等のタッチ端末なら軽量設定にする
  if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) {
    Object.assign(s.graphics, { quality: 'low', shadows: false, bloom: false, resolution: 0.75, particles: 0.5 });
  }
  return s;
}

export const settings = load();

export function saveSettings() {
  try { localStorage.setItem(KEY, JSON.stringify(settings)); } catch (e) { /* ignore */ }
}

export function resetSettings(section) {
  const d = deepMerge(DEFAULT_SETTINGS, {});
  if (section) Object.assign(settings[section], d[section]);
  else for (const k of Object.keys(d)) if (k !== 'player') Object.assign(settings[k], d[k]);
  saveSettings();
}

export function keyName(code) {
  if (!code) return '-';
  if (code.startsWith('Key')) return code.slice(3);
  if (code.startsWith('Digit')) return code.slice(5);
  if (code.startsWith('Numpad')) return 'Num' + code.slice(6);
  const map = { Space: 'SPACE', ShiftLeft: 'L-SHIFT', ShiftRight: 'R-SHIFT', ControlLeft: 'L-CTRL', ControlRight: 'R-CTRL',
    AltLeft: 'L-ALT', AltRight: 'R-ALT', Tab: 'TAB', ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→',
    Backquote: '`', CapsLock: 'CAPS', Enter: 'ENTER' };
  return map[code] || code;
}
