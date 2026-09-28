import { settings } from './settings.js';

// WebAudio による手続き生成サウンド（効果音・BGM）
class AudioEngine {
  constructor() {
    this.ctx = null;
    this.listenerX = 0;
    this.listenerZ = 0;
    this.lastPlay = new Map();
    this.musicMode = null;
    this.musicTimer = null;
    this.step = 0;
    this.nextTime = 0;
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    const c = this.ctx;
    this.master = c.createGain();
    this.master.connect(c.destination);
    this.comp = c.createDynamicsCompressor();
    this.comp.threshold.value = -14;
    this.comp.ratio.value = 6;
    this.comp.connect(this.master);
    this.sfxBus = c.createGain();
    this.sfxBus.connect(this.comp);
    this.musicBus = c.createGain();
    this.musicBus.connect(this.comp);
    // noise buffer
    const len = c.sampleRate * 2;
    this.noise = c.createBuffer(1, len, c.sampleRate);
    const d = this.noise.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.applyVolumes();
    if (this.pendingMusic) { const m = this.pendingMusic; this.pendingMusic = null; this.setMusic(m); }
  }

  applyVolumes() {
    if (!this.ctx) return;
    const a = settings.audio;
    this.master.gain.value = a.master;
    this.sfxBus.gain.value = a.sfx;
    this.musicBus.gain.value = a.music * 0.55;
  }

  setListener(x, z) { this.listenerX = x; this.listenerZ = z; }

  // ---- 基本部品 ----
  env(g, t, a, peak, dec, end = 0.0001) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(peak, t + a);
    g.gain.exponentialRampToValueAtTime(Math.max(end, 0.0001), t + a + dec);
  }
  osc(type, f0, f1, dur, vol, out, t, attack = 0.005) {
    const c = this.ctx;
    const o = c.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(Math.max(f1, 1), t + dur);
    const g = c.createGain();
    this.env(g, t, attack, vol, dur);
    o.connect(g); g.connect(out);
    o.start(t); o.stop(t + attack + dur + 0.05);
    return o;
  }
  noiseBurst(filterType, f0, f1, q, dur, vol, out, t, attack = 0.005) {
    const c = this.ctx;
    const s = c.createBufferSource();
    s.buffer = this.noise;
    s.loop = true;
    const f = c.createBiquadFilter();
    f.type = filterType;
    f.frequency.setValueAtTime(f0, t);
    if (f1 !== f0) f.frequency.exponentialRampToValueAtTime(Math.max(f1, 10), t + dur);
    f.Q.value = q;
    const g = c.createGain();
    this.env(g, t, attack, vol, dur);
    s.connect(f); f.connect(g); g.connect(out);
    s.start(t, Math.random() * 1.5); s.stop(t + attack + dur + 0.05);
  }

  // ---- 効果音 ----
  play(name, opt = {}) {
    if (!this.ctx) return;
    const c = this.ctx;
    const now = c.currentTime;
    const minGap = opt.gap ?? 0.03;
    const key = name + (opt.key || '');
    const last = this.lastPlay.get(key) || 0;
    if (now - last < minGap) return;
    this.lastPlay.set(key, now);

    let vol = opt.vol ?? 1;
    let pan = 0;
    if (opt.x !== undefined) {
      const dx = opt.x - this.listenerX, dz = opt.z - this.listenerZ;
      const d = Math.hypot(dx, dz);
      const maxD = opt.range ?? 55;
      if (d > maxD) return;
      vol *= Math.pow(1 - d / maxD, 1.6);
      pan = Math.max(-1, Math.min(1, (dx - dz) / 40));
    }
    if (vol < 0.01) return;
    const out = c.createGain();
    out.gain.value = vol;
    if (c.createStereoPanner) {
      const p = c.createStereoPanner();
      p.pan.value = pan * 0.7;
      out.connect(p); p.connect(this.sfxBus);
    } else out.connect(this.sfxBus);
    const t = now + 0.005;
    const fn = SFX[name];
    if (fn) fn(this, out, t, opt);
  }

  // ---- BGM ----
  setMusic(mode) {
    if (!this.ctx) { this.pendingMusic = mode; return; }
    if (this.musicMode === mode) return;
    this.musicMode = mode;
    if (this.musicTimer) clearInterval(this.musicTimer);
    this.musicTimer = null;
    if (!mode) return;
    this.step = 0;
    this.nextTime = this.ctx.currentTime + 0.1;
    this.musicTimer = setInterval(() => this.schedule(), 25);
  }

  schedule() {
    const c = this.ctx;
    const song = SONGS[this.musicMode];
    if (!song) return;
    const stepDur = 60 / song.bpm / 4;
    while (this.nextTime < c.currentTime + 0.12) {
      song.play(this, this.step, this.nextTime, stepDur);
      this.step++;
      this.nextTime += stepDur;
    }
  }
}

