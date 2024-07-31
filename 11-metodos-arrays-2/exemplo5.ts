// Find -> busca um elemento em um array e retorna o elemento, caso exista


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

const pessoaEncontrada = pessoas.find((pessoa) => {
    return pessoa.nome === 'João'; 
});

console.log(pessoaEncontrada);


const numeros = [1,23,5,89,56,100];

const resposta = numeros.find((numero) => { 
    return numero === 89;
})

console.log(resposta);

if(resposta) { 
    console.log('Número Encontrado');
} else { 
    console.log('Número não Encontrado');
}