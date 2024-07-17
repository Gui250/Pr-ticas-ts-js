type TCarros = {
    modelo: string, 
    marca: string,
    ano: number, 
    // Cor opcional
    cor?: string
} 


const carro: TCarros  = { 
    modelo: 'Pálio',
    marca: 'Fiat',
    ano: 2000,
    cor: 'vermelho'
}

console.log(carro);