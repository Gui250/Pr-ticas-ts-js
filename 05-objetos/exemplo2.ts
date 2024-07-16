
const usuarios = [
    {
        nome: 'Guido',
        email: 'guido@email.com'
    },
    {
        nome: 'João',
        email: 'joao@email.com'
    },
    {
        nome: 'Maria',
        email: 'maria@email.com'
    }
]

for(let usuario of usuarios) {
    console.log(`Nome: ${usuario.nome}, Email: ${usuario.email}`);
}
