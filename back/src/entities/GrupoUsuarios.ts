import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class GrupoUsuario{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    ativo: boolean

    @Column()
    descricao: string

    @OneToMany(() => User, (user) => user.grupoUsuario)
    users: User[];
}