const N = (m) => 440 * Math.pow(2, (m - 69) / 12);

const SFX = {
  laser(a, o, t) {
    a.osc('square', 1400, 260, 0.13, 0.12, o, t);
    a.osc('sine', 900, 180, 0.12, 0.18, o, t);
  },
  gatling(a, o, t) {
    a.noiseBurst('bandpass', 2400, 900, 1.2, 0.06, 0.35, o, t);
    a.osc('square', 180, 60, 0.05, 0.12, o, t);
  },
  rail(a, o, t) {
    a.osc('sawtooth', 3200, 120, 0.4, 0.18, o, t);
    a.noiseBurst('highpass', 3000, 800, 0.8, 0.35, 0.25, o, t);
    a.osc('sine', 120, 40, 0.3, 0.4, o, t);
  },
  blade(a, o, t) {
    a.noiseBurst('bandpass', 1500, 6000, 3, 0.16, 0.45, o, t, 0.02);
    a.osc('sawtooth', 300, 900, 0.12, 0.05, o, t);
  },
  plasma(a, o, t) {
    a.osc('sine', 520, 110, 0.22, 0.3, o, t);
    a.osc('triangle', 780, 200, 0.18, 0.12, o, t);
  },
  flame(a, o, t) {
    a.noiseBurst('lowpass', 900, 500, 0.7, 0.16, 0.35, o, t, 0.03);
  },
  explosion(a, o, t, opt) {
    const s = opt.size ?? 1;
    a.noiseBurst('lowpass', 2600, 90, 0.8, 0.6 + s * 0.4, 0.9, o, t);
    a.osc('sine', 110, 30, 0.5 + s * 0.3, 0.9, o, t);
  },
  small_boom(a, o, t) {
    a.noiseBurst('lowpass', 3000, 200, 0.8, 0.3, 0.6, o, t);
    a.osc('sine', 160, 50, 0.25, 0.5, o, t);
  },
  missile(a, o, t) {
    a.noiseBurst('bandpass', 900, 2600, 2, 0.3, 0.3, o, t, 0.03);
  },
  boost(a, o, t) {
    a.noiseBurst('bandpass', 350, 2200, 1.5, 0.3, 0.5, o, t, 0.02);
    a.osc('sawtooth', 90, 200, 0.2, 0.06, o, t);
  },
  shield(a, o, t) {
    [0, 4, 7, 12].forEach((n, i) => a.osc('sine', N(72 + n), N(72 + n), 0.3, 0.12, o, t + i * 0.04));
  },
  heal(a, o, t) {
    [0, 4, 7, 11, 14].forEach((n, i) => a.osc('triangle', N(76 + n), N(76 + n), 0.25, 0.1, o, t + i * 0.06));
  },
  emp(a, o, t) {
    a.osc('square', 80, 30, 0.6, 0.25, o, t);
    a.osc('sawtooth', 2000, 60, 0.5, 0.12, o, t);
    a.noiseBurst('highpass', 4000, 1000, 1, 0.4, 0.25, o, t);
  },
  hit(a, o, t) {
    a.osc('square', 1900, 1600, 0.035, 0.12, o, t, 0.001);
  },
  hurt(a, o, t) {
    a.osc('sine', 200, 60, 0.15, 0.4, o, t);
    a.noiseBurst('lowpass', 1200, 300, 1, 0.1, 0.3, o, t);
  },
  kill(a, o, t) {
    a.osc('square', N(84), N(84), 0.09, 0.14, o, t);
    a.osc('square', N(91), N(91), 0.2, 0.14, o, t + 0.09);
  },
  death(a, o, t) {
    a.noiseBurst('lowpass', 3000, 60, 0.8, 1.4, 1.0, o, t);
    a.osc('sine', 90, 25, 1.0, 1.0, o, t);
    a.osc('sawtooth', 600, 40, 0.8, 0.12, o, t);
  },
  respawn(a, o, t) {
    a.osc('sawtooth', 100, 1600, 0.6, 0.12, o, t);
    a.osc('sine', 200, 1200, 0.6, 0.2, o, t);
  },
  zone(a, o, t) {
    for (let i = 0; i < 3; i++) a.osc('square', 880, 880, 0.12, 0.12, o, t + i * 0.22);
  },
  pickup(a, o, t) {
    [0, 7, 12].forEach((n, i) => a.osc('square', N(79 + n), N(79 + n), 0.1, 0.1, o, t + i * 0.05));
  },
  ult(a, o, t) {
    a.osc('sawtooth', 60, 400, 0.8, 0.2, o, t, 0.1);
    a.noiseBurst('bandpass', 200, 3000, 2, 0.8, 0.35, o, t, 0.2);
  },
  cloak(a, o, t) {
    a.osc('sine', 1200, 200, 0.4, 0.2, o, t);
    a.noiseBurst('highpass', 6000, 2000, 1, 0.3, 0.15, o, t);
  },
  blink(a, o, t) {
    a.osc('square', 300, 2400, 0.12, 0.15, o, t);
    a.osc('sine', 2400, 300, 0.15, 0.12, o, t + 0.1);
  },
  slam(a, o, t) {
    a.osc('sine', 80, 25, 0.6, 1.0, o, t);
    a.noiseBurst('lowpass', 800, 60, 1, 0.6, 0.8, o, t);
  },
  hook(a, o, t) {
    a.osc('square', 500, 1500, 0.1, 0.12, o, t);
    a.noiseBurst('highpass', 3000, 3000, 2, 0.12, 0.2, o, t);
  },
  deploy(a, o, t) {
    a.osc('square', 220, 220, 0.06, 0.15, o, t);
    a.osc('square', 330, 330, 0.06, 0.15, o, t + 0.08);
    a.noiseBurst('bandpass', 1500, 1500, 3, 0.08, 0.2, o, t);
  },
  charge(a, o, t) {
    a.osc('sawtooth', 100, 1200, 0.7, 0.15, o, t, 0.05);
    a.osc('sine', 200, 2000, 0.7, 0.12, o, t, 0.05);
  },
  beam(a, o, t) {
    a.osc('sawtooth', 70, 60, 0.35, 0.25, o, t);
    a.noiseBurst('bandpass', 1200, 900, 1, 0.35, 0.3, o, t);
  },
  ui_hover(a, o, t) { a.osc('sine', 1400, 1400, 0.04, 0.07, o, t); },
  ui_click(a, o, t) { a.osc('square', 700, 1200, 0.07, 0.1, o, t); },
  ui_back(a, o, t) { a.osc('square', 900, 400, 0.08, 0.1, o, t); },
  ui_start(a, o, t) {
    [0, 5, 7, 12].forEach((n, i) => a.osc('sawtooth', N(60 + n), N(60 + n), 0.18, 0.1, o, t + i * 0.07));
  },
};

