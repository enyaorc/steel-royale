import * as THREE from 'three';
import { mulberry32 } from './util.js';

// Canvas による手続きテクスチャ生成

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}

function toTex(c, repeat = true, srgb = true) {
  const t = new THREE.CanvasTexture(c);
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  t.needsUpdate = true;
  return t;
}

// hex は sRGB 値としてそのまま使う（THREE.Color を通すとリニア変換されて色がずれる）
function css(hex, mul = 1) {
  const r = ((hex >> 16) & 255) * mul, g = ((hex >> 8) & 255) * mul, b = (hex & 255) * mul;
  return `rgb(${Math.min(255, r) | 0},${Math.min(255, g) | 0},${Math.min(255, b) | 0})`;
}

function noiseFill(ctx, w, h, rng, amt, alpha = 0.08) {
  const img = ctx.getImageData(0, 0, w, h);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (rng() - 0.5) * amt;
    d[i] += n; d[i + 1] += n; d[i + 2] += n;
  }
  ctx.putImageData(img, 0, 0);
}

const cache = new Map();

// ロボット用パネル
export function panelTexture(hex) {
  const key = 'panel' + hex;
  if (cache.has(key)) return cache.get(key);
  const S = 256;
  const c = canvas(S, S);
  const g = c.getContext('2d');
  const rng = mulberry32(hex);
  g.fillStyle = css(hex);
  g.fillRect(0, 0, S, S);
  noiseFill(g, S, S, rng, 18);
  // パネル分割
  g.strokeStyle = 'rgba(0,0,0,0.45)';
  g.lineWidth = 2;
  const cells = [[0, 0, 128, 96], [128, 0, 128, 64], [128, 64, 128, 128], [0, 96, 64, 160], [64, 96, 64, 80], [64, 176, 64, 80], [128, 192, 128, 64]];
  for (const [x, y, w, h] of cells) {
    g.strokeRect(x + 2, y + 2, w - 4, h - 4);
    g.fillStyle = 'rgba(255,255,255,0.06)';
    g.fillRect(x + 3, y + 3, w - 6, 3);
  }
  // リベット
  g.fillStyle = 'rgba(0,0,0,0.4)';
  for (const [x, y, w, h] of cells) {
    for (const [px, py] of [[x + 8, y + 8], [x + w - 8, y + 8], [x + 8, y + h - 8], [x + w - 8, y + h - 8]]) {
      g.beginPath(); g.arc(px, py, 2, 0, Math.PI * 2); g.fill();
    }
  }
  // 汚れ
  for (let i = 0; i < 40; i++) {
    g.fillStyle = `rgba(20,15,10,${rng() * 0.12})`;
    g.fillRect(rng() * S, rng() * S, rng() * 30, rng() * 4);
  }
  // 警告ストライプ
  g.save();
  g.beginPath(); g.rect(10, 230, 100, 16); g.clip();
  for (let i = -2; i < 12; i++) {
    g.fillStyle = i % 2 ? 'rgba(20,20,20,0.5)' : 'rgba(230,190,40,0.5)';
    g.beginPath(); g.moveTo(10 + i * 12, 246); g.lineTo(22 + i * 12, 230); g.lineTo(34 + i * 12, 230); g.lineTo(22 + i * 12, 246); g.fill();
  }
  g.restore();
  const t = toTex(c);
  cache.set(key, t);
  return t;
}

