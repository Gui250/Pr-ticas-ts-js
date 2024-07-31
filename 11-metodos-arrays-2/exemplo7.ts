// filter -> filtra e retorna um novo array com todos os elementos encontrados

const nomes = ['Guido', 'Ana', 'Antonio', 'Rodrigo'];

const novoArray = nomes.filter((nome) => { 
    return nome.length < 7;
})

console.log(novoArray);




type TPessoa = { 
    nome: string, 
    idade: number
}

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

const maiorIdade = pessoas.filter((pessoa: TPessoa) => { 
    return pessoa.idade > 17;
})

console.log(maiorIdade);