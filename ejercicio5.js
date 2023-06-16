/**
 * Manejo de arreglos: Deberás crear un programa y guardarlo en el archivo
  frutas.js que cumpla los siguiente requisitos:
  a. Crea un arreglo vacío con el nombre de frutas.
  b. Agrega cinco frutas distintas al arreglo. Puede ser mediante el uso de
  variables o no.
  c. Deberás obtener el última fruta agregada y guardarla en la variable
  ultima. Además deberás imprimir su valor por consola, respetando el
  siguiente formato
  “La ultima fruta agregada fue: [ultima]”
  d. Deberás obtener la primera fruta agregada y guardarla en la variable
  primera. Además deberás imprimir su valor por consola, respetando el
  siguiente formato
  “La primera fruta agregada fue: [primera]”
 */

let frutas = [];

frutas.push("banana","manzana","pera","mandarina","naranja");

let ultima = frutas[frutas.length-1];
let primera = frutas[0];
console.log('La ultima fruta agregada fue: %s', ultima);
console.log('La primera fruta agregada fue: %s', primera);

for(let i = 0; i < frutas.length; i++){
  console.log('frutas[%i]: %s',i,frutas[i]);
}

// while(frutas.length > 0){
//   console.log('frutas: %s',frutas.pop());
// }

// let i = 0;
// do{
//   console.log('frutas[%i]: %s',i,frutas[i]);
//   i++;
// }while(i < frutas.length);