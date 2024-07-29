// push -> adiciona um ou mais elementos no array e retorna o tamanho do array atual 
// pop -> remove o ultimo elemento do array e retorna o elemento que foi removido

const arrayNumeros = [12,1,45,76,100];

// Adicionando um elemento na ultima posicao do array
arrayNumeros.push(200);

console.log(arrayNumeros);

const elementoRemovido = arrayNumeros.pop();


console.log(arrayNumeros);
console.log(elementoRemovido);
