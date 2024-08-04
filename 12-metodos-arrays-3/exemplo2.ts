// Se a comparacação retornar um valor negativo, o item 1 vem antes do item 2
// Se a comparação retornar um valor positivo, o item 2 vem antes do item 1
// Se a comparação retornar 0, nenhum item sofre alteração

const numeros = [5, 2, 40, 21, 1, 300, 3, 4]; 

// ordenação crescente
numeros.sort(function(item1, item2) {
    if(item1 < item2) {
        return -1; 
    } else if(item2 < item1) {
        return 1; 
    } 

    return 0; 
});

console.log(numeros); 

const numeros2 = [5, 2, 40, 21, 1, 300, 3, 4 ,2]; 

// ordenação decrescente
numeros2.sort(function(item1, item2) { 
    if(item1 < item2) { 
        return 1; 
    }
    if(item1 > item2) { 
        return -1; 
    }

    return 0;
})

console.log(numeros2); 