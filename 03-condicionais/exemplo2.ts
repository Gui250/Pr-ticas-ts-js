const peso: number = 55; 
const altura: number = 1.75;
 
const imc: number = peso / (altura ** 2);

if(imc > 16.9) { 
    console.log('Muito abaixo do peso');
} else if(18.5 <= imc || imc <= 24.9) { 
    console.log("Peso Normal");
}