import { Router } from "express";
import { GrupoUsuario } from "../entities/GrupoUsuarios";
import { GrupoUsuarioController } from "../controller/GrupoUsuariosController";


export const routerGrupoUsuario = Router()
const grupoUsuarioCtrl = new GrupoUsuarioController()



routerGrupoUsuario.post('/criarGrupo', async (req,res) =>{
    try {
        const reqDados = req.body
        const retorno = grupoUsuarioCtrl.salvar(reqDados)
        res.json(retorno)
    } catch (error) {
        
    }


});
