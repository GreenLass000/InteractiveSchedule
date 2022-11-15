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

const colors = [
  "#000", //Fondo General
  "#000", //Fondo Canvas
  "#aaa", //Fondo Barra Progreso
  "#0f0", //Barra de progreso
  "#f00", //Asig. Anterior
  "#fa0", //Asig. Actual
  "#f00", //Asig. Siguiente
  "#fa0", //Texto asig. Anterior
  "#f00", //Texto asig. Actual
  "#fa0", //Texto asig. Siguiente
  "#f00", //Texto version
];

let asignaturaActual = "Casa";
let asignaturaSiguiente = "";
let asignaturaAnterior = "";

let endTime = "";
let startTime = "";
