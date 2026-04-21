import * as math from "./math.js";
import { Color } from "./color.js";
import { Rect } from "./rect.js";
import { Text } from "./text.js";

export class Game {
  /**
   * @constructor
   */
  constructor() {
    /**
     * Target FPS
     * @type {number}
     */
    this.fps = 0;
    /**
     * Canvas HTML Element
     * @type {HTMLElement|null}
     */
    this.canvas = null;
    /**
     * 2d Canvas Context
     * @type {CanvasRenderingContext2D}
     */
    this.ctx = null;
    /**
     * Last frame update
     * @type {number}
     */
    this.lastUpdate = 0;
    /**
     * Time between frames
     this.@type {number}
     */
    this.fpsInterval = 0.0;
    /**
     * Delta Time between frames
     * @type {number}
     */
    this.dt = 0.0;
    /**
     * Time that has elapsed since last frame.
     * @@type {number}
     */
    this.timeElapsed = 0.0;
    this.startTime = 0.0;
    this.frameCount = 0;

    this.rect = new Rect(200, 10, 100, 100, new Color(255, 10, 10, 255));
    this.helloWorld = new Text("Hello World", 0, 0, new Color(255, 255, 255, 255), undefined, "center", "50px serif");
    this.fps = new Text("", 10, 20, new Color(255, 255, 255, 255), undefined, "left", "10px serif");
  }

  /**
   * Initialize the game state.
   * 
   * @param {string} title Title of the window
   * @param {string} id  ID of the Canvas Element
   * @param {number} fps Target FPS
   * @returns {Game} this
   */
  init(title, id, fps) {
    window.title = title;
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.fpsInterval = 1000.0 / 60.0;
    return this;
  }

  preUpdate() {
    this.dt = Date.now() - this.lastUpdate;
    this.timeElapsed += this.dt;
  }

  update(dt) {
    this.rect.x += math.sin(math.deg2rad(Date.now()), 10, 15);
    this.helloWorld.x = this.canvas.width / 2;
    this.helloWorld.y = this.canvas.height / 2 + math.sin(math.deg2rad(Date.now()), 20, 15);
  }

  postUpdate() {
    // TODO: Add implementation
  }

  draw() {
    if (this.timeElapsed > this.fpsInterval) {
      this.then = Date.now() - (this.timeElapsed % this.fpsInterval);


      this.ctx.fillStyle = "black";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      this.rect.draw(this.ctx);
      this.helloWorld.draw(this.ctx);

      var sinceStart = Date.now() - this.startTime;
      var currentFps = Math.round(Math.round(1000 / (sinceStart / ++this.frameCount) * 100) / 100);
      this.fps.text = "" + currentFps + " fps";
      this.fps.draw(this.ctx);
    }
  }

  loop = () => {
    requestAnimationFrame(this.loop);
    this.preUpdate();
    this.update(this.dt);
    this.postUpdate();

    this.draw();
  }

  start() {
    this.lastUpdate = Date.now();
    this.startTime = this.lastUpdate;
    this.loop();
  }
}

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    const isMobileUserAgent = () => {
      if (navigator.userAgentData !== undefined && navigator.userAgentData.mobile !== undefined) {
        return navigator.userAgentData.mobile;
      }
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Mobile|Opera Mini/i.test(
        navigator.userAgent,
      );
    };

    if (isMobileUserAgent()) {
      // if we detect a mobile 
      let canvas = document.getElementById("game");
      if (canvas !== null) {
        canvas.outerHTML = "<p>Game is not playable on mobile! Sorry!<p>";
      }
    } else {
      new Game().init("Game", "game", 60).start();
    }
  }
};