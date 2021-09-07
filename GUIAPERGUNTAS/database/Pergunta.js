const Sequelize = require("sequelize")
const connection = require("./database")
// variável que receber o Model (criação de tabelas no BD...)
const Pergunta = connection.define("perguntas", { // definir nome da tabela
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,// tipo TEXT para textos longos  e String para curtos..
        allowNull: false
    }
 } // aqui poderíamos passar um segundo {}.json = opções, mas ficará em branco neste projeto
) 

Pergunta.sync({force: false}) // Se não existir a tabela, será criada com esse sync. Se existir não será forçada a criação...//
 .then(() => {
     console.log("Tabela criada com sucesso!")
 })

 // Para manipular uma tabela no Sequelize, importamos o Model
 // O model já está importado = variavel Pergunta no index.js
 // Agora exportamos :

 module.exports = Pergunta
