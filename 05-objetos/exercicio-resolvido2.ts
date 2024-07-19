type TConsumo = { 
    nome: string,
    preco: number,
    quantidade: number
}

type TCliente = { 
    nome: string,
    idade: number, 
    produtos: TConsumo[]
}

const cliente: TCliente =  { 
    nome: 'Boby',
    idade: 22,
    produtos: [{ 
        nome: 'Biscoito',
        preco: 0.50, 
        quantidade: 5
    },
    {
        nome: 'Pizza de Calabreza',
        preco: 1.00,
        quantidade: 10
    },
    { 
        nome: 'Arroz',
        preco: 0.20, 
        quantidade: 2
    }
]
};

console.log(cliente);


let total = 0; 

for(let produto of cliente.produtos) { 
    total += produto.preco * produto.quantidade;
}

console.log(`Olá ${cliente.nome}, o valor de sua compra foi de ${total}`);