const Sequelize = require("sequelize")

const connection = new Sequelize('guiapress', 'root', '@jrwarg@##', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports  = connection