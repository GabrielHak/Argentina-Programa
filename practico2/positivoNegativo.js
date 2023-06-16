const readlineSync = require('readline-sync');
const num = parseInt(readlineSync.question('Ingrese un numero: '));

let res = '';
if(num > 0){
  res = 'positivo';
}
else if(num < 0){
 res = 'negativo';
}
else {
  res = 'cero';
}
console.log('El numero es %s', res);