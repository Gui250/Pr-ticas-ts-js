// Utilitario<Tipo> -> resulta em um novo tipo manipulado 
// Required<tipo> 



type Pessoa = { 
    nome: string, 
    email: string, 
    idade?: number
}





const usuarios: Pessoa[] = []

type PessoaObrigatoria = Required<Pessoa>; 

function cadastrarPessoa(pessoa: PessoaObrigatoria) { 
    // Cadastra uma pessoa
}


function atualizarPessoa(pessoa: Pessoa) { 
    // atualiza um usuario 
}

cadastrarPessoa({
    nome: 'Guido', 
    idade: 33, 
    email: 'guido@email.com'
})

atualizarPessoa({
    nome: 'Guido',
    idade: 33,
    email: 'guido@email.com'
})

usuarios[usuarios.length] = {
    nome: 'Guido', 
    idade: 33, 
    email: 'guido@email.com'
}