/**
 * 1. Crear un arreglo llamado "nombres" que va a ser una lista de nombres
 *     de personas invitadas a una fiesta y agregar los siguientes nombres:
 *     Carla - Pedro - Daiana - Ivan - Valeria - Ivette - Mario - Vanesa
 * 
 * 2. Imprimir solo los nombres que terminen con la letra "a"
 * 
 * 3. Crear un arreglo llamado "apellidos" que va a contener los apellidos de las
 *     personas de la lista anterior, asignarle los siguientes valores
 *     Gomez - Gonzales - Hernandez - Suarez - Gutierrez - Gimenez - Gomez - Mendez
 * 
 * 4. Imprimir todos las personas (nombre y apellido) cuyo nombre termine en "a"
 *     y cuyo apellido empiece con "G"
 * 
 * 5. Crear un arreglo llamado "estadoInvitacion" que almacenara en formato
 *     booleano (true o false) el estado de la invitacion de cada persona
 *     invitada y asignarle los siguientes valroes:
 *     true - false - true - true - true - false - true - false
 * 
 * 6. Imprimir todas las personas invitadas (inicial del nombre y apellido) que
 *    tienen la invitacion validada
 * 
 * 7. Imprimir todas las personas (inicial del nombre, apellido y estado de la
 *    invitacion) que cumplan con las condiciones del ejercicio 2, 4 y 6.
 * 
 * (Todos los ejercicios que imprimen datos de las personas lo tiene que hacer
 * en una linea por persona)
 * 
 * Extras: (Arrrays y bucles anidados)
 *  crear un array que contenga los tres arrays declarados y asignados
 *  anteriormente
 * 
 * 1. ¿Cuantas posiciones tiene el nuevo array?
 * 2. Repetir los ejercicios anteriores para este nuevo formato de arreglo
 */

// let nombres = ["Carla", "Pedro", "Daiana", "Ivan", "Valeria", "Ivette", "Mario", "Vanesa"];

// for(let i = 0; i < nombres.length; i++){
//   let nombre = nombres[i];
//   if(nombre.endsWith("a")){
//     console.log(nombre);
//   }
// }

// let apellidos = ["Gomez", "Gonzales", "Hernandez", "Suarez", "Gutierrez", "Gimenez", "Gomez", "Mendez"];

// for(let i = 0; i < apellidos.length; i++){
//   let apellido = apellidos[i];
//   let nombre = nombres[i];

//   if(apellido.startsWith("G") && nombre.endsWith("a")){
//     console.log("%s %s", nombre,apellido);
//   }
// }

// let estadoInvitacion = [true, false, true, true, true, false, true, false];

// for(let i = 0; i < estadoInvitacion.length; i++){
//   if(estadoInvitacion[i]){
//     let apellido = apellidos[i];
//     let nombre = nombres[i];
//     console.log("%s %s", nombre.slice(0,1), apellido);
//   }
// }

// for(let i = 0; i < estadoInvitacion.length; i++){
//   let apellido = apellidos[i];
//   let nombre = nombres[i];
//   let estado = estadoInvitacion[i];
//   if(estadoInvitacion[i] && apellido.startsWith("G") && nombre.endsWith("a")){
//     console.log("%s %s %s", nombre.slice(0,1), apellido, estado);
//   }
// }

let personas = [
  //  0        1         2        3         4          5       6        7
  ["Carla", "Pedro", "Daiana", "Ivan", "Valeria", "Ivette", "Mario", "Vanesa"],
  ["Gomez", "Gonzales", "Hernandez", "Suarez", "Gutierrez", "Gimenez", "Gomez", "Mendez"]
];

let i_nombres = [];
let i_apellidos = [];
let i_invitacion = [];

for(let i = 0; i < personas.length; i++){
  for(let j = 0; j < personas[i].length; j++){
    let control = personas[i][j];
    switch(i){
      case 0:
        if(control.endsWith("a")){
          i_nombres.push(j);
        }
        break;
      case 1:
        if(control.startsWith("G") && i_nombres.indexOf(j) > -1){
          i_apellidos.push(j);
        }
        break;
    }
  }
}

for(let i=0; i<i_apellidos.length; i++){
  let nombres = personas[0];
  let nombre = nombres[i_apellidos[i]];
  console.log(nombre);
}

// let personass = [
//   {
//     nombre: "Carla",
//     apellido: "Gomez",
//     invitacion: true
//   },
//   {
//     nombre: "Pedro",
//     apellido: "Gonzalez",
//     invitacion: false
//   }
// ];

// personass[i].nombre;
// personass[i].apellido;