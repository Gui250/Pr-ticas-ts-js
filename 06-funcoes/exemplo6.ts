
const pessoa = { 
    nome: 'Guido',
    sobrenome: 'Cerqueira',
    nomeCompleto: function() { 
        console.log(`${pessoa.nome} ${pessoa.sobrenome}`)
    }

}

const pessoa2 = { 
    nome: 'João', 
    sobrenome: 'Cerqueira', 
    nomeCompleto: function(idade: number) { 
        console.log(`${this.nome} ${this.sobrenome}, ${idade} anos`)
    }
}

function soma(numero1: number, numero2: number): number { 
    return numero1 + numero2; 
}

const funcaoNaVariavel = soma;



console.log(funcaoNaVariavel(3,5));

pessoa.nomeCompleto();
pessoa2.nomeCompleto(22);