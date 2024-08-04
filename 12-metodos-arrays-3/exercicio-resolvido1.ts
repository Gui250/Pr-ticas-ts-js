
const usuarios = [
    {nome: 'João', idade: 23}, 
    {nome: 'Maria', idade: 18}, 
    {nome: 'Ana', idade: 30}, 
    {nome: 'rodrigo', idade: 17}, 
    {nome: 'Rodrigo', idade: 18}
]; 

// Ordem Crescente
usuarios.sort((a, b) => { 
    return a.idade - b.idade; 
})
console.log(usuarios); 

// Ordem Decrescente
usuarios.sort((a, b) => { 
    return b.idade - a.idade; 
})

console.log(usuarios);''