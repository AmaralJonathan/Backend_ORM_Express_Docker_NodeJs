import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan'

import {conectarServidorNoBD} from './config/db'
import { routerUsuario } from './routes/usuario';

//Criar o app
export const app = express()

//Libera os acessos aos serviços
app.use(cors())

//Permitir receber e enviar JSON
app.use(bodyParser.json())

// Configura loggers
app.use(logger('dev'))

//Conectando no DB
conectarServidorNoBD();

//Configuração de rotas
app.use('/usuario', routerUsuario)
app.use('/', (req,res) =>{res.send('Aplicação imob Back-end está rodando')}  )