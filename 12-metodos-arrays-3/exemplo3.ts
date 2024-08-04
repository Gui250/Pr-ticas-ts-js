// localeCompare -> método de comparação de strings

const letra1 = 'a';
const letra2 = 'b';

console.log(letra1.localeCompare(letra2));

const usuarios = ['João', 'Maria', 'Ana', 'Rodrigo', 'rodrigo'];

// Ordenação crescente
usuarios.sort((item1, item2) => { 
   return item1.localeCompare(item2);
}); 


console.log(usuarios);
