import 'dotenv/config'

import express from 'express'
import cors from 'cors'

import vilaoController from './controller/vilaoController.js'

const server = express();
server.use(cors());
server.use(express.json());


server.use(vilaoController);


server.listen(process.env.PORT, () => 
                            console.log(`API esta online na porta ${process.env.PORT}`));