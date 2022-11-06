const version = "v1.2";

const DI = "Interfaces";
const SGE = "Sistemas de Gestión Empresarial";
const AD = "Acceso a Datos";
const PMDM = "Moviles";
const EIE = "Empresa";
const PSP = "Procesos";
const REC = "Recreo";

const horario = [
    [],
    [DI, DI, SGE, REC, SGE, AD, AD],
    [PMDM, PMDM, EIE, REC, EIE, SGE, SGE],
    [PSP, PSP, AD, REC, AD, DI, DI],
    [DI, DI, PMDM, REC, PMDM, AD, AD],
    [PSP, EIE, SGE, REC, SGE, PMDM, PMDM],
    []
];

// [ FondoGeneral, Cuadro1, Cuadro2, Texto1, Texto2, BarraFondo, BarraCarga]
const color = ["#EADEDA", "#46A2E8", "#46A2E8", "#FF6666", "#FF6666"];

document.body.style.backgroundColor = color[0];

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

setInterval(start, 1000);
function start() {
    //--------------console.log(horario--------------
    //Comprueba si una console.log(hora con formato hh:mm esta en un rango de console.log(horas
    const isBetween = function (time, start, end) {
        if (time < '00:00' || time > '23:59' || time.substring(3) > '59')
            throw 'console.log(hora no válida';
        return time >= start && time <= end;
    }

    // let timeNow = new Date('November 15, 2022 12:00:00');
    // let timeNowFormat = "11:00";

    let timeNow = new Date();
    //Recoge la hora actual del sistema en formato hh:mm
    let timeNowFormat = timeNow.toLocaleTimeString('default', {
        hour: '2-digit',
        minute: '2-digit',
    });

    let asignaturaActual = "Casa";
    let asignaturaSiguiente = "";

    //Selector de asignatura actual y siguiente
    if (timeNow.getDay() == 0) {
        asignaturaSiguiente = horario[1][0];
    } else if (timeNow.getDay() == 6) {
    } else {
        if (isBetween(timeNowFormat, "08:15", "09:05"))
            asigarAsignatura(0);
        else if (isBetween(timeNowFormat, "09:05", "10:00"))
            asigarAsignatura(1);
        else if (isBetween(timeNowFormat, "10:00", "10:55"))
            asigarAsignatura(2);
        else if (isBetween(timeNowFormat, "10:55", "11:20"))
            asigarAsignatura(3);
        else if (isBetween(timeNowFormat, "11:20", "12:10"))
            asigarAsignatura(4);
        else if (isBetween(timeNowFormat, "12:10", "13:05"))
            asigarAsignatura(5);
        else if (isBetween(timeNowFormat, "13:05", "14:00"))
            asigarAsignatura(6);
        else {
            asignaturaActual = "Casa";
        }
    }
    function asigarAsignatura(value) {
        asignaturaActual = horario[timeNow.getDay()][value];
        asignaturaSiguiente = value == 6 ? "Casa" : horario[timeNow.getDay()][value + 1];
    }

    //--------------Canvas--------------
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    ctx.canvas.width = windowWidth;
    ctx.canvas.height = windowHeight;

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

    //Cuadro asignatura siguiente
    ctx.roundRect(
        windowWidth / 8 * 3,    //x
        windowHeight / 2.3,    //y
        windowWidth / 4,        //width
        windowHeight / 10,      //height
        20
    );
    ctx.fillStyle = color[2];
    ctx.stroke();
    ctx.fill();

    //Asignatura actual
    ctx.font = "bold 30px Arial";
    ctx.fillStyle = color[3];
    ctx.textAlign = "center";
    ctx.fillText(
        asignaturaActual.toUpperCase(),
        windowWidth / 2,
        windowHeight / 4
    );

    //Asignatura siguiente
    ctx.font = "20px Arial";
    ctx.fillStyle = color[4];
    ctx.textAlign = "center";
    ctx.fillText(
        asignaturaSiguiente.toUpperCase(),
        windowWidth / 2,
        windowHeight / 2.01
    );

    //Version text
    ctx.font = "15px Arial";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.fillText(
        version,
        15,
        15
    );

    //Barra de progreso
    ctx.progressBar(
        windowWidth / 8,
        windowHeight / 1.6,
        windowWidth / 4 * 3, windowHeight / 25,
        timeRest("")
    );
}

//Devuelve cuanto tiempo falta para que termine la clase actual en porcentaje
function timeRest(endTime) {
    return new Date().getSeconds() * 100 / 60;
}