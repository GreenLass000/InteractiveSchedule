const version = "v1.2";

const ratio = 16 / 9;

const fps = 30;

const DI = "Interfaces";
const SGE = "Sistemas de Gestión Empresarial";
const AD = "Acceso a Datos";
const PMDM = "Moviles";
const EIE = "Empresa";
const PSP = "Procesos";
const REC = "Recreo";

let timeNow;

const horario = [
    [],
    [DI, DI, SGE, REC, SGE, AD, AD],
    [PMDM, PMDM, EIE, REC, EIE, SGE, SGE],
    [PSP, PSP, AD, REC, AD, DI, DI],
    [DI, DI, PMDM, REC, PMDM, AD, AD],
    [PSP, EIE, SGE, REC, SGE, PMDM, PMDM],
    []
];

// [ FondoGeneral, Cuadro1, Cuadro2, Texto1, Texto2, BarraCarga]
const color = ["#000", "#46A2E8", "#46A2E8", "#FF6666", "#FF6666"];
let asignaturaActual = "Casa";
let asignaturaSiguiente = "";