const express = require("express")
const app = express() // Instancia do Express
const connection = require("./database/database")
// VIEW ENGINE
app.set('view engine', 'ejs')

// Possibilitar o uso de arquivos estáticos (css, js, imagens, dados, etc...)
app.use(express.static('public'))

// Body Parser substituido: 
// Configurar express para decodificar os dados enviados dos formulários do projeto...
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// DATABASE
connection
    .authenticate()
    .then(() => {
        console.log("Conexão executada com sucesso!")
    }).catch((error) => {
        console.log(error)
    })


// ROTA PRINCIPAL: 
app.get("/", (req,res) => {
    res.render("index")
})

// INICIANDO A APLICAÇÃO
app.listen(8080, () => {
    // CallBack =>
    console.log("O servidor está rodando...")
})