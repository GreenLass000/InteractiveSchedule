setInterval(start, 1 / fps * 1000);
function start() {
    //--------------console.log(horario--------------
    //Comprueba si una console.log(hora con formato hh:mm esta en un rango de console.log(horas
    const isBetween = function (time, horaAsignatura) {
        let asigInicio = asignaturaInicio[horaAsignatura];
        let asigFin = asignaturaFin[horaAsignatura];

        if (time < '00:00' || time > '23:59' || time.substring(3) > '59')
            throw new Error("hora no válida");
        return time >= start && time <= end;
    }

    // let timeNow = new Date('November 15, 2022 12:00:00');
    // let timeNowFormat = "11:00";

    timeNow = new Date();
    //Recoge la hora actual del sistema en formato hh:mm
    let timeNowFormat = timeNow.toLocaleTimeString('default', {
        hour: '2-digit',
        minute: '2-digit',
    });

    //Selector de asignatura actual y siguiente
    if (timeNow.getDay() == 0) {
        asignaturaSiguiente = horario[1][0];
    } else if (timeNow.getDay() != 6) {
        if (isBetween(timeNowFormat, 0)) {
            asigarAsignatura(0, asignaturaInicio[0], asignaturaFin[0]);
        }
        else if (isBetween(timeNowFormat, 1)) {
            asigarAsignatura(1, asignaturaInicio[1], asignaturaFin[1]);
        }
        else if (isBetween(timeNowFormat, 2)) {
            asigarAsignatura(2, asignaturaInicio[2], asignaturaFin[2]);
        }
        else if (isBetween(timeNowFormat, 3)) {
            asigarAsignatura(3, asignaturaInicio[3], asignaturaFin[3]);
        }
        else if (isBetween(timeNowFormat, 4)) {
            asigarAsignatura(4, asignaturaInicio[4], asignaturaFin[4]);
        }
        else if (isBetween(timeNowFormat, 5)) {
            asigarAsignatura(5, asignaturaInicio[5], asignaturaFin[5]);
        }
        else if (isBetween(timeNowFormat, 6)) {
            asigarAsignatura(6, asignaturaInicio[6], asignaturaFin[6]);
        }
        else {
            asignaturaActual = "Casa";
            asignaturaSiguiente = (timeNowFormat > "14:00")
                ? horario[timeNow.getDay() + 1][0]
                : horario[timeNow.getDay()][0];

            asignaturaAnterior = (timeNowFormat > "14:00")
                ? horario[timeNow.getDay()][6]
                : horario[timeNow.getDay() - 1][6];
        }
    }
}



//Extrae la asignatura del horario partir de la hora
/**
 * Extrae la asignatura del horario a partir de una posicion y el dia de la semana
 * @param {Number} value Posicion desde donde se extraerá la asignatura
 */
function asigarAsignatura(value, start, end) {
    asignaturaActual = horario[timeNow.getDay()][value];
    asignaturaSiguiente = value == 6
        ? "Casa"
        : horario[timeNow.getDay()][value + 1];

    asignaturaAnterior = value == 0
        ? "Casa"
        : horario[timeNow.getDay()][value - 1];

    startTime = start;
    endTime = end;
}