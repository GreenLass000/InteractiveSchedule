function canvasLogicStart(windowWidth, windowHeight) {
  //Asignatura actual
  ctx.font = "bold " + windowWidth * 0.05 + "px Arial";
  ctx.fillStyle = colors[8];
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  if (getAsignaturaActual() === "Gestión Empresarial") {
    ctx.fillText(
      "Gestión",
      windowWidth / 2,
      windowHeight / 2 - windowWidth * 0.05
    );
    ctx.fillText("Empresarial", windowWidth / 2, windowHeight / 2);
  } else {
    ctx.fillText(getAsignaturaActual(), windowWidth / 2, windowHeight / 2);
  }

  console.log(
    getAsignaturaAnterior() +
      "\n" +
      getAsignaturaActual() +
      "\n" +
      getAsignaturaSiguiente()
  );

  //Asignatura anterior
  ctx.font = windowWidth * 0.05 + "px Arial";
  ctx.fillStyle = colors[7];
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(
    getShortDay(getAsignaturaAnterior()),
    windowWidth / 6,
    windowHeight / 2
  );

  //Asignatura siguiente
  ctx.font = windowWidth * 0.05 + "px Arial";
  ctx.fillStyle = colors[9];
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(
    getShortDay(getAsignaturaSiguiente()),
    (windowWidth / 6) * 5,
    windowHeight / 2
  );
}
