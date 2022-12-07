//Palette by Kalaitos
const colors = [
    "#000", //Fondo General                         0
    "transparent", //Fondo Canvas                   1
    "#6F7471", //Fondo Barra Progreso               2
    "#46C2CB", //Barra de progreso                  3
    "#6D67E4", //Asig. Anterior                     4
    "#453C67", //Asig. Actual                       5
    "#6D67E4", //Asig. Siguiente                    6
    "#F2F7A1", //Texto asig. Anterior               7
    "#F2F7A1", //Texto asig. Actual                 8
    "#F2F7A1", //Texto asig. Siguiente              9
    "#F2F7A1", //Texto version                      10
    "white", //Fondo boton a horario completo       11

    //Horario completo
    "white", //Fondo General                        12
    "black", //Boton volver                         13
    "black", //Borde celdas                         14
];

document.getElementById("body").style.backgroundColor = colors[0];
document.getElementById("button").style.backgroundColor = colors[11];
document.getElementById("scheduleBody").style.backgroundColor = colors[12];
document.getElementById("return").style.backgroundColor = colors[13];