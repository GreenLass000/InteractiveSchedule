const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.canvas.width = windowWidth;
ctx.canvas.height = windowHeight;
setInterval(update, 1 / fps * 1000);

function update() {
    ctx.clearRect(0, 0, windowWidth, windowHeight);

    //Barra de progreso
    ctx.progressBar(
        windowWidth / 8,
        windowHeight / 1.6,
        windowWidth / 4 * 3, windowHeight / 25,
        timeRest("")
    );

    //Cuadrado asignatura actual
    ctx.roundRect(
        windowWidth / 4,    //x
        windowHeight / 7,   //y
        windowWidth / 2,    //width
        windowHeight / 5,   //height
        20
    );
    ctx.fillStyle = color[1];
    ctx.stroke();
    ctx.fill();

    //Version text
    ctx.font = "15px Arial";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText(
        version,
        15,
        15
    );

    //Asignatura actual
    ctx.font = "bold 30px Arial";
    ctx.fillStyle = color[3];
    ctx.textAlign = "center";
    ctx.fillText(
        getAsignaturaActual().toUpperCase(),
        windowWidth / 2,
        windowHeight / 4
    );

    //Asignatura siguiente
    ctx.font = "20px Arial";
    ctx.fillStyle = color[4];
    ctx.textAlign = "center";
    ctx.fillText(
        getAsignaturaSiguiente().toUpperCase(),
        windowWidth / 2,
        windowHeight / 2.01
    );
}