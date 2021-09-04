const express = require("express");
const app = express(); // criando uma instância do express => criação de rotas etc...

// Dizer para o Express usar o EJS como view engine:
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("principal/perfil")
});

app.listen(8080, () => {
    console.log("App rodando...")
} )