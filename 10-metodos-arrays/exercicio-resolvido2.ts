
function inverter(palavra: string) { 
    const arrayPalavra = palavra.split('');
    let resultado: string = ''

    for(const letra of arrayPalavra.reverse()) { 
        resultado += letra; 
    }

    console.log(resultado);
}

inverter('Cubos Academy');