// 簡易シーケンサ
function kick(a, t, v = 0.7) { a.osc('sine', 150, 40, 0.28, v, a.musicBus, t, 0.002); }
function snare(a, t, v = 0.3) { a.noiseBurst('highpass', 1800, 1200, 0.7, 0.16, v, a.musicBus, t, 0.001); a.osc('triangle', 220, 180, 0.08, v * 0.4, a.musicBus, t); }
function hat(a, t, v = 0.08) { a.noiseBurst('highpass', 8000, 8000, 1, 0.04, v, a.musicBus, t, 0.001); }
function bass(a, t, note, dur, v = 0.2) {
  const c = a.ctx;
  const o = c.createOscillator();
  o.type = 'sawtooth';
  o.frequency.value = N(note);
  const f = c.createBiquadFilter();
  f.type = 'lowpass';
  f.frequency.setValueAtTime(900, t);
  f.frequency.exponentialRampToValueAtTime(180, t + dur);
  f.Q.value = 6;
  const g = c.createGain();
  a.env(g, t, 0.005, v, dur);
  o.connect(f); f.connect(g); g.connect(a.musicBus);
  o.start(t); o.stop(t + dur + 0.05);
}
function pad(a, t, notes, dur, v = 0.04) {
  for (const n of notes) {
    const c = a.ctx;
    const o = c.createOscillator();
    o.type = 'sawtooth';
    o.frequency.value = N(n);
    o.detune.value = (Math.random() - 0.5) * 14;
    const f = c.createBiquadFilter();
    f.type = 'lowpass'; f.frequency.value = 1100;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(v, t + dur * 0.3);
    g.gain.linearRampToValueAtTime(0.0001, t + dur);
    o.connect(f); f.connect(g); g.connect(a.musicBus);
    o.start(t); o.stop(t + dur + 0.05);
  }
}
function lead(a, t, note, dur, v = 0.05) {
  a.osc('square', N(note), N(note), dur, v, a.musicBus, t, 0.01);
}

