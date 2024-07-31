// Every -> testa se todos os elementos do array passam pelo teste implementado e retorna verdadeiro ou falso 

const numeros = [23, 3, 6, 87, 12, 15];

const resultado = numeros.every((elemento) => {
    return elemento < 100
}); 


console.log(resultado);

let teste = false; 

function every(item: number) { 
    return item < 100; 
}

for(const item of numeros) { 
    const resposta = every(item);

    if(!resposta) { 
        continue; 
    } else { 
        teste = true; 
    } 
}

console.log(teste); 