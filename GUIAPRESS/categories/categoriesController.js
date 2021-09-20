const express = require("express");
const Sequelize = require("sequelize");
const slugify = require("slugify");
// O ROUTER substitui a necessidade de uso da variável app (.use, .set, etc...)
const router = express.Router();
// Importando o módulo de Categorias para salvar no BD:
const Category = require("./category")


router.get("/admin/categories/new", (req, res) => {
    res.render("admin/categories/new")
})

// Coletando os dados do formulário de Cadastro de novas categorias: new.ejs
router.post("/categories/save", (req, res) => {
    var title = req.body.title // recebe os dados do titulo
    if(title != undefined){
        // salvar no banco de dados:
        Category.create({
            title: title,
            // para utilizar o slug, temos que importar a biblioteca slugify
            slug: slugify(title)
        }).then(() => {
            res.redirect("/")
        })
    } else {
        res.redirect("/admin/categories/new")
    }
})

// Exportando o router 
module.exports = router