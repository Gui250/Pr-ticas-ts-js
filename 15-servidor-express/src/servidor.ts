import express, { Request, Response } from 'express'

const servidor = express(); 

const controlador = (requisicao: Request, resposta: Response) => { 
    return resposta.send('Meu primeiro servidor Node.Js com express');
}

servidor.get('/home', controlador); 


servidor.listen(3000);