// ビルのファサード（窓）
export function facadeTextures(seed = 1, base = 0x5a5f66) {
  const key = 'facade' + seed + base;
  if (cache.has(key)) return cache.get(key);
  const S = 256;
  const rng = mulberry32(seed * 977);
  const c = canvas(S, S), g = c.getContext('2d');
  const e = canvas(S, S), ge = e.getContext('2d');
  g.fillStyle = css(base);
  g.fillRect(0, 0, S, S);
  noiseFill(g, S, S, rng, 22);
  ge.fillStyle = '#000';
  ge.fillRect(0, 0, S, S);
  // 1テクスチャ = 横4窓 x 縦4階
  const cw = S / 4, ch = S / 4;
  for (let y = 0; y < 4; y++) {
    g.fillStyle = 'rgba(0,0,0,0.35)';
    g.fillRect(0, y * ch + ch - 6, S, 6);
    for (let x = 0; x < 4; x++) {
      const wx = x * cw + 10, wy = y * ch + 12, ww = cw - 20, wh = ch - 26;
      const lit = rng() < 0.22;
      const broken = rng() < 0.12;
      g.fillStyle = broken ? '#141414' : lit ? '#c9a25a' : '#1d2a33';
      g.fillRect(wx, wy, ww, wh);
      g.fillStyle = 'rgba(255,255,255,0.08)';
      g.fillRect(wx, wy, ww, 4);
      g.strokeStyle = 'rgba(0,0,0,0.6)';
      g.lineWidth = 2;
      g.strokeRect(wx, wy, ww, wh);
      g.beginPath(); g.moveTo(wx + ww / 2, wy); g.lineTo(wx + ww / 2, wy + wh); g.stroke();
      if (lit) {
        ge.fillStyle = rng() < 0.5 ? '#ffb45a' : '#ffd890';
        ge.fillRect(wx, wy, ww, wh);
      }
    }
  }
  // 汚れ垂れ
  for (let i = 0; i < 20; i++) {
    const x = rng() * S;
    const grd = g.createLinearGradient(0, 0, 0, S);
    grd.addColorStop(0, 'rgba(0,0,0,0.15)');
    grd.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = grd;
    g.fillRect(x, rng() * S, 3 + rng() * 6, 40 + rng() * 80);
  }
  const res = { map: toTex(c), emissive: toTex(e) };
  cache.set(key, res);
  return res;
}

export function roofTexture() {
  if (cache.has('roof')) return cache.get('roof');
  const S = 128;
  const c = canvas(S, S), g = c.getContext('2d');
  const rng = mulberry32(55);
  g.fillStyle = '#4a4c4f';
  g.fillRect(0, 0, S, S);
  noiseFill(g, S, S, rng, 30);
  g.strokeStyle = 'rgba(0,0,0,0.3)';
  for (let i = 0; i < S; i += 32) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, S); g.stroke(); g.beginPath(); g.moveTo(0, i); g.lineTo(S, i); g.stroke(); }
  for (let i = 0; i < 12; i++) { g.fillStyle = `rgba(0,0,0,${rng() * 0.2})`; g.beginPath(); g.arc(rng() * S, rng() * S, rng() * 14, 0, 7); g.fill(); }
  const t = toTex(c);
  cache.set('roof', t);
  return t;
}

export function metalTexture(hex = 0x6a6d70, stripes = false) {
  const key = 'metal' + hex + stripes;
  if (cache.has(key)) return cache.get(key);
  const S = 128;
  const c = canvas(S, S), g = c.getContext('2d');
  const rng = mulberry32(hex + 3);
  g.fillStyle = css(hex);
  g.fillRect(0, 0, S, S);
  noiseFill(g, S, S, rng, 26);
  // 波板
  for (let x = 0; x < S; x += 8) {
    g.fillStyle = 'rgba(255,255,255,0.05)'; g.fillRect(x, 0, 3, S);
    g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(x + 4, 0, 3, S);
  }
  // 錆
  for (let i = 0; i < 30; i++) {
    g.fillStyle = `rgba(${120 + rng() * 60},${50 + rng() * 30},20,${rng() * 0.25})`;
    g.beginPath(); g.arc(rng() * S, rng() * S, rng() * 10, 0, 7); g.fill();
  }
  if (stripes) {
    for (let i = -4; i < 12; i++) {
      g.fillStyle = i % 2 ? '#222' : '#d8a320';
      g.beginPath(); g.moveTo(i * 16, S); g.lineTo(i * 16 + 16, S - 16); g.lineTo(i * 16 + 32, S - 16); g.lineTo(i * 16 + 16, S); g.fill();
    }
  }
  const t = toTex(c);
  cache.set(key, t);
  return t;
}

export function concreteTexture(hex = 0x77777a) {
  const key = 'concrete' + hex;
  if (cache.has(key)) return cache.get(key);
  const S = 128;
  const c = canvas(S, S), g = c.getContext('2d');
  const rng = mulberry32(hex + 11);
  g.fillStyle = css(hex);
  g.fillRect(0, 0, S, S);
  noiseFill(g, S, S, rng, 34);
  g.strokeStyle = 'rgba(0,0,0,0.25)';
  g.strokeRect(1, 1, S - 2, S - 2);
  for (let i = 0; i < 6; i++) {
    g.strokeStyle = 'rgba(0,0,0,0.2)';
    g.beginPath();
    let x = rng() * S, y = rng() * S;
    g.moveTo(x, y);
    for (let k = 0; k < 5; k++) { x += (rng() - 0.5) * 30; y += (rng() - 0.5) * 30; g.lineTo(x, y); }
    g.stroke();
  }
  const t = toTex(c);
  cache.set(key, t);
  return t;
}

