// join -> junta todos os elementos de um array e retorna uma string





function inverter(palavra: string) { 
    const arrayPalavra = palavra.split('');
    let resultado = arrayPalavra.reverse().join('');

    console.log(resultado);
}

inverter('Cubos Academy');

const arrayNumeros = [1,4,98,5,7]; 

console.log(arrayNumeros.join('/'));