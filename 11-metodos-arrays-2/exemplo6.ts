// findIndex -> busca um elemento em um array e retorna o indice do elemento, caso exista. 
// ou -1 caso não encontre.

const pessoas = [ 
    { 
        nome: 'Guido', 
        idade: 33
    }, 
    { 
        nome: 'João',
        idade: 20
    }, 
    {
        nome: 'Ana',
        idade: 17
    }
]

const pessoaEncontrada = pessoas.findIndex((pessoa) => { 
    return pessoa.nome === 'João'; 
})

console.log(pessoaEncontrada);
