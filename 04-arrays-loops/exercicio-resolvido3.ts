let numeros_aleatorios: number[] = [5,4,2,10,20,7,8,9,40];
let auxiliar = 0;

for(let i = 0; i < numeros_aleatorios.length; i++) { 
    auxiliar += numeros_aleatorios[i];
}

console.log(auxiliar);