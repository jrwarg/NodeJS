const express = require("express");
const app = express(); // criando uma instância do express => criação de rotas etc...

// Dizer para o Express usar o EJS como view engine:
app.set("view engine", "ejs");
// Possibilitar o uso de arquivos estáticos (css, js, imagens, dados, etc...)
app.use(express.static('public'))

app.get("/", (req, res) => {    
    res.render("index");
})

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
})
app.listen(8080, () => {
    console.log("App rodando...")
})