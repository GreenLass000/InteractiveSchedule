document.getElementById("version").textContent = version;

/**
 * 
 * @param {Number} w ancho
 * @param {Number} h alto
 * @returns El tamño del ancho y alto en pixeles basado en la relacion de
aspecto pasada por parametro y el tamaño de la pantalla
 */
function sizeScaled(w, h) {
    const ratio = w / h;
    const width = window.innerWidth - window.innerWidth * .05;
    const height = window.innerHeight - window.innerHeight * .05;

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
    let timeNowFormat = timeNow.toLocaleTimeString('default', {
        hour: '2-digit',
        minute: '2-digit',
    });

    let timeRestant = minutesDif(endTime, timeNowFormat);
    let signatureTotal = minutesDif(endTime, startTime);

    console.log(timeRestant + "\n" + signatureTotal + "\n" + 
    "Porcentaje: " + ((signatureTotal - timeRestant) * 100) / signatureTotal + "%");
    return ((signatureTotal - timeRestant) * 100) / signatureTotal;
}

function minutesDif(start, end) {
    let s = start.split(":");
    let e = end.split(":");

    return ((parseInt(s[0]) * 60) + parseInt(s[1]))
        - ((parseInt(e[0]) * 60) + parseInt(e[1]));
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