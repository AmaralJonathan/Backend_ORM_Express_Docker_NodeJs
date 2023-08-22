export class tools{


public jsonResponse(erro:boolean = null, mensagem:string = null, objeto = null){
    const retornoArray =[
        {
            erroReturn: erro,
            mensagemReturn: mensagem,
            jsonReturn: objeto
        }
    ]
    return retornoArray
}
}