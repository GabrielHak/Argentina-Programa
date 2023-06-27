const readlineSync = require('readline-sync');
let edad_s = readlineSync.question("Ingrese su edad: ");
let edad_e = Number(edad_s);
console.log("La edad es: " + edad_e);
console.log("El tipo de la variable edad es:" + typeof(edad_e));

if(Number.isInteger(edad_e)){
  console.log("Es un entero");
}
else{
  console.log("Es un decimal");
}

parseInt("23"); // 23
parseInt("23.345345"); // 23
Number("26"); //26
Number("26.345345"); // 26.345345

let personas = ["A", "B", "C", "D", "E", "F"];
for(let i = 0; i < personas.length; i++){
  personas[i] = "Z";
}
for(let i = 0; i < personas.length; i++){
  console.log(personas[i]);
}
