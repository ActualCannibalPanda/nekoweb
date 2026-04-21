/**
 * @type {HTMLElement|null}
 */
let canvas = null;
/**
 * @type {CanvasRenderingContext2D}
 */
let ctx = null;
/**
 * @type {number}
 */
let lastUpdate = Date.now();
let dt = 0.0;

/**
 * Called every frame to update game logic.
 */
function update() {
  var now = Date.now();
  dt = now - lastUpdate;
}

/**
 * Called every frame to draw to the canvas.
 */
function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  var y = Math.sin(Date.now() / 1000) * 20;
  var text = ctx.measureText("Hello World");
  ctx.fillStyle = "white";
  ctx.font = "50px serif";
  ctx.fillText(
    "Hello World",
    canvas.width / 2 - text.width / 2,
    y + canvas.height / 2 + 25,
  );
}

/**
 * Starts the game by gathering necessary data.
 */
function startGame() {
  canvas = document.getElementById("game");
  ctx = canvas.getContext("2d");
  lastUpdate = Date.now();
  setInterval(draw, (1 / 60) * 1000);
}

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    const isMobileUserAgent = () => {
      if (navigator.userAgentData !== undefined && navigator.userAgentData.mobile !== undefined) {
        return navigator.userAgentData.mobile
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
      startGame();
    }
  }
};