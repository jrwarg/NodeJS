const express = require("express");
const app = express(); // criando uma instância do express => criação de rotas etc...
const connection = require("./database/database") // "chamando" a conexão com o BD
// Importando o Model, para a execução do arquivo Pergunta.js
const Pergunta = require("./database/Pergunta")


// * DATABASE //

connection
    .authenticate()
    .then(() => {
        console.log("Banco de dados conectado com sucesso!")
    })
    .catch((msgErro) => {
        console.log(msgErro)
    })

// Dizer para o Express usar o EJS como view engine:
app.set("view engine", "ejs");

// Possibilitar o uso de arquivos estáticos (css, js, imagens, dados, etc...)
app.use(express.static('public'))

// Configurar express para decodificar os dados enviados dos formulários do projeto...
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// ** ROTAS ** //

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
})

// Criando uma rota para receber os dados dos formulários:
app.post("/salvarpergunta", (req, res) => {
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    // Método create() equilave ao INSERT no banco de Dados:
    Pergunta.create({ 
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/") // após preench. campos, redirecionar para o /home
    })
})

app.listen(8080, () => {
    console.log("App rodando...")
    })