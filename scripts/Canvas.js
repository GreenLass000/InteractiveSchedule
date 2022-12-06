const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function update() {
  document.body.style.backgroundColor = colors[0];
  document.getElementById("button").style.backgroundColor = colors[11]

  const windowWidth = sizeScaled(16, 9)[0];
  const windowHeight = sizeScaled(16, 9)[1];

  ctx.canvas.width = windowWidth;
  ctx.canvas.height = windowHeight;

  ctx.clearRect(0, 0, windowWidth, windowHeight);

  //MainBox
  ctx.roundRect(0, 0, windowWidth, windowHeight, windowHeight * 0.1);
  ctx.fillStyle = colors[1];
  ctx.fill();

  //Cuadro asignatura anterior
  ctx.roundRect(
    windowWidth - (windowWidth * 5) / 16,
    windowHeight / 3,
    windowWidth / 4,
    windowHeight / 3,
    windowHeight * 0.025
  );
  ctx.fillStyle = colors[4];
  ctx.stroke();
  ctx.fill();

  //Cuadro asignatura siguiente
  ctx.roundRect(
    windowWidth / 16,
    windowHeight / 3,
    windowWidth / 4,
    windowHeight / 3,
    windowHeight * 0.025
  );
  ctx.fillStyle = colors[6];
  ctx.stroke();
  ctx.fill();

  //Cuadrado asignatura actual
  ctx.roundRect(
    windowWidth / 4, //x
    windowHeight / 4, //y
    windowWidth / 2, //width
    windowHeight / 2, //height
    windowHeight * 0.05 //Radio
  );
  ctx.fillStyle = colors[5];
  ctx.stroke();
  ctx.fill();

  //Barra de progreso
  ctx.progressBar(
    windowWidth / 4 + windowWidth * 0.05,
    windowHeight / 1.55,
    windowWidth / 2 - windowWidth * 0.1,
    windowHeight / 25,
    timeRest(startTime, endTime),
    [colors[2], colors[3]]
  );

  canvasLogicStart(windowWidth, windowHeight);

  document.getElementById("version").textContent = version;
  document.getElementById("version").style.color = colors[10];
}
