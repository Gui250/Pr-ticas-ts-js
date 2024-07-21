type TCalculadora = {
    somar: (numero1: number, numero2:number) => number,
    subtracao: (numero1: number, numero2: number) => number, 
    divisao: (numero1: number, numero2: number) => number, 
    multiplicacao: (numero1: number, numero2: number) => number
}

const calculadora: TCalculadora = { 
    somar: function(numero1: number, numero2: number) { 
        return numero1 + numero2; 
    },
    subtracao: function(numero1: number, numero2: number) { 
        return numero1 - numero2; 
    },
    divisao: function(numero1: number, numero2: number) { 
        return numero1 / numero2; 
    },
    multiplicacao: function(numero1: number, numero2: number) { 
        return numero1 * numero2; 
    }
}

console.log(calculadora.somar(6, 8));
console.log(calculadora.subtracao(7,5));
console.log(calculadora.multiplicacao(5,5));