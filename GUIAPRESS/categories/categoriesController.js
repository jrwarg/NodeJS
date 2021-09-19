const express = require("express");
// O ROUTER substitui a necessidade de uso da variável app (.use, .set, etc...)
const router = express.Router();

router.get("/categories", (req, res) => {
    res.send("ROTA DE CATEGORIAS")
})

router.get("/admin/categories/new", (req, res) => {
    res.send("ROTA DE CRIAÇÃO DE NOVA CATEGORIA")
})

// Exportando o router 
module.exports = router