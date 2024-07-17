// rest -> resto ou sobra
const pessoas = ['Guido', 'Pedro', 'Ana'];

const [ item1, ...resto ] = pessoas
console.log(item1);

const usuario = { 
    nome: 'Guido', 
    email: 'guido@email.com',
    idade: 34
}


const {idade, ...novoObjeto} = usuario
console.log(idade);
console.log(novoObjeto);

// Trazendo apenas Pedro e Ana
console.log(resto);
// spread -> espalhamento
