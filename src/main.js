import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { GameMap } from './map.js';
import { Game } from './game.js';
import { HUD } from './hud.js';
import { UI, renderPortraits } from './ui.js';
import { settings, saveSettings } from './settings.js';
import { input } from './input.js';
import { audio } from './audio.js';
import { touch } from './touch.js';

const $ = (s) => document.querySelector(s);

function setLoading(p, text) {
  $('#load-bar i').style.width = `${p * 100}%`;
  if (text) $('#load-text').textContent = text;
}
// 読み込み表示を更新させるための待機（非表示タブでも止まらないよう setTimeout を使う）
const nextFrame = () => new Promise((r) => setTimeout(r, 16));

async function boot() {
  setLoading(0.05, 'レンダラー初期化中...');
  await nextFrame();
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  $('#gl-wrap').appendChild(renderer.domElement);

  const pmrem = new THREE.PMREMGenerator(renderer);
  const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  setLoading(0.2, 'マップ生成中...');
  await nextFrame();
  const map = new GameMap();

  setLoading(0.6, '機体データ構築中...');
  await nextFrame();
  const portraits = renderPortraits(env);

  setLoading(0.8, 'システム起動中...');
  await nextFrame();

  // ポストプロセス
  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(new THREE.Scene(), new THREE.PerspectiveCamera());
  const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.55, 0.45, 0.82);
  composer.addPass(renderPass);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  const hud = new HUD(portraits);
  let game = null;      // 現在のゲーム（タイトル背景含む）
  let mode = 'title';   // title | match | paused | results
  let lastOpts = null;

  function applyGraphics() {
    const pr = Math.min(window.devicePixelRatio || 1, 2) * settings.graphics.resolution;
    renderer.setPixelRatio(pr);
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setPixelRatio(pr);
    composer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = settings.graphics.shadows;
    if (game) {
      game.applyShadowSettings();
      game.camera.aspect = window.innerWidth / window.innerHeight;
      game.camera.updateProjectionMatrix();
      game.fx.setScale(window.innerHeight * pr, game.camera.fov);
      if (!game.attract) game.camZoom = settings.gameplay.camZoom;
      // 影設定の切替時にマテリアル再コンパイル
      game.scene.traverse((o) => { if (o.material && o.material.needsUpdate !== undefined && !Array.isArray(o.material)) o.material.needsUpdate = true; });
    }
    audio.applyVolumes();
    touch.layout();
  }

  function setGame(g) {
    if (game) game.dispose();
    game = g;
    renderPass.scene = g.scene;
    renderPass.camera = g.camera;
    applyGraphics();
  }

  function startTitle() {
    hud.unbind();
    input.enabled = false;
    document.body.classList.remove('ingame');
    setGame(new Game(renderer, map, env, { attract: true, duration: 99999 }));
    mode = 'title';
    ui.show('title');
    audio.setMusic('title');
  }

  function startMatch() {
    audio.init();
    const p = settings.player;
    lastOpts = { playerClass: p.classId, playerName: p.name || 'PLAYER', bots: p.bots, difficulty: p.difficulty, duration: p.duration, mode: p.mode };
    saveSettings();
    const g = new Game(renderer, map, env, lastOpts);
    setGame(g);
    hud.bind(g);
    g.on((type, data) => {
      if (type === 'end') {
        mode = 'results';
        input.enabled = false;
        document.body.classList.remove('ingame');
        hud.unbind();
        audio.setMusic('results');
        ui.showResults(data, lastOpts);
      }
    });
    ui.hideAll();
    mode = 'match';
    input.enabled = true;
    document.body.classList.add('ingame');
    audio.setMusic('battle');
  }

  function pause(on) {
    if (on) {
      mode = 'paused';
      ui.show('pause');
      document.body.classList.remove('ingame');
      input.enabled = false;
    } else {
      mode = 'match';
      ui.hideAll();
      document.body.classList.add('ingame');
      input.enabled = true;
    }
  }

  const ui = new UI(env, portraits, {
    startMatch,
    settingsChanged: applyGraphics,
    settingsClosed: () => { if (mode === 'paused') ui.show('pause'); },
  });

  $('#btn-resume').onclick = () => pause(false);
  window.addEventListener('steel-pause', () => { if (mode === 'match') pause(true); });
  const toggleFs = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        if (screen.orientation && screen.orientation.lock) await screen.orientation.lock('landscape').catch(() => {});
      } else await document.exitFullscreen();
    } catch (e) { /* 非対応ブラウザ */ }
    setTimeout(applyGraphics, 300);
  };
  $('#btn-fullscreen').onclick = toggleFs;
  $('#btn-pause-fs').onclick = toggleFs;
  $('#btn-pause-settings').onclick = () => ui.show('settings');
  $('#btn-pause-restart').onclick = () => startMatch();
  $('#btn-pause-quit').onclick = () => startTitle();
  $('#btn-res-again').onclick = () => startMatch();
  $('#btn-res-hangar').onclick = () => { startTitle(); ui.show('hangar'); };
  $('#btn-res-title').onclick = () => startTitle();

  window.addEventListener('resize', applyGraphics);
  window.addEventListener('pointerdown', () => audio.init());
  window.addEventListener('keydown', () => audio.init());

  startTitle();
  setLoading(1, '');
  $('#loading').classList.add('done');
  setTimeout(() => $('#loading').remove(), 800);

  let last = performance.now();
  let fpsT = 0, fpsN = 0;
  function frame(now) {
    requestAnimationFrame(frame);
    const dt = Math.min(0.1, (now - last) / 1000);
    last = now;

    if (input.codePressed('Escape') && !input.captureHandler) {
      if (mode === 'match') pause(true);
      else if (mode === 'paused' && ui.screen === 'pause') pause(false);
    }

    if (game && mode !== 'paused') game.update(dt);
    if (game) {
      if (settings.graphics.bloom) composer.render(dt);
      else renderer.render(game.scene, game.camera);
    }
    if (mode === 'match' || mode === 'paused') hud.update(mode === 'paused' ? 0 : dt, game.camera);
    ui.renderHangar(dt);
    input.endFrame();

    fpsN++; fpsT += dt;
    if (fpsT > 1) { window.__fps = fpsN / fpsT; fpsN = 0; fpsT = 0; }
  }
  requestAnimationFrame(frame);

  // デバッグ用
  window.__steel = { get game() { return game; }, startMatch, startTitle };
}

boot().catch((e) => {
  console.error(e);
  const t = document.querySelector('#load-text');
  if (t) t.textContent = 'エラー: ' + e.message;
});
