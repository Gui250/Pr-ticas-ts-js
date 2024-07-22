const indentificador: number | string | '123' = '123'; 

console.log(indentificador);


type TPessoa = { 
    nome: string, 
    email: string
}

type TPessoa2 = { 
    nome: string, 
    email: string,
    // Propriedades opcionais 
    idade?: number
}

const usuarios: TPessoa[] | TPessoa2[] = [];

usuarios[usuarios.length] = { 
    nome: 'Guido', 
    email: 'guido@email.com',
    idade: 34
}

console.log(usuarios);

