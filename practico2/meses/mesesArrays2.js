const readlineSync = require('readline-sync');
const mes = parseInt(readlineSync.question('Ingrese un mes (1-12): '));

const meses = [
               ["Enero", 31], ["Febrero", 28], ["Marzo", 31],
               ["Abril", 30], ["Mayo", 31], ["Junio", 30],
               ["Julio", 31], ["Agosto", 31], ["Septiembre", 30],
               ["Octubre", 31], ["Noviembre", 30], ["Diciembre", 31]
              ];

let mesNombre = meses[mes-1][0];
let mesDias = meses[mes-1][1];

console.log('La cantidad de dias del mes de %s es %i', mesNombre, mesDias);