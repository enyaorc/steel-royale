// ゲーム全体の定数と機体定義

export const GAME_TITLE = 'STEEL ROYALE';
export const MAP_HALF = 120;
export const RESPAWN_TIME = 5;
export const SPAWN_PROTECT = 2.0;
export const SCORE = { kill: 100, assist: 30, death: -50 };
export const ASSIST_WINDOW = 8;

export const BOOST = { cost: 28, time: 0.22, mult: 3.4, regen: 22, regenDelay: 0.45 };

export const BOT_NAMES = [
  'ALPHA_WOLF', 'BETA_7', 'GAMMA_9', 'DELTA_KNIGHT', 'EPSILON_HUNTER', 'ZETA_SHADOW',
  'ETA_RAZOR', 'THETA_TITAN', 'IOTA_PHANTOM', 'KAPPA_REAPER', 'LAMBDA_FANG', 'MU_STORM',
  'NU_VIPER', 'XI_BREAKER', 'OMICRON_ACE', 'SIGMA_BLADE', 'TAU_HOWLER', 'OMEGA_CORE',
];

export const DIFFICULTY = {
  easy:   { label: 'EASY',   think: 0.45, reaction: 0.7,  aimErr: 0.16, aimSpeed: 4.0,  lead: 0.2, skillChance: 0.35, dodge: 0.1, dmgMul: 0.8 },
  normal: { label: 'NORMAL', think: 0.3,  reaction: 0.4,  aimErr: 0.08, aimSpeed: 7.0,  lead: 0.6, skillChance: 0.65, dodge: 0.3, dmgMul: 1.0 },
  hard:   { label: 'HARD',   think: 0.18, reaction: 0.2,  aimErr: 0.035, aimSpeed: 12.0, lead: 0.9, skillChance: 0.95, dodge: 0.55, dmgMul: 1.0 },
};

export const DURATIONS = [180, 300, 480, 600];

