import { GrupoUsuario } from './GrupoUsuarios';
import { get } from "http"
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Int32, ManyToMany, JoinColumn } from "typeorm"

@Entity()
export class User {

    constructor(nome:string, email:string, senha:string){
        this.nome = nome
        this.email = email
        this.senha = senha
        this.id
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    email: string

    @Column()
    senha: string

    @Column()
    ativo: boolean
    
    @ManyToOne(() => GrupoUsuario, (grupoUsuario) => grupoUsuario.users)
    @JoinColumn({name:'grupoUsuarioId'})
    grupoUsuario: GrupoUsuario;

}
