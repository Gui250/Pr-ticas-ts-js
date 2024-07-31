// map -> percorrer todos elementos de um array e retornar um novo array com o formato implementado

const pessoas = [ 
    { 
        nome: 'Guido', 
        sobrenome: 'Matos',
        idade: 33
    }, 
    { 
        nome: 'João',
        sobrenome: 'Cerqueira',
        idade: 20
    }, 
    {
        nome: 'Ana',
        sobrenome: 'Viana',
        idade: 17
    }
]

const novoArray = pessoas.map(function(elemento) { 
    return {nomeCompleto:`${elemento.nome} ${elemento.sobrenome}`, idade: elemento.idade}; 
})

console.log(novoArray);


const nomes = ['Guido', 'João', 'Ana'];

const arrayPessoas = nomes.map((nome) => { 
    return {nome}
})

console.log(arrayPessoas);