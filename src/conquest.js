import * as THREE from 'three';

// チーム制圧モード（青 vs 赤、拠点 A〜E の占拠時間を競う）

export const TEAMS = {
  blue: { id: 'blue', name: 'BLUE', label: '青チーム', color: 0x3d8bff, css: '#4a9dff' },
  red: { id: 'red', name: 'RED', label: '赤チーム', color: 0xff4040, css: '#ff5050' },
};
export const otherTeam = (t) => (t === 'blue' ? 'red' : 'blue');

// 拠点は中央点対称に配置（A,B が青側 / C 中央 / D,E が赤側）
export const CQ_POINTS = [
  { id: 'A', x: -72, z: 72, r: 9 },
  { id: 'B', x: -72, z: -24, r: 9 },
  { id: 'C', x: 0, z: 0, r: 11 },
  { id: 'D', x: 72, z: 24, r: 9 },
  { id: 'E', x: 72, z: -72, r: 9 },
];
export const TEAM_BASE = { blue: { x: -100, z: 100 }, red: { x: 100, z: -100 } };

const CAP_RATE = 12.5;     // 1機で 0→100 に 8 秒
const REGEN_RATE = 6;      // 無人時にゲージが戻る速さ
export const CAP_SCORE = 50;    // 占拠に参加した個人スコア
export const NEUTRAL_SCORE = 25; // 敵拠点を中立化した個人スコア

// 目標点：試合時間に応じて（5分→750点。3拠点を確保し続ければ約4分で到達）
export function targetScore(duration) {
  return Math.max(300, Math.round((duration * 2.5) / 50) * 50);
}

