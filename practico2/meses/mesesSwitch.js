const readlineSync = require('readline-sync');
const mes = parseInt(readlineSync.question('Ingrese un mes (1-12): '));

let mesNombre = '';
let mesDias = '';

switch (mes) {
  case 1:
    mesNombre = 'Enero';
    mesDias = 31;
    break;

  case 2:
    mesNombre = 'Febrero';
    mesDias = 28;
    break;

  case 3:
    mesNombre = 'Marzo';
    mesDias = 31;
    break;
    
  case 4:
    mesNombre = 'Abril';
    mesDias = 30;
    break;

  case 5:
    mesNombre = 'Mayo';
    mesDias = 31;
    break;

  case 6:
    mesNombre = 'Junio';
    mesDias = 30;
    break;

  case 7:
    mesNombre = 'Julio';
    mesDias = 31;
    break;

  case 8:
    mesNombre = 'Agosto';
    mesDias = 31;
    break;

  case 9:
    mesNombre = 'Septiembre';
    mesDias = 30;
    break;

  case 10:
    mesNombre = 'Octubre';
    mesDias = 31;
    break;

  case 11:
    mesNombre = 'Noviembre';
    mesDias = 30;
    break;

  case 12:
    mesNombre = 'Diciembre';
    mesDias = 31;
    break;
}

console.log('La cantidad de dias del mes de %s es %i', mesNombre, mesDias);
