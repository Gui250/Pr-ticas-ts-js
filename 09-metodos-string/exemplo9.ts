// indexOf -> retorna o indice da correspondencia em uma string
// includes -> retorna verdadeiro ou falso caso encontre ou não a correspondencia em uma string

const texto: string = 'Eu adoro a Cubos Academy e adoro as aulas de lógica';

console.log(texto);


const indiceDaCorrespondencia = texto.indexOf('aulas');

if(indiceDaCorrespondencia != -1) { 
    console.log('Encontrou a palavra');
} else { 
    console.log('não encontrou a palavra');
}

console.log(indiceDaCorrespondencia);


const existeCorrespondencia = texto.includes('aulas');
console.log(existeCorrespondencia);