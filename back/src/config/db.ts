import { AppDataSource } from "../data-source";


export const conectarServidorNoBD =  async () =>{
    AppDataSource.initialize().then(() =>{
        console.log("Conexão com db iniciada")
    })
    process.on('SIGINT', () =>{
     AppDataSource.destroy().then(()=>{ console.log("Conexão com db finalizada")})
    })
}