// 機体定義
// stats: 表示用 (1-5)
export const CLASSES = [
  {
    id: 'vanguard', name: 'VANGUARD', role: 'アサルト',
    desc: '攻守のバランスに優れた汎用機。ミサイルとシールドで中距離戦を制する。',
    colors: { primary: 0x3a6fd8, secondary: 0xdfe5ee, dark: 0x2a2f3a, glow: 0x4fc3ff },
    scale: 1.0, radius: 1.2, hp: 1000, speed: 9.5, energy: 100, mass: 1.0,
    stats: { firepower: 3, armor: 3, mobility: 3, range: 4 },
    ai: { range: 20 },
    model: { bulk: 1.0, legLen: 1.0, head: 'visor', back: 'thrusters', weaponR: 'rifle', weaponL: 'shield', shoulder: 'pod' },
    primary: { kind: 'bolt', name: 'ビームライフル', rate: 0.22, dmg: 42, speed: 75, range: 40, width: 0.22, spread: 0.01 },
    skills: [
      { id: 'missiles', name: 'ミサイル弾幕', cd: 8, desc: '照準付近の敵へ追尾ミサイルを6発発射する。' },
      { id: 'shield', name: 'エネルギーシールド', cd: 12, desc: '4秒間、350ダメージを吸収するバリアを展開。' },
      { id: 'grenade', name: 'プラズマグレネード', cd: 7, desc: '照準地点に榴弾を投擲。範囲ダメージ＋鈍足。' },
    ],
    ult: { id: 'hyperbeam', name: 'ハイパーメガビーム', desc: '溜めの後、全てを薙ぎ払う極太ビームを照射する。' },
  },
  {
    id: 'titan', name: 'TITAN', role: 'ヘビー',
    desc: '圧倒的な装甲と弾幕を誇る重装機。遅いが倒れない。',
    colors: { primary: 0xd9762b, secondary: 0x4a4f57, dark: 0x2b2d31, glow: 0xffb040 },
    scale: 1.3, radius: 1.6, hp: 1650, speed: 7.2, energy: 100, mass: 1.8,
    stats: { firepower: 4, armor: 5, mobility: 1, range: 3 },
    ai: { range: 16 },
    model: { bulk: 1.45, legLen: 0.85, head: 'bunker', back: 'block', weaponR: 'gatling', weaponL: 'gatling', shoulder: 'rocket' },
    primary: { kind: 'gatling', name: 'ツインガトリング', rate: 0.075, dmg: 13, speed: 62, range: 32, width: 0.14, spread: 0.07 },
    skills: [
      { id: 'slam', name: 'グラウンドスラム', cd: 9, desc: '跳躍して着地、周囲に衝撃波。吹き飛ばし＋鈍足。' },
      { id: 'fortress', name: 'フォートレス', cd: 14, desc: '5秒間、被ダメージ半減・連射速度上昇。移動は低下。' },
      { id: 'rocket', name: 'ヘビーロケット', cd: 6, desc: '大型ロケットを発射。着弾点に大爆発。' },
    ],
    ult: { id: 'artillery', name: '砲撃要請', desc: '照準地点一帯に12発の砲弾を降らせる。' },
  },
  {
    id: 'phantom', name: 'PHANTOM', role: 'スナイパー',
    desc: '長射程レールガンと光学迷彩を備えた狙撃機。装甲は薄い。',
    colors: { primary: 0x6b3fb8, secondary: 0x23232b, dark: 0x16161c, glow: 0xc070ff },
    scale: 0.95, radius: 1.1, hp: 760, speed: 10.2, energy: 110, mass: 0.85,
    stats: { firepower: 5, armor: 1, mobility: 4, range: 5 },
    ai: { range: 34 },
    model: { bulk: 0.8, legLen: 1.15, head: 'mono', back: 'fins', weaponR: 'railgun', weaponL: 'none', shoulder: 'none' },
    primary: { kind: 'rail', name: 'レールライフル', rate: 0.95, dmg: 150, range: 58, width: 0.18 },
    skills: [
      { id: 'cloak', name: '光学迷彩', cd: 14, desc: '4.5秒間透明化し移動速度上昇。攻撃で解除、初弾は1.5倍。' },
      { id: 'mine', name: 'スパイダーマイン', cd: 8, desc: '足元に近接地雷を設置する（最大3個）。' },
      { id: 'blink', name: 'ブリンク', cd: 6, desc: '照準方向へ瞬間移動する。' },
    ],
    ult: { id: 'gauss', name: 'ガウスキャノン', desc: '壁をも貫通する超長距離の一撃を放つ。' },
  },
  {
    id: 'razor', name: 'RAZOR', role: 'ブローラー',
    desc: 'プラズマブレードで切り込む近接特化機。高速で敵に食らいつく。',
    colors: { primary: 0xc0283a, secondary: 0x2a2a30, dark: 0x1a1a1e, glow: 0xff4050 },
    scale: 1.0, radius: 1.2, hp: 1200, speed: 11.2, energy: 110, mass: 1.1,
    stats: { firepower: 4, armor: 3, mobility: 5, range: 1 },
    ai: { range: 3 },
    model: { bulk: 1.0, legLen: 1.05, head: 'horn', back: 'thrusters', weaponR: 'blade', weaponL: 'blade', shoulder: 'spike' },
    primary: { kind: 'blade', name: 'プラズマブレード', rate: 0.42, dmg: 72, range: 4.6, arc: 1.1 },
    skills: [
      { id: 'lunge', name: 'ランジストライク', cd: 5, desc: '照準方向へ突進し、触れた敵を切り裂く。' },
      { id: 'cyclone', name: 'サイクロン', cd: 10, desc: '2.5秒間回転斬り。周囲に連続ダメージ。' },
      { id: 'grapple', name: 'グラップル', cd: 9, desc: 'フックを射出し、命中した敵を引き寄せてスタン。' },
    ],
    ult: { id: 'berserk', name: 'バーサーク', desc: '7秒間、攻撃力・速度・攻撃速度が上昇し吸血効果を得る。' },
  },
  {
    id: 'warden', name: 'WARDEN', role: 'エンジニア',
    desc: 'タレットとドローンを操る技術機。回復とEMPで戦線を支える。',
    colors: { primary: 0x3f9e4a, secondary: 0xd8c040, dark: 0x263028, glow: 0x70ff90 },
    scale: 1.05, radius: 1.25, hp: 1050, speed: 9.2, energy: 100, mass: 1.0,
    stats: { firepower: 3, armor: 3, mobility: 3, range: 3 },
    ai: { range: 18 },
    model: { bulk: 1.1, legLen: 0.95, head: 'dome', back: 'dish', weaponR: 'cannon', weaponL: 'none', shoulder: 'antenna' },
    primary: { kind: 'orb', name: 'プラズマランチャー', rate: 0.5, dmg: 50, speed: 40, range: 30, aoe: 2.6 },
    skills: [
      { id: 'turret', name: 'セントリータレット', cd: 12, desc: '12秒間自動で射撃するタレットを設置（最大2基）。' },
      { id: 'repair', name: 'ナノリペア', cd: 14, desc: '3秒間で360の耐久を回復する。' },
      { id: 'emp', name: 'EMPパルス', cd: 11, desc: '周囲の敵にダメージとスタン、エネルギーを奪う。' },
    ],
    ult: { id: 'drones', name: 'ドローンスウォーム', desc: '10秒間、6機の攻撃ドローンを随伴させる。' },
  },
  {
    id: 'inferno', name: 'INFERNO', role: 'パイロ',
    desc: '火炎放射と焼夷兵器で一帯を焼き尽くす。近距離の制圧力は随一。',
    colors: { primary: 0x2e2e33, secondary: 0xe0a020, dark: 0x1b1b1e, glow: 0xff7a20 },
    scale: 1.1, radius: 1.35, hp: 1300, speed: 9.0, energy: 100, mass: 1.3,
    stats: { firepower: 5, armor: 4, mobility: 2, range: 1 },
    ai: { range: 6 },
    model: { bulk: 1.2, legLen: 0.9, head: 'grille', back: 'tanks', weaponR: 'flamer', weaponL: 'none', shoulder: 'vent' },
    primary: { kind: 'flame', name: 'フレイムスロワー', rate: 0.1, dmg: 15, range: 9.5, arc: 0.45 },
    skills: [
      { id: 'napalm', name: 'ナパーム', cd: 9, desc: '照準地点に5秒間燃え続ける火の海を作る。' },
      { id: 'leap', name: 'ジェットリープ', cd: 10, desc: '照準地点へ跳躍し、着地点で爆発を起こす。' },
      { id: 'vent', name: 'ヒートベント', cd: 8, desc: '前方へ熱波を放出。吹き飛ばし＋炎上。' },
    ],
    ult: { id: 'meltdown', name: 'メルトダウン', desc: '炉心を暴走させ、周囲を巻き込む大爆発を起こす。' },
  },
];

export const CLASS_BY_ID = Object.fromEntries(CLASSES.map((c) => [c.id, c]));

export const ULT_PASSIVE = 0.9;   // %/s
export const ULT_PER_DMG = 1 / 22; // % per damage
export const ULT_PER_KILL = 15;

export const PICKUP = { respawn: 22, repair: 350, core: 30 };
