// const id = setInterval(() => {
   // console.log('Olá Estudantes'); 
// }, 2000);

// Interrompendo o setinterval()
// clearInterval(id);

let contador = 10; 

function bomba() { 
    console.log(contador);
    contador--;

    if(contador === 0) { 
        console.log('BOOOOOM!');
        clearInterval(id);
    }
}

const id = setInterval(bomba, 1000);