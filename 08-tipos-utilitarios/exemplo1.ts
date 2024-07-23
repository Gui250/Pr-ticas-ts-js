// Utilitario<Tipo> -> resulta em um novo tipo manipulado 
// Partial<tipo> 



type Pessoa = { 
    nome: string, 
    email: string, 
    idade: number
}

type PessoaOpcional = Partial<Pessoa>;



const usuarios: Pessoa[] = []

function atualizarPessoa(pessoa: PessoaOpcional) { 

}
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