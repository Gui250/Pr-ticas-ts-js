import express from 'express'

const servidor = express(); 


servidor.get('/home', (requisicao, resposta) => { 
    return resposta.send('Meu primeiro servidor Node.Js com express');
})


servidor.listen(3000);