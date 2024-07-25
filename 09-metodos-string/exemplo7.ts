// replace -> substitui uma string por outra 
// ReplaceAll -> substitui todas correspondencias de uma string por outra 

const texto: string = 'Eu adoro a Cubos Academy e adoro as aulas de lógica';

console.log(texto);

// Substituindo a palavra adoro por amo 
const textoSubstituido = texto.replace('adoro', 'amo');
const textoSubstituido2 = texto.replaceAll('adoro', 'amo');


console.log(textoSubstituido);
console.log(textoSubstituido2);