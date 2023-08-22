import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    constructor(nome:string, email:string, senha:string){
        this.nome = nome
        this.email = email
        this.senha = senha
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    email: string

    @Column()
    senha: string

}
