
type TUsuario = { 
    nome: string, 
    email: string, 
    idade: number
}


const usuarios: TUsuario[] = []; 

function cadastrarUsuario(usuario: TUsuario) { 
    const novoUsuario = { 
        nome: usuario.nome, 
        email: usuario.email,
        idade: usuario.idade
    }
    usuarios[usuarios.length] = novoUsuario;

    return novoUsuario; 
}

const resultado = cadastrarUsuario({
    nome: 'João', 
    email: 'joao@email.com',
    idade: 33
})

console.log(resultado);