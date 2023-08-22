import { Server } from 'http';
import {app} from './app';

const porta = 3000
const server = app.listen(porta, () => {console.log(`Ouvindo na porta ${porta}`)})
process.on('SIGINT',() =>{
    server.close()
    console.log('App finalizado')
})