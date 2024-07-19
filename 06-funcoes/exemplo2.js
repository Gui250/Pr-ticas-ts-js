const usuarios = []; 

usuarios[usuarios.length] = {
    nome: 'Guido',
    email: 'guido@email.com', 
    idade: 33
};

function cadastrarUsuario(nome, email, idade) { 
    usuarios[usuarios.length] = {
        nome: nome,
        email: email, 
        idade: idade
    };
}

console.log(cadastrarUsuario('Guido', 'guido@email.com', 33));