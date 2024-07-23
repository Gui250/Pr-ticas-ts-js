// let nome: string & number; 
// nome = 123123;

type TUsuario = {
    nome: string, 
    email: string, 
    idade: number
};

type TEndereco = {
    rua: string, 
    numero: number, 
    cidade: string
}

type TUsuarioEndereco = TUsuario & TEndereco;

const usuarios: TUsuarioEndereco[] = [
    {
        nome: 'Guido',
        email: 'guido@email.com',
        idade: 33, 
        rua: 'Rua A',
        numero: 310, 
        cidade: 'Rio de Janeiro'
    }
]