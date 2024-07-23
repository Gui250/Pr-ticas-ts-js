// Readonly<Tipo> 

type Pessoa = { 
    nome: string, 
    email: string, 
    idade: number
}

const usuarios: Readonly<Pessoa>[] = []; 


usuarios[usuarios.length] = { 
    nome: 'Guido', 
    idade: 33, 
    email: 'guido@email.com'
}


const usuario: Readonly<Pessoa> = { 
    nome: 'Guido', 
    idade: 33, 
    email: 'guido@email.com'
}




console.log(usuario);