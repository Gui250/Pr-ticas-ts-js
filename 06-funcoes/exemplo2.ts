const usuarios = []; 

usuarios[usuarios.length] = {
    nome: 'Guido',
    email: 'guido@email.com', 
    idade: 33
};

// function cadastrarUsuario(nome, email, idade) { 
  //  usuarios[usuarios.length] = {
    //    nome: nome,
     //   email: email, 
    //    idade: idade
  //  };
//}

function cadastrarUsuario(usuario) { 
    usuarios[usuarios.length] = { 
        nome: usuario.nome,
        email: usuario.email,
        idade: usuario.idade
    }
}

cadastrarUsuario({
    nome: 'Guido',
    email: 'guido@email.com',
    idade: 33
})

console.log(usuarios);