import { GrupoUsuario } from '../entities/GrupoUsuarios';
import { Router } from 'express';
import { UsuarioCOntroller } from '../controller/UsuarioController';
import { User } from '../entities/User';
import { tools } from '../tools/tools';

 export const routerUsuario = Router()
 const usuarioCtrl = new UsuarioCOntroller
 const t = new tools

 //Criar Usuario
routerUsuario.post('/criarUsuario', async (req,res) =>{
    try { 
        const reqDados = req.body;
        if(reqDados.nome == undefined || reqDados.email == undefined || reqDados.senha == undefined){
            return res.send(t.jsonResponse(true,"Erro ao salvar usuario, falta algum dos valores obrigatorios.",null))
        }else{
            const usuario = new User(reqDados.nome,reqDados.email,reqDados.senha)
            //Cria a relação entre as tabelas
            const grupo = new GrupoUsuario()
            grupo.id = reqDados.grupoUsuario
            usuario.grupoUsuario = grupo
            const usuarioSalvo = await usuarioCtrl.salvarUsuario(usuario)
            return usuarioSalvo != User  ?res.send(t.jsonResponse(true,usuarioSalvo,null)) : res.send(t.jsonResponse(false,"Salvo com sucesso",usuarioSalvo))
        }
    } catch (error) {
        return res.send(t.jsonResponse(true,"Erro ao salvar usuario!",error))
    }
})
//getAll
routerUsuario.get('/getAll', async (req,res) =>{
    try { 
        const usuarios = await usuarioCtrl.getAll()
        console.log("Estou Aqui", usuarios)
        return usuarios != User  ?res.send(t.jsonResponse(true,'Erro',usuarios)) : res.send(t.jsonResponse(false,null,usuarios))
    } catch (error) {
        return res.send(t.jsonResponse(true,"Erro ao pegar usuario!",error))
    }
})
//getById
routerUsuario.get('/getById', async (req,res) =>{
    try {
        const reqDados = req.body
        if(reqDados.id == null || reqDados.id == undefined){
        return res.send(t.jsonResponse(true,"Erro ao pegar usuario!",null))
        }else{
            const usuarios = await usuarioCtrl.getById(reqDados.id)
            return usuarios != User ?res.send(t.jsonResponse(true,usuarios,null)) : res.send(t.jsonResponse(false,null,usuarios))
        }
    } catch (error) {
        return res.send(t.jsonResponse(true,"Erro ao pegar usuario!",error))
    }
})

//login
routerUsuario.get('/login', async (req,res) =>{
    try {
        const reqDados = req.body
        if(reqDados.email == null || reqDados.email == undefined && reqDados.senha == null || reqDados.senha == undefined){
        return res.send(t.jsonResponse(true,"Erro ao pegar usuario!",null))
        }else{
            const usuarios = await usuarioCtrl.autenticarUsuario(reqDados)
            return usuarios != false ?res.send(t.jsonResponse(false,null,usuarios)) : res.send(t.jsonResponse(true,"Email ou senha invalidas",null))
        }
    } catch (error) {
        return res.send(t.jsonResponse(true,"Erro ao pegar usuario!",error))
    }
})