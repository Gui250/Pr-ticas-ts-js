const paises = ['Brasil', 'Estados Unidos', 'França', 'Bélgica', 'Portugal'];

// Adicionando um pais no fim do array
paises[paises.length] = 'Suécia';

console.log(paises);

paises[paises.length - 2] = 'Austrália';

console.log(paises);

// Imprimindo o ultimo pais na tela 

console.log(paises[paises.length - 1]);
// Imprimindo o segundo pais na tela 
console.log(paises[1]);
console.log(paises[2]);