function letterTexture(ch) {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  g.font = '900 96px Orbitron, Arial, sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.lineWidth = 10;
  g.strokeStyle = 'rgba(0,0,0,0.85)';
  g.strokeText(ch, 64, 70);
  g.fillStyle = '#ffffff';
  g.fillText(ch, 64, 70);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

const NEUTRAL_COLOR = new THREE.Color(0xdddddd);
const BLUE_COLOR = new THREE.Color(TEAMS.blue.color);
const RED_COLOR = new THREE.Color(TEAMS.red.color);

export class Conquest {
  constructor(game) {
    this.game = game;
    this.target = targetScore(game.duration);
    this.scores = { blue: 0, red: 0 };
    this.points = CQ_POINTS.map((d) => this.buildPoint(d));
  }

  buildPoint(d) {
    const g = new THREE.Group();
    g.position.set(d.x, 0, d.z);
    const ringGeo = new THREE.RingGeometry(d.r - 0.5, d.r, 72);
    ringGeo.rotateX(-Math.PI / 2);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xdddddd, transparent: true, opacity: 0.85, depthWrite: false });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.y = 0.12;
    const discGeo = new THREE.CircleGeometry(d.r - 0.5, 72);
    discGeo.rotateX(-Math.PI / 2);
    const discMat = new THREE.MeshBasicMaterial({ color: 0xdddddd, transparent: true, opacity: 0.12, depthWrite: false });
    const disc = new THREE.Mesh(discGeo, discMat);
    disc.position.y = 0.1;
    // 旗竿と旗（拠点の端に立てる）
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x999ca0, metalness: 0.8, roughness: 0.3 });
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 7, 8), poleMat);
    pole.position.set(d.r * 0.55, 3.5, -d.r * 0.55);
    pole.castShadow = true;
    const flagMat = new THREE.MeshStandardMaterial({ color: 0xdddddd, emissive: 0xdddddd, emissiveIntensity: 0.35, side: THREE.DoubleSide });
    const flag = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 1.6, 6, 1), flagMat);
    flag.position.set(d.r * 0.55 + 1.35, 6.1, -d.r * 0.55);
    flag.castShadow = true;
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: letterTexture(d.id), color: 0xffffff, transparent: true, depthWrite: false }));
    sprite.scale.set(4, 4, 1);
    sprite.position.set(0, 9, 0);
    sprite.renderOrder = 6;
    g.add(ring, disc, pole, flag, sprite);
    this.game.scene.add(g);
    return { ...d, v: 0, owner: null, contested: false, nb: 0, nr: 0, group: g, ring, disc, flag, sprite, flagBase: flag.geometry.attributes.position.array.slice() };
  }

  // 拠点内にいるか（機体の半径分の余裕あり）
  pointAt(x, z, pad = 0) {
    for (const p of this.points) if (Math.hypot(x - p.x, z - p.z) < p.r + pad) return p;
    return null;
  }

  update(dt, scoring) {
    const g = this.game;
    for (const p of this.points) {
      let nb = 0, nr = 0;
      const inside = [];
      for (const r of g.robots) {
        if (!r.alive || !r.team) continue;
        if (Math.hypot(r.pos.x - p.x, r.pos.z - p.z) > p.r) continue;
        inside.push(r);
        if (r.team === 'blue') nb++; else nr++;
      }
      p.nb = nb; p.nr = nr;
      p.contested = nb > 0 && nr > 0;
      const prevV = p.v;
      if (!scoring) { /* カウントダウン中などは変化しない */ }
      else if (p.contested) { /* 争奪中は停止 */ }
      else if (nb > 0 || nr > 0) {
        const dir = nb > 0 ? 1 : -1;
        const n = nb > 0 ? nb : nr;
        const rate = CAP_RATE * Math.min(2.5, 1 + 0.5 * (n - 1));
        p.v = Math.max(-100, Math.min(100, p.v + dir * rate * dt));
      } else {
        const goal = p.owner === 'blue' ? 100 : p.owner === 'red' ? -100 : 0;
        const d = goal - p.v;
        p.v += Math.sign(d) * Math.min(Math.abs(d), REGEN_RATE * dt);
      }
      // 中立化
      if (p.owner === 'blue' && p.v <= 0 && prevV > 0) this.setOwner(p, null, inside.filter((r) => r.team === 'red'), 'blue');
      if (p.owner === 'red' && p.v >= 0 && prevV < 0) this.setOwner(p, null, inside.filter((r) => r.team === 'blue'), 'red');
      // 占拠
      if (p.v >= 100 && p.owner !== 'blue') this.setOwner(p, 'blue', inside.filter((r) => r.team === 'blue'));
      if (p.v <= -100 && p.owner !== 'red') this.setOwner(p, 'red', inside.filter((r) => r.team === 'red'));
      // 得点
      if (scoring && p.owner) this.scores[p.owner] += dt;
      this.updateVisual(p);
    }
    if (scoring && (this.scores.blue >= this.target || this.scores.red >= this.target)) {
      this.scores.blue = Math.min(this.scores.blue, this.target);
      this.scores.red = Math.min(this.scores.red, this.target);
      g.endMatch();
    }
  }

  setOwner(p, team, contributors, lostFrom = null) {
    const g = this.game;
    const prev = p.owner;
    p.owner = team;
    for (const r of contributors) {
      r.stats.score += team ? CAP_SCORE : NEUTRAL_SCORE;
      if (team) r.stats.caps = (r.stats.caps || 0) + 1;
    }
    g.emit('conquest', { point: p, team, prev: prev || lostFrom, contributors });
  }

  updateVisual(p) {
    const t = this.game.time;
    const k = Math.abs(p.v) / 100;
    const side = p.v > 0 ? BLUE_COLOR : p.v < 0 ? RED_COLOR : NEUTRAL_COLOR;
    const ownerCol = p.owner === 'blue' ? BLUE_COLOR : p.owner === 'red' ? RED_COLOR : NEUTRAL_COLOR;
    p.ring.material.color.copy(ownerCol);
    p.ring.material.opacity = p.contested ? 0.5 + Math.sin(t * 12) * 0.4 : 0.85;
    p.disc.material.color.copy(NEUTRAL_COLOR).lerp(side, k);
    p.disc.material.opacity = 0.08 + k * 0.2;
    p.flag.material.color.copy(ownerCol);
    p.flag.material.emissive.copy(ownerCol);
    p.sprite.material.color.copy(ownerCol).lerp(new THREE.Color(0xffffff), 0.35);
    // 旗のはためき
    const pos = p.flag.geometry.attributes.position;
    const base = p.flagBase;
    for (let i = 0; i < pos.count; i++) {
      const x = base[i * 3];
      pos.array[i * 3 + 2] = base[i * 3 + 2] + Math.sin(t * 5 + x * 2.2 + p.x) * 0.18 * (x + 1.3);
    }
    pos.needsUpdate = true;
  }

  dispose() {
    for (const p of this.points) {
      this.game.scene.remove(p.group);
      p.group.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) { if (o.material.map) o.material.map.dispose(); o.material.dispose(); }
      });
    }
  }
}
