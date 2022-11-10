setInterval(update, 1 / fps * 1000);

function update() {
    const windowWidth = sizeScaled(16, 9)[0];
    const windowHeight = sizeScaled(16, 9)[1];

    ctx.canvas.width = windowWidth;
    ctx.canvas.height = windowHeight;

    ctx.clearRect(0, 0, windowWidth, windowHeight);

    //MainBox
    ctx.roundRect(0, 0, windowWidth, windowHeight, windowHeight * .1);
    ctx.fillStyle = "rgb(48, 65, 44)";
    ctx.stroke();
    ctx.fill();

    //Cuadro asignatura anterior
    ctx.roundRect(
        (windowWidth - (windowWidth * 5 / 16)),
        windowHeight / 3,
        windowWidth / 4,
        windowHeight / 3,
        20
    );
    ctx.fillStyle = "cyan";
    ctx.stroke();
    ctx.fill();

    //Cuadro asignatura siguiente
    ctx.roundRect(
        windowWidth / 16,
        windowHeight / 3,
        windowWidth / 4,
        windowHeight / 3,
        windowHeight * .025
    );
    ctx.fillStyle = "cyan";
    ctx.stroke();
    ctx.fill();

    //Cuadrado asignatura actual
    ctx.roundRect(
        windowWidth / 4,    //x
        windowHeight / 4,   //y
        windowWidth / 2,    //width
        windowHeight / 2,   //height
        windowHeight * .05  //Radio
    );
    ctx.fillStyle = color[1];
    ctx.stroke();
    ctx.fill();

    //Barra de progreso
    ctx.progressBar(
        windowWidth / 4 + windowWidth * .05,
        windowHeight / 1.55,
        windowWidth / 2 - windowWidth * .1,
        windowHeight / 25,
        timeRest(endTime)
    );

    canvasLogicStart(windowWidth, windowHeight);
}