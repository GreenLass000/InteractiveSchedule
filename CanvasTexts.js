function canvasLogicStart(windowWidth, windowHeight) {
    //Asignatura actual
    ctx.font = "bold 40px Arial";
    ctx.fillStyle = color[3];
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    if (getAsignaturaActual() === "Gestión Empresarial") {
        ctx.fillText(
            "Gestión",
            windowWidth / 2,
            windowHeight / 2 - windowWidth * .05
        );
        ctx.fillText(
            "Empresarial",
            windowWidth / 2,
            windowHeight / 2
        );
    } else {
        ctx.fillText(
            getAsignaturaActual(),
            windowWidth / 2,
            windowHeight / 2
        );
    }

    //Asignatura siguiente
    ctx.font = "20px Arial";
    ctx.fillStyle = color[4];
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
        getShortDay(getAsignaturaSiguiente()),
        windowWidth / 6 * 5,
        windowHeight / 2
    );

    //Asignatura siguiente
    ctx.font = "20px Arial";
    ctx.fillStyle = color[4];
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
        getShortDay(getAsignaturaAnterior()),
        windowWidth / 6 ,
        windowHeight / 2
    );
}