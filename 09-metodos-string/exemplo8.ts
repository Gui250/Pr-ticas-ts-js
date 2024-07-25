// padStart -> completar o inicio da string com a correspondencia, de acordo com o tamanho definido 
// padEnd -> completar o fim da string com a correspondencia, de acordo com o tamanho definido 


const texto = 'Guido'; 

console.log(texto); 

// Adicionando espaços em branco no ínicio da string
const textoFormatado = texto.padStart(10, '-');

console.log(textoFormatado);

// Adicionando espaços no fim da string
const textoFormatado2 = texto.padEnd(10, '-');

console.log(textoFormatado2);


const finalCartao = '1234 5678 9899 1234';

const numeroFortado = finalCartao.slice(-4).padStart(12, '*');
console.log(numeroFortado);