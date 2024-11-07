const express = require("express");
const bodyParser = require("body-parser");
const db = require("./database/database");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");

const app = express();
const PORT = 3000;

// Conexão com o banco de dados
db.authenticate()
  .then(() => console.log("Conexão com o banco de dados estabelecida!"))
  .catch((error) =>
    console.error("Erro ao conectar ao banco de dados:", error)
  );

// Configuração do EJS e arquivos estáticos
app.set("view engine", "ejs");
app.use(express.static("public"));

// Configuração do Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rota principal - Listagem de perguntas
app.get("/", async (req, res) => {
  try {
    const perguntas = await Pergunta.findAll({
      raw: true,
      order: [["id", "DESC"]],
    });
    res.render("index", { perguntas });
  } catch (error) {
    res.status(500).send("Erro ao carregar perguntas.");
  }
});

// Rota para o formulário de nova pergunta
app.get("/perguntar", (req, res) => res.render("perguntar"));

// Rota para salvar uma nova pergunta
app.post("/salvarpergunta", async (req, res) => {
  const titulo = req.body.titulo;
  const descricao = req.body.descricao;

  try {
    await Pergunta.create({ titulo: titulo, descricao: descricao });
    res.redirect("/");
  } catch (error) {
    res.status(500).send("Erro ao salvar a pergunta.");
  }
});

// Rota para exibir uma pergunta específica e suas respostas
app.get("/pergunta/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const pergunta = await Pergunta.findOne({ where: { id } });

    if (!pergunta) return res.redirect("/");

    const respostas = await Resposta.findAll({
      where: { perguntaId: pergunta.id },
      order: [["id", "DESC"]],
    });
    res.render("pergunta", { pergunta, respostas });
  } catch (error) {
    res.status(500).send("Erro ao carregar a pergunta.");
  }
});

// Rota para salvar uma resposta para uma pergunta específica
app.post("/responder", async (req, res) => {
  const { corpo, pergunta } = req.body;
  try {
    await Resposta.create({ corpo, perguntaId: pergunta });
    res.redirect(`/pergunta/${pergunta}`);
  } catch (error) {
    res.status(500).send("Erro ao salvar a resposta.");
  }
});

// Inicialização do servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
