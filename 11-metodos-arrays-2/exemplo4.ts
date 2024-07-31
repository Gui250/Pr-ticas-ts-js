// some -> testa se pelo menos um dos elementos atende a condição implementada e retorna verdadeiro ou falso

const numeros = [1,2,3];

const resultado_numeros = numeros.some((item) => { 
    return item % 2 == 0; 
})

console.log(resultado_numeros); 

const pessoas = [ 
    { 
        nome: 'Guido', 
        idade: 33
    }, 
    { 
        nome: 'João',
        idade: 20
    }, 
    {
        nome: 'Ana',
        idade: 17
    }
]

const resultado2 = pessoas.some((pessoa) => { 
    return pessoa.idade < 18; 
})

if(resultado2) { 
    console.log('Existe uma pessoa menor de 18 na lista');
    console.log(resultado2);
}