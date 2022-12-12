/**
 * 
 * @param {Number} w ancho
 * @param {Number} h alto
 * @returns El tamaño del ancho y alto en pixeles basado en la relacion de
aspecto pasada por parametro y el tamaño de la pantalla
 */
function sizeScaled(w, h) {
  const ratio = w / h;
  const width = window.innerWidth - window.innerWidth * 0.05;
  const height = window.innerHeight - window.innerHeight * 0.05;

  // console.log(ratio + "\n" + width + "\n" + height);

  if (width / ratio > height) {
    return [height * ratio, height];
  } else {
    return [width, width / ratio];
  }
}

/**
 *
 * @returns Asignatura anterior a la actual
 */
function getAsignaturaAnterior() {
  return asignaturaAnterior;
}

/**
 *
 * @returns Asignatura actual
 */
function getAsignaturaActual() {
  return asignaturaActual;
}

/**
 *
 * @returns Asignatura siguiente a la actual
 */
function getAsignaturaSiguiente() {
  return asignaturaSiguiente;
}

/**
 * Metodo que devuelve el tiempo en minutos entre dos fechas en formato `HH:mm`
 * @param {String} endTime Hora en formato `HH:mm` a la que acaba la asignatura
 * @returns Cuánto tiempo falta para que termine la clase actual en porcentaje
 */
function timeRest(startTime, endTime) {
  timeNow = new Date();
  //Recoge la hora actual del sistema en formato hh:mm
  let timeNowFormat = timeNow.toLocaleTimeString("default", {
    hour: "2-digit",
    minute: "2-digit",
  });

  let timeRestant = minutesDif(endTime, timeNowFormat);
  let signatureTotal = minutesDif(endTime, startTime);

  console.log(
    "Tiempo restante: " + timeRestant +
    "\n" +
    "Tiempo total: " + signatureTotal +
    "\n" +
    "Porcentaje: " +
    ((signatureTotal - timeRestant) * 100) / signatureTotal +
    "%"
  );
  return ((signatureTotal - timeRestant) * 100) / signatureTotal;
}

/**
 * 
 * @param {String} start 
 * @param {String} end 
 * @returns 
 */
function minutesDif(start, end) {
  let s = start.split(":");
  let e = end.split(":");

  return (
    parseInt(s[0]) * 60 +
    parseInt(s[1]) -
    (parseInt(e[0]) * 60 + parseInt(e[1]))
  );
}

/**
 * Metodo que devuelve la abreviacion del nombre de una
 * asignatura a partir del nombre completo
 * @param {String} signature Asignatura
 * @returns Asignatura abreviada
 */
function getShortDay(signature) {
  return Asignaturas[signature];
}

/**
 * 
 * @param {Object} compare Elemento al que se le comparara undefined
 * y lo que devolvera si result es undefined
 * @param {Object} result Elemento que devolvera si no es undefined
 * @returns "" si es undefined, de lo contrario *result*,
 * si no se asigna valor a *result*, cogerá por defecto el valor de *compare*
 */
function isUndefined(compare, result) {
  let r = result || compare;
  return compare == undefined ? "" : r;
}

/**
 * 
 * @param {EventHandler} e Evento recogido de OnLoad
 */
function createTable(e) {
  const table = document.getElementById("table");
  for (let i = 0; i < 8; i++) {
    const row = table.insertRow(i);
    for (let j = 0; j < 6; j++) {
      let cell = row.insertCell();
      cell.innerHTML = i < 1 ? week[j] :
        j == 0 ? "" + horas[i - 1] + " - " + horas[i] : isUndefined(horario[j][i - 1], getShortDay(horario[j][i - 1]));
      cell.style.borderColor = colors[14];
    }
  }
}