// ** ARQUIVO INICIAL DO SISTEMA ** //
/**
 * Algumas tarefas comuns no desenvolvimento web não são suportadas diretamente pelo Node. Se você quiser que a sua aplicação possua diferentes verbos HTTP (por exemplo GET, POST, DELETE, etc), que gerencie requisições de diferentes URLs ("rotas"), apresente arquivos estáticos ou utilize templates para mostrar as respostas (response) de maneira dinâmica
 
 * Express é o framework Node mais popular e a biblioteca subjacente para uma série de outros frameworks do Node. O Express oferece soluções para:

-> Gerenciar requisições de diferentes verbos HTTP em diferentes URLs.
-> Integrar "view engines" para inserir dados nos templates.
-> Definir as configurações comuns da aplicação web, como a porta a ser usada para conexão e a localização dos modelos que são usados para renderizar a resposta.
-> Adicionar novos processos de requisição por meio de "middleware" em qualquer ponto da "fila" de requisições.
 */

const express = require("express");
const app = express(); // criando uma instância do express => criação de rotas etc...
const connection = require("./database/database") // "chamando" a conexão com o BD
// Importando o Model, para a execução do arquivo Pergunta.js
const Pergunta = require("./database/Pergunta") // Aqui foram criadas as tabelas do BD
const Resposta = require("./database/Resposta")

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
    //o método abaixo equivale a SELECT * FROM perguntas
    // Enviaremos as perguntas para o front end home = res.render...
    Pergunta.findAll({raw: true, order:[
        // raw = somente lista a informação essencial
        ["id", "DESC"] // ASC = Crescente || DESC = Decrescente
    ]}).then(perguntas => {
        res.render("index", {
            perguntas : perguntas
        });
        
    })
})

app.get("/perguntar", (req, res) => {
    res.render("perguntar")
})

// Criando uma rota para receber os dados dos formulários:
// Note que ela não será uma view...Serve só para a recepção!
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

// Criando a rota para localizar perguntas via parâmetro ID do BD=> criar parâmetros = /: parâmetro
app.get("/pergunta/:id", (req, res) => {
    var id = req.params.id // variável recebe os dados de id
    // buscar no BD uma pergunta que tenha a variavél ID igual ao parâmetro ID
    Pergunta.findOne({
        where: {id: id}
    }).then(pergunta => {
        if(pergunta != undefined){ // pergunta encontrada
            // Fazer busca no BD para pegar todas as respostas relacionadas com uma pergunta:
            Resposta.findAll({
                // procure todas respostas que tenham perguntaId = ao id da pergunta...
                where: {perguntaId: pergunta.id},
                order:[['id','DESC']]
            }).then(respostas => {
                // Precisamos criar nova view => criada uma nova página - pergunta.ejs
                res.render("pergunta", {
                    pergunta: pergunta, // Passando a variável pergunta para ser utilizada na view
                    respostas: respostas // passando a variável respostas para ser utilizada na view
                })               
            })           
        } else { // pergunta não encontrada
            res.redirect("/")
        }
    })
})

// Criando uma rota para receber as respostas do  formulário

app.post("/responder", (req, res) => {
    var corpo = req.body.corpo
    var perguntaId = req.body.pergunta
    // criando uma nova resposta, chamando o model que representa essa resposta (já importado acima)
    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(() => {
        // redirecionar o usuário para a página da pergunta que ele respondeu:
        res.redirect("/pergunta/" + perguntaId)
    })
})

app.listen(8080, () => {
    console.log("App rodando...")
    })