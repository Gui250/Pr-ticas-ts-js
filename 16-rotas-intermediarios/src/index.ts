import 'dotenv/config';
import express, { Request, Response } from "express";

const app = express(); 

app.get('/', (req: Request, res: Response) => {
        console.log(req)
        return res.send('Servidor está ok!');
})

app.get('/usuarios', (req: Request, res: Response) => { 
        console.log(req); 
        return res.send('Servidor está ok!'); 
})



app.listen(process.env.PORT); 