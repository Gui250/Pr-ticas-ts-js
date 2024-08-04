
const professores = [
    {nome: 'Guido', stack: 'backend'},
    {nome: 'José', stack: 'backend'},
    {nome: 'Ana', stack: 'frontend'},
    {nome: 'Paulo', stack: 'frontend'}, 
    {nome: 'Beatriz', stack: 'backend'},
    {nome: 'Joana', stack: 'frontend'}
];

const profesoresBackEnd = professores.filter((pessoa) => { 
    return pessoa.stack === 'backend';
})

const professoresFrontEnd = professores.filter((pessoa) => { 
    return pessoa.stack == 'frontend'; 
})

console.log(profesoresBackEnd);
console.log(professoresFrontEnd);