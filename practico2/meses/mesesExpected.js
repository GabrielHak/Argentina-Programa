const readlineSync = require('readline-sync');

const numeroStr = readlineSync.question('Por favor, ingrese un numero del 1 al 12, representando los meses del año: ');
const numero = parseInt(numeroStr);

const arregloDe31Dias = [1, 3, 5, 7, 8, 10, 12];
const arreglode30Dias = [4, 6, 9, 11];
const meses = {
    1: "enero",
    2: "febrero",
    3: "marzo",
    4: "abril",
    5: "mayo",
    6: "junio",
    7: "julio",
    8: "agosto",
    9: "septiembre",
    10: "octubre",
    11: "nomviembre",
    12: "diciembre",
}

if (arregloDe31Dias.includes(numero)) {
    console.log("La cantidad de dias del mes de %s es 31", meses[numero]);
} else if (arreglode30Dias.includes(numero)) {
    console.log("La cantidad de dias del mes de %s es 30", meses[numero]);
} else if (numero === 2) {
    console.log("La cantidad de dias del mes de %s es 28", meses[numero]);
} else {
    console.log("El numero ingresado es incorrecto");
}