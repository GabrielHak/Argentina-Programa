const readlineSync = require('readline-sync');
const mes = parseInt(readlineSync.question('Ingrese un mes (1-12): '));

const meses = [
  {
    nombre: "Enero",
    dias: 31
  },
  {
    nombre: "Febrero",
    dias: 28
  },
  {
    nombre: "Marzo",
    dias: 31
  },
  {
    nombre: "Abril",
    dias: 30
  },
  {
    nombre: "Mayo",
    dias: 31
  },
  {
    nombre: "Junio",
    dias: 30
  },
  {
    nombre: "Julio",
    dias: 31
  },
  {
    nombre: "Agosto",
    dias: 31
  },
  {
    nombre: "Septiembre",
    dias: 30
  },
  {
    nombre: "Octubre",
    dias: 31
  },
  {
    nombre: "Noviembre",
    dias: 30
  },
  {
    nombre: "Diciembre", 
    dias: 31
  }
 ];

let mesNombre = meses[mes -1].nombre;
let mesDias = meses[mes -1].dias;

console.log('La cantidad de dias del mes de %s es %i', mesNombre, mesDias);
