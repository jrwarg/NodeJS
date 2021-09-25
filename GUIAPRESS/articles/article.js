// Trabalhando com o BD...
const Sequelize = require("sequelize")
const connection = require("../database/database")
// Conselho: Definir os relacionamentos em um único model
// importando o model que receberá o relacionamento:
const Category = require("../categories/Category")

// Definindo o MODEL => representação das tabelas do BD
const Article = connection.define('articles', {
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
// Um artigo pertence a uma categoria -> Estabelecendo um relacionamento de um para um
Article.belongsTo(Category)
// Uma categoria tem muitos artigos -> Estabelecendo um relacionamento de um para muitos
Category.hasMany(Article)

// Após estabelecer os relacionamentos, deve haver uma sincronização com o banco de Dados:
// E após realizada a atualização/sincronização, devemos REMOVÊ-LA !!!
Article.sync({force:true})


module.exports = Article