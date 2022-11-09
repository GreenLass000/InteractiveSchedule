const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

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
        windowWidth / 16,
        windowHeight / 3,
        windowWidth / 4,
        windowHeight / 3,
        20
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

    // //Barra de progreso
    // ctx.progressBar(
    //     windowWidth / 8,
    //     windowHeight / 1.6,
    //     windowWidth / 4 * 3, windowHeight / 25,
    //     timeRest("")
    // );

    // //Version text
    // ctx.font = "15px Arial";
    // ctx.fillStyle = "#000";
    // ctx.textAlign = "center";
    // ctx.fillText(
    //     version,
    //     15,
    //     15
    // );

    // //Asignatura actual
    // ctx.font = "bold 30px Arial";
    // ctx.fillStyle = color[3];
    // ctx.textAlign = "center";
    // ctx.fillText(
    //     getAsignaturaActual().toUpperCase(),
    //     windowWidth / 2,
    //     windowHeight / 4
    // );

    // //Asignatura siguiente
    // ctx.font = "20px Arial";
    // ctx.fillStyle = color[4];
    // ctx.textAlign = "center";
    // ctx.fillText(
    //     getAsignaturaSiguiente().toUpperCase(),
    //     windowWidth / 2,
    //     windowHeight / 2.01
    // );
}