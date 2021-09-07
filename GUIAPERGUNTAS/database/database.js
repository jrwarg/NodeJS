// conexão sequelize
const Sequelize = require("sequelize")
const connection = new Sequelize("guiaperguntas", "root", "@jrwarg@##",{
    host:"localhost",
    dialect: "mysql"
})
// Exportando a conexão -> poderá ser utilizada em outros arquivos...
module.exports = connection
