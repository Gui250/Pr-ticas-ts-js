import Fastify from 'fastify'

const servidor = Fastify({
    logger: true
});


servidor.get('/teste', function controlador(req, res) { 
    const saudacao = 'Bem vindo ao primeiro servidor com o TypeScript';
    return res.send(saudacao); 
})


servidor.listen({
    port: 3000
})