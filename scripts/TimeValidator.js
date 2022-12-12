setInterval(start, (1 / fps) * 1000);
function start() {
  //--------------horario--------------
  //Comprueba si una hora con formato hh:mm esta en un rango de horas
  const isBetween = function (time, horaAsignatura) {
    let asigInicio = horas[horaAsignatura];
    let asigFin = horas[horaAsignatura + 1];

    if (time < "00:00" || time > "23:59" || time.substring(3) > "59")
      throw new Error("hora no válida");
    return time >= asigInicio && time <= asigFin;
  };

  // let timeNow = new Date('November 15, 2022 12:00:00');
  // let timeNowFormat = "11:00";

  timeNow = new Date();
  //Recoge la hora actual del sistema en formato hh:mm
  let timeNowFormat = timeNow.toLocaleTimeString("default", {
    hour: "2-digit",
    minute: "2-digit",
  });

  //Selector de asignatura actual y siguiente
  if (timeNow.getDay() == 0) {
    asignaturaSiguiente = horario[1][0];
  } else if (timeNow.getDay() != 6) {
    for (var i = 0; i < 7; i++) {
      if (isBetween(timeNowFormat, i)) {
        asigarAsignatura(i);
      } else {
        asigarAsignatura(-1);
      }
    }
  }
  update();
}

/**
 * Extrae la asignatura del horario a partir de una posicion y el dia de la semana
 * @param {Number} value Posicion desde donde se extraerá la asignatura
 */
function asigarAsignatura(value) {
  if (value != -1) {
    asignaturaActual = horario[timeNow.getDay()][value];
    asignaturaSiguiente =
      value == 6 ? "Casa" : horario[timeNow.getDay()][value + 1];

    asignaturaAnterior =
      value == 0 ? "Casa" : horario[timeNow.getDay()][value - 1];

    if (asignaturaActual == null || asignaturaActual == "undefined")
      asignaturaActual = "Casa";
    if (asignaturaSiguiente == null || asignaturaSiguiente == "undefined")
      asignaturaSiguiente = "Casa";
    if (asignaturaAnterior == null || asignaturaAnterior == "undefined")
      asignaturaAnterior = "Casa";

    startTime = horas[value];
    endTime = horas[value + 1];
  } else {
    asignaturaActual = "Casa";
    asignaturaAnterior = asignaturaSiguiente = "";
  }

  console.log(
    "Actual: " +
    asignaturaActual +
    "\nSiguiente: " +
    asignaturaSiguiente +
    "\nAnterior: " +
    asignaturaAnterior +
    "\nValue: " +
    value
  );
}
