import { AppDataSource } from '../data-source';
import { GrupoUsuario } from '../entities/GrupoUsuarios';


export class GrupoUsuarioController{
    userRepository = AppDataSource.getRepository(GrupoUsuario)
    
    
    async salvar(grupoUsuario:GrupoUsuario){
        try {
            const grupoUsuarioSalvo = await this.userRepository.save(grupoUsuario)
            return grupoUsuarioSalvo
        } catch (error) {
            return error
        }
    }
}