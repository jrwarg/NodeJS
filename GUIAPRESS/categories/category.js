// Trabalhando com o BD...
const Sequelize = require("sequelize")
const connection = require("../database/database")

// Definindo o MODEL => representação das tabelas do BD
const Category = connection.define('categories', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
// Após estabelecer os relacionamentos, deve haver uma sincronização com o banco de Dados:
// E após realizada a atualização/sincronização, devemos REMOVÊ-LA !!!
// Category.sync({force:true})

module.exports = Category