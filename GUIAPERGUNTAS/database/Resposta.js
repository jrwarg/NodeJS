// ** CRIAR A VIEW DE RESPOSTAS ** //
const Sequelize = require('sequelize')
const connection = require('./database')
// criando o Model Resposta
// Trata-se de criar um relacionamento cru (Raw) entre as tabelas perguntas e respostas
// -> Há meios mais eficientes, serão vistos no outro projeto...

const Resposta = connection.define("respostas", { // definir o nome da tabela
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    //  criando campo para guardar o id da pergunta à qual a resposta pertence
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Resposta.sync({force: false}) // cria a tabela , se não existir
    .then(() => {
        console.log("Tabela respostas criada com sucesso")
    })

 // Para manipular uma tabela no Sequelize, importamos o Model
 // O model já está importado = variavel Pergunta no index.js
 // Agora exportamos :

 module.exports = Resposta


