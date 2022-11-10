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
 * 
 * @param {String} endTime Hora en formato `HH:mm` a la que acaba la asignatura
 * @returns Cuánto tiempo falta para que termine la clase actual en porcentaje
 */
function timeRest(endTime) {
    return new Date().getSeconds() * 100 / 60;
}

/**
 * Metodo que devuelve la abreviacion del nombre de una 
 * asignatura a partir del nombre completo
 * @param {String} signature Asignatura 
 * @returns Asignatura abreviada
 */
function getShortDay(signature) {
    switch (signature) {
        case "Interfaces":
            return "DI";
        case "Gestión Empresarial":
            return "SGE";
        case "Acceso a Datos":
            return "AD";
        case "Moviles":
            return "PMDM";
        case "Empresa":
            return "EIE";
        case "Procesos":
            return "PSP";
        case "Recreo":
            return "REC";
        default:
    }
}