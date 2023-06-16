const readlineSync = require('readline-sync');
let numero = Number(readlineSync.question('Ingrese un numero entero: '));

if(!Number.isInteger(numero)){
  console.log('Numero incorrecto');
}
else {
  switch (numero){
    case 1:
      console.log('Hoy es lunes');
      break;
    case 2:
      console.log('Hoy es martes');
      break;
    case 3:
      console.log('Hoy es miercoles');
      break;
    case 4:
      console.log('Hoy es jueves');
      break;
    case 5:
      console.log('Hoy es viernes');
      break;
    case 6:
      console.log('Hoy es sabado');
      break;
    case 7:
      console.log('Hoy es domingo');
      break;
  }
}