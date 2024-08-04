// Reduce -> Executa uma função callback, passada como argumento, para cada elemento do array, que resultado apenas um valor do retorno
// A função passada como argumento para o método reduce tem 4 parâmetros

const array = [0, 1, 2, 3, 4];

array.reduce((acumulador, valorAtual, indice, array) => { 
    return acumulador + valorAtual; 
})

console.log(array);