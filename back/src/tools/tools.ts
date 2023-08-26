const crypto = require('crypto');

const algorithm = 'aes-256-cbc'; // O algoritmo de criptografia a ser usado
const key = crypto.randomBytes(32); // Chave secreta
const iv = crypto.randomBytes(16); // Vetor de inicialização

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

public encrypt(text) {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf-8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}
 
public decrypt(encrypted) {
    //Decrypt não funciona
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');
    return decrypted;
}

}