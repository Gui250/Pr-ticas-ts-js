
const usuario = { 
    nome: 'Guido Cerqueira', 
    altura: 1.87,
    idade: 33,
    temCNH: 'CNH',
    habilidades: ['JavaScript', 'PHP', 'Python', 'Java']
};


console.log(`${usuario.nome} tem ${usuario.idade} anos, ${usuario.altura}m de altura, possui ${usuario.temCNH} e as seguintes habilidades: ${usuario.habilidades[0]}, ${usuario.habilidades[1]}, ${usuario.habilidades[2]}, ${usuario.habilidades[3]}`)