const temIngresso: boolean = true; 
const idade: number = 17;
const censura: number = 16;
const estarComOsPais: boolean = true; 

// Operador lógico AND - &&
// Testa todas as condições e todas precisam ser verdadeiras


// Operador lógico OR - || 
// Testa se pelo menos uma condição é verdadeira


if(temIngresso) {
    if(idade >= censura || estarComOsPais) { 
        console.log('Pode entrar');
    } else { 
        console.log('Barrado');
    }
} else { 
    console.log('Barrado');
}