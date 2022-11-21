// ID
// Nombre de asignatura
// Fecha-Hora inicio
// Fecha-Hora final
// -> duracion/tiempo restante

function create(id, name, initDate, endDate) {
  var item = new Object();
  item.id = id;
  item.name = name;
  item.initDate = initDate;
  item.endDate = endDate;

  item.duration = function () {
    timeNow = new Date();
    //Recoge la hora actual del sistema en formato hh:mm
    let timeNowFormat = timeNow.toLocaleTimeString("default", {
      hour: "2-digit",
      minute: "2-digit",
    });

    let timeRestant = minutesDif(endTime, timeNowFormat);
    let signatureTotal = minutesDif(endTime, startTime);

    console.log(
      timeRestant +
        "\n" +
        signatureTotal +
        "\n" +
        "Porcentaje: " +
        ((signatureTotal - timeRestant) * 100) / signatureTotal +
        "%"
    );
    return ((signatureTotal - timeRestant) * 100) / signatureTotal;
  };
  
  return item;
}
