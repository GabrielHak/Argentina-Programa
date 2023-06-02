function suma(acumulador, valor_actual) {
  return acumulador + valor_actual;
}

let valor_inicial = 0;
let numeros = [1,2,3,4,5];
let resultado = numeros.reduce(suma, valor_inicial);
console.log(resultado);

// squiven@gmail.com