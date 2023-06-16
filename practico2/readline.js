const readlineSync = require('readline-sync');
let dato = readlineSync.question('Ingrese un numero: ');
let numero = Number(dato);

if(Number.isInteger(numero)){
  console.log("es un entero %i", numero);
}
else{
  console.log("no es un entero");
}
