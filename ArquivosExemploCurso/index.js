const express = require("express");
const app = express(); // criando uma instância do express => criação de rotas etc...

// Dizer para o Express usar o EJS como view engine:
app.set("view engine", "ejs");
// Possibilitar o uso de arquivos estáticos (css, js, imagens, dados, etc...)
app.use(express.static('public'))

app.get("/", (req, res) => { // aqui no get vamos pedir ao usuario que digite as infos.
    var nome = req.params.nome // através da requisição recolhemos o nome digitado na barra url
    var lang = req.params.lang
    var exbirMsg = false

    var produtos = [
        {nome: "Doritos", preco: 3.24},
        {nome: "Coca-Cola", preco: 5.00},
        {nome: "Leite", preco: 1.60}
    ]

    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Guia do Programador",
        inscritos: 8000,
        msg: exbirMsg,
        produtos: produtos
    })
});

app.listen(8080, () => {
    console.log("App rodando...")
} )