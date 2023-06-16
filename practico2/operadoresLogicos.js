const readlineSync = require('readline-sync');
let numero = Number(readlineSync.question('Ingrese un numero entero: '));

if(!Number.isInteger(numero)){
  console.log('Numero incorrecto');
}
else {
  if(numero > 0 && numero % 2 === 0){
    console.log('El numero es positivo y par');
  }
  else if(numero > 0 && numero % 2 !== 0){
    console.log('El numero es positivo e impar');
  }
  else if(numero < 0){
    console.log('El numero es negativo');
  }
  else{
    console.log('El numero es cero');
  }
}