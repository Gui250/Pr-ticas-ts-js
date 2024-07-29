
const paises = ['Brasil', 'Alemanha', 'França', 'Argentina', 'Japão'];

// Adicionando pais no fim da lista
paises.push('China');

// Imprimindo a lista na tela 
console.log(paises); 


// Adicionando um pais no inicio da lista
paises.unshift('Estados Unidos');

console.log(paises);


// Removendo um pais do inicio da lista
paises.shift(); 

console.log(paises);

// Imprimindo o ultim o pais na tela
paises.pop();
console.log(paises);

// Imprimindo o segundo pais da lista na tela 
console.log(paises[1]);

// Imprimindo o pais do indice 2 
console.log(paises[2]);