// Trabalhando com o BD...
const Sequelize = require("sequelize")
const connection = require("../database/database")

// Definindo o MODEL => representação das tabelas do BD
const Category = conection.define('categories', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: STRING,
        allowNull: false
    }
})

module.exports = Category