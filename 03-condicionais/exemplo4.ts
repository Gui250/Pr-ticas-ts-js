const numero: number = 10; 

const parOuImpar: number = numero % 2; 

// Ternario
const resultado = parOuImpar == 0 ? 'par' : 'impar';

if(resultado == 'par') { 
    console.log('é par');
} else { 
    console.log('é impar');
}