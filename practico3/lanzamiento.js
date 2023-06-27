for(let i = 10; i > -1; i--){
  if(i === 10){
    console.log("Cuenta regresiva %i", i);
  }
  else if(i === 0){
    console.log("Lanzamiento!");
  }else{
    console.log("%i", i);
  }
}

let i = 10;
while(i >= 0){
  if(i === 10){
    console.log("Cuenta regresiva %i", i);
  }
  else if(i === 0){
    console.log("Lanzamiento!");
  }else{
    console.log("%i", i);
  }
  i--;
}

let j = 10;
do{
  if(j === 10){
    console.log("Cuenta regresiva %i", j);
  }
  else if(j === 0){
    console.log("Lanzamiento!");
  }else{
    console.log("%i", j);
  }
  j--;
}while(j > -1);

