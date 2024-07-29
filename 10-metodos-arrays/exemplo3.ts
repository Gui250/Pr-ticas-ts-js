// indexOf -> retorna o indice do elemento no array 

const arrayPessoas = [
    { 
        nome: 'Guido', 
        email: 'guido@email.com'
    }, 
    { 
        nome: 'João', 
        email: 'joao@email.com'
    }, 
    { 
        nome: 'Maria', 
        email: 'maria@email.com'
    }
]

console.log(arrayPessoas.indexOf({
    nome: 'Guido', 
    email: 'guido@email.com'
}));

