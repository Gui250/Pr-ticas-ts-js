
const usuario = { 
    nome: 'Boby', 
    email: 'teste', 
    idade: 20, 
    temCnh: true,
    habilidades: ['JavaScript', 'PHP', 'Java', 'Python']
};

usuario.nome = 'Guido Cerqueira';

usuario.email = 'guido@email.com';

console.log(`Meu nome é ${usuario.nome} e tenho ${usuario.idade} anos`);
