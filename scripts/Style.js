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
  "black", //Fondo General                        12
  "black", //Boton volver                         13
  "black", //Borde celdas                         14
];

// document.getElementById("button").style.backgroundColor = colors[11];
// document.getElementById("return").style.backgroundColor = colors[13];

/**
 *
 * @param {Integer} index indice de colors
 * @param {String} hex color en hexadecimal
 * @returns el color que va a aparacer
 */
function getColor(index) {
  return colors[index];
}

root.style.setProperty("--index-bg-color", getColor(0));
root.style.setProperty("--schedule-bg-color", getColor(12));
