import {Router} from 'express'

import {postarVilao, ListarVilao} from '../repository/vilaoRepository.js'

const server = Router();

server.post ('/vilao', async (req,resp) => {
    try 
    {
        const novo = req.body;
        const inserirVilao = await postarVilao(novo);

        resp.send(inserirVilao)
    } catch (err) {
        resp.status(406).send({
            erro:err.message
        })
    }
})
server.get('/vilao', async (req,resp) => {
    try {
        const v = req.params;
        const resposta = await ListarVilao(v);
        resp.send(resposta);
    } 
    catch (err) {
        resp.status(401).send ({
            erro:err.message
            })
    }
})

export default server;