const PROG = [
  { root: 33, chord: [57, 60, 64] }, // Am
  { root: 29, chord: [53, 57, 60] }, // F
  { root: 31, chord: [55, 59, 62] }, // G
  { root: 28, chord: [52, 55, 59] }, // Em
];

const SONGS = {
  title: {
    bpm: 92,
    play(a, step, t, sd) {
      const bar = Math.floor(step / 16) % 4;
      const s = step % 16;
      const ch = PROG[bar];
      if (s === 0) pad(a, t, ch.chord, sd * 16, 0.035);
      if (s % 8 === 0) bass(a, t, ch.root + 12, sd * 6, 0.12);
      if (s === 0 || s === 10) kick(a, t, 0.35);
      if (s % 4 === 2) hat(a, t, 0.04);
      const arp = [0, 2, 1, 2];
      if (s % 2 === 0) lead(a, t, ch.chord[arp[(s / 2) % 4]] + 12, sd * 1.5, 0.018);
    },
  },
  battle: {
    bpm: 132,
    play(a, step, t, sd) {
      const bar = Math.floor(step / 16) % 4;
      const s = step % 16;
      const ch = PROG[bar];
      if (s % 4 === 0) kick(a, t, 0.6);
      if (s === 4 || s === 12) snare(a, t, 0.25);
      if (s % 2 === 1) hat(a, t, 0.05);
      const bl = [0, 0, 12, 0, 0, 12, 0, 7, 0, 0, 12, 0, 10, 0, 7, 12];
      bass(a, t, ch.root + 12 + bl[s], sd * 0.9, 0.14);
      if (s === 0) pad(a, t, ch.chord, sd * 16, 0.022);
      const mel = [12, -1, 7, -1, 10, -1, 7, 5, 3, -1, 5, -1, 7, -1, -1, -1];
      if (Math.floor(step / 64) % 2 === 1 && mel[s] >= 0) lead(a, t, ch.root + 36 + mel[s], sd * 1.8, 0.03);
    },
  },
  results: {
    bpm: 100,
    play(a, step, t, sd) {
      const bar = Math.floor(step / 16) % 4;
      const s = step % 16;
      const ch = PROG[(bar + 1) % 4];
      if (s === 0) pad(a, t, ch.chord.map((n) => n + 12), sd * 16, 0.03);
      if (s % 8 === 0) bass(a, t, ch.root + 12, sd * 7, 0.1);
      if (s % 2 === 0) lead(a, t, ch.chord[(s / 2) % 3] + 24, sd, 0.015);
    },
  },
};

export const audio = new AudioEngine();
