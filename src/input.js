import { settings } from './settings.js';

// キーボード/マウス入力
class Input {
  constructor() {
    this.down = new Set();
    this.pressed = new Set();
    this.mouseX = window.innerWidth / 2;
    this.mouseY = window.innerHeight / 2;
    this.mouseDown = false;
    this.wheel = 0;
    this.enabled = false; // ゲーム中のみ true
    this.captureHandler = null; // キー割当変更用
    this.touchMode = false;     // タッチ操作中はマウスボタンを無視

    window.addEventListener('keydown', (e) => {
      if (this.captureHandler) {
        e.preventDefault();
        this.captureHandler(e.code);
        return;
      }
      if (this.enabled && (e.code === 'Tab' || e.code === 'Space' || e.code.startsWith('Arrow') || Object.values(settings.keys).includes(e.code))) {
        e.preventDefault();
      }
      if (!this.down.has(e.code)) this.pressed.add(e.code);
      this.down.add(e.code);
    });
    window.addEventListener('keyup', (e) => { this.down.delete(e.code); });
    window.addEventListener('blur', () => { this.down.clear(); this.mouseDown = false; });
    window.addEventListener('mousemove', (e) => { this.mouseX = e.clientX; this.mouseY = e.clientY; });
    window.addEventListener('mousedown', (e) => { if (e.button === 0 && !this.touchMode) this.mouseDown = true; });
    window.addEventListener('mouseup', (e) => { if (e.button === 0) this.mouseDown = false; });
    window.addEventListener('contextmenu', (e) => { if (this.enabled) e.preventDefault(); });
    window.addEventListener('wheel', (e) => { if (this.enabled) this.wheel += Math.sign(e.deltaY); }, { passive: true });
  }

  isDown(action) { return this.down.has(settings.keys[action]); }
  wasPressed(action) { return this.pressed.has(settings.keys[action]); }
  codePressed(code) { return this.pressed.has(code); }

  endFrame() { this.pressed.clear(); this.wheel = 0; }
}

export const input = new Input();
