setInterval(start, (1 / fps) * 1000);
function start() {
  //--------------console.log(horario--------------
  //Comprueba si una console.log(hora con formato hh:mm esta en un rango de console.log(horas
  const isBetween = function (time, horaAsignatura) {
    let asigInicio = asignaturaInicio[horaAsignatura];
    let asigFin = asignaturaFin[horaAsignatura];

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
      if (isBetween(timeNowFormat, i)) asigarAsignatura(i);
      else {
        asignaturaActual = "Casa";
        asignaturaSiguiente =
          timeNowFormat > "14:00"
            ? horario[timeNow.getDay() + 1][0]
            : horario[timeNow.getDay()][0];

        asignaturaAnterior =
          timeNowFormat > "14:00"
            ? horario[timeNow.getDay()][6]
            : horario[timeNow.getDay() - 1][6];
      }
    }
  }
}

/**
 * Extrae la asignatura del horario a partir de una posicion y el dia de la semana
 * @param {Number} value Posicion desde donde se extraerá la asignatura
 */
function asigarAsignatura(value) {
  asignaturaActual = horario[timeNow.getDay()][value];
  asignaturaSiguiente =
    value == 6 ? "Casa" : horario[timeNow.getDay()][value + 1];

  asignaturaAnterior =
    value == 0 ? "Casa" : horario[timeNow.getDay()][value - 1];

  if (asignaturaActual == null) asignaturaActual = "Casa";
  if (asignaturaSiguiente == null) asignaturaSiguiente = "Casa";
  if (asignaturaAnterior == null) asignaturaAnterior = "Casa";

  startTime = asignaturaInicio[value];
  endTime = asignaturaFin[value];
}
