let t = true; // 1 
let f = false; // 0
let a = [1,2,3];

let condicion1 = a.length === 3;
let condicion2 = a[0] === 1;

// console.log(condicion1);
// console.log(condicion2);

// Operadores logicos && (and Y) || (or o)

/**
 * TV &&
 * true && true = true
 */

let i = 0;
i = i + 1;

if(!condicion1  && condicion2 ) {
  console.log("Se cumplen las dos condiciones");
}
else {
  console.log("NO se cumplen las dos condiciones");
}
console.log(condicion1);