const version = "v0.1-alpha pre-release";
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

//Palette by Kalaitos
const colors = [
  "#000", //Fondo General
  "transparent", //Fondo Canvas
  "#6F7471", //Fondo Barra Progreso
  "#46C2CB", //Barra de progreso
  "#6D67E4", //Asig. Anterior
  "#453C67", //Asig. Actual
  "#6D67E4", //Asig. Siguiente
  "#F2F7A1", //Texto asig. Anterior
  "#F2F7A1", //Texto asig. Actual
  "#F2F7A1", //Texto asig. Siguiente
  "#F2F7A1", //Texto version
  "#00f", //Fondo boton
];

let asignaturaActual = "Casa";
let asignaturaSiguiente = "";
let asignaturaAnterior = "";

let endTime = "";
let startTime = "";
