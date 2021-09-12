// **  INICIANDO UMA CONEXÃO COM O BANDO DE DADOS **
// conexão sequelize => biblioteca que permite o acesso a BDs SQL e outros...
const Sequelize = require("sequelize")
const connection = new Sequelize("guiaperguntas", "root", "@jrwarg@##",{
    host:"localhost",
    dialect: "mysql"
})
// Exportando a conexão -> poderá ser utilizada em outros arquivos...
module.exports = connection
