
const arquivos: string[] = ['index.js', 'trabalho.doc', 'teste.jpeg']; 

const antiVirus = (listaArquivos: string[]) => { 
    const resultado = arquivos.some((arquivo) => { 
        const existeVirus = arquivo.includes('.bat');
        return existeVirus; 
    })

    if(resultado) { 
        console.log('Virus Detectado');
    } else { 
        console.log('Virus Não Detectado');
    }
}

antiVirus(arquivos);