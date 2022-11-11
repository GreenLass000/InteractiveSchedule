const version = "v0.4";
const ratio = 16 / 9;
const fps = 30;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const DI = "Interfaces";
const SGE = "Gestión Empresarial";
const AD = "Acceso a Datos";
const PMDM = "Móviles";
const EIE = "Empresa";
const PSP = "Procesos";
const REC = "Recreo";

let Asignaturas = new Object();
Asignaturas[DI] = "DI";
Asignaturas[SGE] = "SGE";
Asignaturas[AD] = "AD";
Asignaturas[PMDM] = "PMDM";
Asignaturas[EIE] = "EIE";
Asignaturas[PSP] = "PSP";
Asignaturas[REC] = "REC";

let asignaturaInicio = [
  "08:15",
  "09:05",
  "10:00",
  "10:55",
  "11:20",
  "12:10",
  "13:05",
];
let asignaturaFin = [
  "09:05",
  "10:00",
  "10:55",
  "11:20",
  "12:10",
  "13:05",
  "14:00",
];

let timeNow;

const horario = [
  [],
  [DI, DI, SGE, REC, SGE, AD, AD],
  [PMDM, PMDM, EIE, REC, EIE, SGE, SGE],
  [PSP, PSP, AD, REC, AD, DI, DI],
  [DI, DI, PMDM, REC, PMDM, AD, AD],
  [PSP, EIE, SGE, REC, SGE, PMDM, PMDM],
  [],
];

// [ FondoGeneral, Cuadro1, Cuadro2, Texto1, Texto2, BarraCarga]
const colors = [
  "#000000", //Fondo General
  "#46A2E8", //Fondo Canvas
  "#46A2E8", //Fondo Barra Progreso
  "#FF6666", //Asig. Anterior
  "#FF6666", //Asig. Actual
  "", //Asig. Siguiente
];

document.body.style.backgroundColor = colors[0];

let asignaturaActual = "Casa";
let asignaturaSiguiente = "";
let asignaturaAnterior = "";

let endTime = "";
let startTime = "";
