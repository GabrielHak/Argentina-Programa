let temp_meses = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];
                // 0   1   2   3   4    5   6   7   8   9   10  11

let far = 0;

for(let contador = 0; contador < 12; contador = contador + 1){
    far = far + temp_meses[contador];
}

far = far/12;

let celsius = (far - 32) * 5/9;
console.log(celsius);