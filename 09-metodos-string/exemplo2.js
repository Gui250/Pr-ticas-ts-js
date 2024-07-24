// Trim => remove todos os espaços do inicio e do fim de uma string
// trimStart => Remove todos os espaços do inicio de uma string
// trimEnd => remove todos os espaços do fim de uma string

const texto = '   Alguma coisa    '; 

console.log(texto.length);

const textoSemEspaco = texto.trim(); 

console.log(textoSemEspaco.length); 

const usuario = { 
    email: 'guido@email.com', 
    senha: 'abc123'
}; 


const email = 'guido@email.com     ';
const senha = 'abc123'; 

// console.log(usuario.email === email.trimStart());
console.log(usuario.email === email.trimEnd());
console.log(texto.length); 