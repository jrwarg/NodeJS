const express = require("express");
// O ROUTER substitui a necessidade de uso da variável app (.use, .set, etc...)
const router = express.Router();

router.get("/articles", (req, res) => {
    res.send("ROTA DE ARTIGOS")
})

router.get("/admin/articles/new", (req, res) => {
    res.send("ROTA DE CRIAÇÃO DE NOVO ARTIGO")
})

// Exportando o router 
module.exports = router