export function crateTexture(hex = 0x8a6a3a) {
  const key = 'crate' + hex;
  if (cache.has(key)) return cache.get(key);
  const S = 128;
  const c = canvas(S, S), g = c.getContext('2d');
  const rng = mulberry32(hex);
  g.fillStyle = css(hex);
  g.fillRect(0, 0, S, S);
  noiseFill(g, S, S, rng, 30);
  g.strokeStyle = css(hex, 0.55);
  g.lineWidth = 10;
  g.strokeRect(5, 5, S - 10, S - 10);
  g.beginPath(); g.moveTo(8, 8); g.lineTo(S - 8, S - 8); g.stroke();
  g.lineWidth = 2;
  g.strokeStyle = 'rgba(0,0,0,0.5)';
  g.strokeRect(1, 1, S - 2, S - 2);
  const t = toTex(c);
  cache.set(key, t);
  return t;
}

export function containerTexture(hex) {
  const key = 'container' + hex;
  if (cache.has(key)) return cache.get(key);
  const S = 128;
  const c = canvas(S, S), g = c.getContext('2d');
  const rng = mulberry32(hex + 7);
  g.fillStyle = css(hex);
  g.fillRect(0, 0, S, S);
  for (let x = 0; x < S; x += 10) {
    g.fillStyle = 'rgba(0,0,0,0.18)'; g.fillRect(x, 0, 4, S);
    g.fillStyle = 'rgba(255,255,255,0.07)'; g.fillRect(x + 5, 0, 2, S);
  }
  noiseFill(g, S, S, rng, 20);
  for (let i = 0; i < 15; i++) {
    g.fillStyle = `rgba(110,50,20,${rng() * 0.3})`;
    g.fillRect(rng() * S, rng() * S, rng() * 16, rng() * 16);
  }
  const t = toTex(c);
  cache.set(key, t);
  return t;
}

// ゾーン壁
export function zoneTexture() {
  if (cache.has('zone')) return cache.get('zone');
  const W = 64, H = 256;
  const c = canvas(W, H), g = c.getContext('2d');
  const grd = g.createLinearGradient(0, H, 0, 0);
  grd.addColorStop(0, 'rgba(120,200,255,1)');
  grd.addColorStop(0.25, 'rgba(60,140,255,0.55)');
  grd.addColorStop(1, 'rgba(40,90,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, W, H);
  for (let y = 0; y < H; y += 16) {
    g.fillStyle = 'rgba(200,240,255,0.25)';
    g.fillRect(0, y, W, 2);
  }
  g.fillStyle = 'rgba(220,250,255,0.35)';
  g.fillRect(0, 0, 2, H);
  const t = toTex(c, true, true);
  cache.set('zone', t);
  return t;
}

export function scorchTexture() {
  if (cache.has('scorch')) return cache.get('scorch');
  const S = 128;
  const c = canvas(S, S), g = c.getContext('2d');
  const rng = mulberry32(99);
  const grd = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  grd.addColorStop(0, 'rgba(0,0,0,0.85)');
  grd.addColorStop(0.5, 'rgba(10,8,6,0.55)');
  grd.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, S, S);
  for (let i = 0; i < 20; i++) {
    g.strokeStyle = 'rgba(0,0,0,0.3)';
    g.beginPath(); g.moveTo(S / 2, S / 2);
    const a = rng() * 7;
    g.lineTo(S / 2 + Math.cos(a) * S * 0.5 * rng(), S / 2 + Math.sin(a) * S * 0.5 * rng());
    g.stroke();
  }
  const t = toTex(c, false);
  cache.set('scorch', t);
  return t;
}

export function ringTexture() {
  if (cache.has('ring')) return cache.get('ring');
  const S = 128;
  const c = canvas(S, S), g = c.getContext('2d');
  const grd = g.createRadialGradient(S / 2, S / 2, S * 0.3, S / 2, S / 2, S / 2);
  grd.addColorStop(0, 'rgba(255,255,255,0)');
  grd.addColorStop(0.75, 'rgba(255,255,255,0.9)');
  grd.addColorStop(0.9, 'rgba(255,255,255,0.4)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, S, S);
  const t = toTex(c, false);
  cache.set('ring', t);
  return t;
}

export function glowTexture() {
  if (cache.has('glow')) return cache.get('glow');
  const S = 64;
  const c = canvas(S, S), g = c.getContext('2d');
  const grd = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.3, 'rgba(255,255,255,0.6)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, S, S);
  const t = toTex(c, false);
  cache.set('glow', t);
  return t;
}
