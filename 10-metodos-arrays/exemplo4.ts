// includes -> retorna um booleano se o elemento existir na lista

const arrayPessoas = ['Guido', 'João', 'Maria'];

console.log(arrayPessoas.includes('João'));


const arrayPessoas2 = [
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

// O includes não consegue retornar um booleano pois é executado como um novo objeto
console.log(arrayPessoas2.includes({
    nome: 'Guido', 
    email: 'guido@email.com'
}))