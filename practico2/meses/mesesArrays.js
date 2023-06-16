const readlineSync = require('readline-sync');
const mes = parseInt(readlineSync.question('Ingrese un mes (1-12): '));

const mesesNombres = ["Enero", "Febrero", "Marzo", "Abril",
                      "Mayo", "Junio", "Julio", "Agosto",
                      "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const mesesDias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let mesNombre = mesesNombres[mes-1];
let mesDias = mesesDias[mes-1];

console.log('La cantidad de dias del mes de %s es %i', mesNombre, mesDias);