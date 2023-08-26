import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entities/User"
import { GrupoUsuario } from "./entities/GrupoUsuarios"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "postgres",
    database: "imob",
    synchronize: false,
    logging: true,
    entities: [`${__dirname}/**/entities/*.{ts,js}`],
	migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
})

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))