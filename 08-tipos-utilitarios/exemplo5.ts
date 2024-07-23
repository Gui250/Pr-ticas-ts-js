// Record<Chave(s), Tipo>

 
type Pessoa = Record<'nome' | 'email' | 'senha', string>;


type Usuario = { 
    nome: string, 
    email: string, 
    senha: string
}


type duplaDeVolei = Record<'jogador1' | 'jogador2', Usuario>;

const time1: duplaDeVolei =  { 
    jogador1: { 
        nome: 'Guido', 
        email: 'guido@email.com', 
        senha: '123'
    },
    jogador2: { 
        nome: 'João', 
        email: 'joao@email.com', 
        senha: '123'
    }
}