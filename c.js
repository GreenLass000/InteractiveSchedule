var canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

setInterval(update, 1 / fps * 1000);

function update() {
    ctx.canvas.width = sizeScaled(16, 9)[0];
    ctx.canvas.height = sizeScaled(16, 9)[1];
}
