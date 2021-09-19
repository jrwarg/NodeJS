// Trabalhando com o BD...
const Sequelize = require("sequelize")
const connection = require("../database/database")

// Definindo o MODEL => representação das tabelas do BD
const Article = conection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false

    }
})

module.exports = Article