const version = "v0.2";
const ratio = 16 / 9;
let fps = 30;

const DI = "Interfaces";
const SGE = "Gestión Empresarial";
const AD = "Acceso a Datos";
const PMDM = "Móviles";
const EIE = "Empresa";
const PSP = "Procesos";
const REC = "Recreo";

const week = ["Hora", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
const horario = [
  [, , , , , ,],
  [DI, DI, SGE, REC, SGE, AD, AD],
  [PMDM, PMDM, EIE, REC, EIE, SGE, SGE],
  [PSP, PSP, AD, REC, AD, DI, DI],
  [DI, DI, PMDM, REC, PMDM, AD, AD],
  [PSP, EIE, SGE, REC, SGE, PMDM, PMDM],
];

let Asignaturas = new Object();
Asignaturas[DI] = "DI";
Asignaturas[SGE] = "SGE";
Asignaturas[AD] = "AD";
Asignaturas[PMDM] = "PMDM";
Asignaturas[EIE] = "EIE";
Asignaturas[PSP] = "PSP";
Asignaturas[REC] = "REC";

let horas = [
  "08:15",
  "09:05",
  "10:00",
  "10:55",
  "11:20",
  "12:10",
  "13:05",
  "14:00",
];

let timeNow;

let asignaturaActual = "Casa";
let asignaturaSiguiente = "";
let asignaturaAnterior = "";

let endTime = "";
let startTime = "";
