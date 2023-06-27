function hola(nombre){
  console.log("Hola %s", nombre);
}

function suma(a, b){
  return (a+b);
}

let s2 = "Hola";
function print(s){
  let s3 = "!";
  console.log(s2 + " " + s + s3);
  function print2(){
    let s4 = "?";
    console.log("funcion 2 %s %s %s %s", s, s2, s3, s4);
  }
  print2();
  console.log("%s",s4);
}

const cfuncion = function (){
  console.log("Soy cfuncion");
}

const mult = (a,b) => {
  return (a*b);
}

const printNumMasDos = a => {
  let b = a + 2;
  console.log(b);
}

const printNum = a => console.log(a);


// a.forEach((e,i,a) => a[i] = a[i] + 1);

// a.forEach(elem => console.log(elem));

let a = [1,2,3,4,5,6];

function modificarArreglo(arreglo){
  arreglo[0] = 'String';
}
modificarArreglo(a);
console.log(a);