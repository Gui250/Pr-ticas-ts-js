const pessoa = { 
    nome: 'Boby',
    idade: 22,
    profissao: 'Programador',
    altura: 1.80
}

function cadastrar(usuario) { 
    console.log(`Olá! Meu nome é ${usuario.nome}, sou um jovem de ${usuario.idade} anos, ${usuario.altura}m de altura e sou ${usuario.profissao}`);
}   

cadastrar(pessoa);