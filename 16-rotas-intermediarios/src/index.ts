import 'dotenv/config';
import express from 'express'

const app = express(); 

app.get('/', (req, res) => {
    return res.send('Servidor está ok!');
})

app.listen(process.env.PORT); 