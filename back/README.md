# Projeto imob
Iniciar projeto imob-back

## Inicializando o projeto
1. Run `npm run dev`

## Dependências
### Typeorm
`Typeorm` é responsavel de aplicar o conceito de ORM se conectando com o banco de dados e permitindo que usemos o Code-first no Banco de dados

### Express
`Express.js` é um framework que fornece recursos mínimos para construção de servidores web.

### Nodemon
`Nodemon` permite o reinicio automaticamente do aplicativo de nó quando são detectadas alterações de arquivo no diretório.

### Morgan
`Morgan` é um Middleware de registrador de solicitações HTTP para node.js.

## Infraestrutura Docker
Nosso banco de dados é um postgresql que mantem sua disponibilidade em Docker com uma imagem que poderá ser acessada e configurada pelo `Docker-compose`.