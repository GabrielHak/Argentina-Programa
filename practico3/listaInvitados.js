let personas = ["Jose", "Maria", "Juan", "Andres",
               "Lionel", "Sofia", "Leandro", "Emilia"];

let rechazados = [];
let admitidos = [];

for(let i = 0; i < personas.length; i++){
  if(personas[i] === "Jose" || personas[i] === "Sofia"){
    rechazados.push(personas[i]);
  }
  else{
    admitidos.push(personas[i]);
  }
}

// console.log("La lista de invitados admitidos es:");
// admitidos.forEach(a => console.log(a));

// console.log("\nLa lista de invitados rechazados es:");
// rechazados.forEach(a => console.log(a));

let rechazadosOrdenados = rechazados.sort();
let admitidosOrdenados = admitidos.slice();
admitidosOrdenados.sort();

console.log("\nLa lista ordenada de invitados admitidos es:");
admitidosOrdenados.forEach(a => console.log(a));
console.log("\n ----------------------------");
admitidos.forEach(a => console.log(a));


admitidos.pop();
console.log(admitidos);
console.log(admitidosOrdenados);


// console.log("\nLa lista ordenada de invitados rechazados es:");
// rechazadosOrdenados.forEach(a => console.log(a));
// console.log("\n ----------------------------");
// rechazados.forEach(a => console.log(a));


/**
 * 
 *  a = [                  ]  <------- A
 *  b = a.slice()  <------- B
 *  c = a.sort() <------- A
 * 
 * 
 * 
 * 
 * 
 * 
 */