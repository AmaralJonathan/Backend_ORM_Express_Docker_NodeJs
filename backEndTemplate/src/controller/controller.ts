import { AppDataSource } from '../data-source'
import {User} from '../entity/User'
import {tools} from '../tools/tools'
var bcrypt = require('bcryptjs');
var t = new tools

export class UsuarioCOntroller{
    async salvar(usuario:User){
        try {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(usuario.senha, salt);
            
            usuario.senha = hash
            const usuarioSalvo = await AppDataSource.manager.save(usuario)
            
            return t.jsonResponse(false,null,null)
            
        } catch (error) {
            return error
        }
    }
}