import { Int32 } from 'typeorm';
import { AppDataSource } from '../data-source'
import {User} from '../entities/User'
import {tools} from '../tools/tools'
var t = new tools


export class UsuarioCOntroller{
    userRepository = AppDataSource.getRepository(User)

    async salvarUsuario(usuario:User){
        
        try {
            let usuarioDuplicado:any = await this.verificaDuplicidade(usuario)
            console.log(usuarioDuplicado)
            
             if(usuarioDuplicado == false){
                usuario.ativo = true
                const usuarioSalvo = await this.userRepository.save(usuario)
                return usuarioSalvo
            }else{
                return "Usuario já existe"
            }
        } catch (error) {
            return error
        }
    }
    
    async getAll(){
        try {
            const usuariosSalvos = await this.userRepository.find()
            usuariosSalvos.forEach(usuariosSalvos => {
                usuariosSalvos.senha = null
              });
            return usuariosSalvos
        } catch (error) {
            return error
        }
    }

    async getById(id:Int32){
        try {
            const usuarioSalvo = await this.userRepository.findOneBy({id:1})
            usuarioSalvo.senha = null
            return usuarioSalvo
        } catch (error) {
            return error
        }
    }

    public async autenticarUsuario(usuario:User){
        const emailDigitada = usuario.email
        const senhaDigitada = usuario.senha
        try {
            const usuario = await this.userRepository.findOneBy({email:emailDigitada})
            if(usuario ==  null){
                return false
            }
            if(usuario.senha == senhaDigitada){
                return usuario
            }else{
                return false
            }
       } catch (error) {
            return false
       }
    }

    //Metodos privados
    private async verificaDuplicidade(usuario:User){
        const email = usuario.email
        try {
            const usuario = await this.userRepository.findOneBy({email:email})
            if(usuario == null){
                return false
            }else{
                return true
            }
        } catch (error) {
            return true
        }
    }

    
}