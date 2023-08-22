import { Router } from 'express';
import { UsuarioCOntroller } from '../controller/controller';
import { User } from '../entity/User';

 export const routerUsuario = Router()
 const usuarioCtrl = new UsuarioCOntroller

routerUsuario.post('/', async (req,res) =>{
    try {
        const reqDados = req.body;
        if(reqDados.nome == undefined || reqDados.email == undefined || reqDados.senha == undefined){
            res.send("Houve um problema nos dados obrigatorios fornecidos")
        }else{
            const usuario = new User(reqDados.nome,reqDados.email,reqDados.senha)
            const usuarioSalvo = await usuarioCtrl.salvar(usuario)
        res.send(usuarioSalvo)
        }
    } catch (error) {
        
    }
    //Validar dados


    //Associação por desestruturação
    // const {nome,email,senha} = req.body;
    // 
})