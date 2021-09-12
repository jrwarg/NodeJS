// ** CRIAR A VIEW DE RESPOSTAS ** //
const Sequelize = require('sequelize')
const connection = require('./database')
// criando o Model Resposta
const Resposta = connection.define("respostas", { // definir o nome da tabela
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    //  criando campo para guardar o id da pergunta à qual a resposta pertence
    
})
