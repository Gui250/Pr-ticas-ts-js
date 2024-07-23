// Pick<Tipo, propriedades> 
// Omit <Tipo, propriedades> 

type Carro = { 
    marca: string, 
    modelo: string, 
    ano: number, 
    portas: number
};

// Adiciona as propriedades em um novo tipo
type NovoCarro = Pick<Carro, 'marca' | 'modelo' |'ano'>;

// Remove as propriedades em um novo tipo 
type NovoCarroOmit = Omit<Carro, 'portas'>; 

type Usuario = { 
    nome: string, 
    email: string, 
    senha: string
};

type UsuarioSemSenha = Pick<Usuario, 'nome' | 'email'>