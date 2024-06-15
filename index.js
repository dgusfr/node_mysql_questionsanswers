const express = require("express");
const app = express(); //instance of express
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
//comando para decodificar dados do formulario
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/:nome/:lang", (req, res) => {
  var name = req.params.nome;
  var lang = req.params.lang;
  var exibirMSG = false;

  var products = [
    { name: "Playstation 5", price: 4499 },
    { name: "Xbox Series X", price: 4999 },
    { name: "Nintendo Switch", price: 2999 },
  ];

  res.render("index", {
    name: name,
    lang: lang,
    msg: exibirMSG,
    products: products,
  });
});

app.get("/", (req, res) => {
  res.render("ask");
});

//rota responsavél por coletar as informações do formulario
app.post("/saveask", (req, res) => {
  var title = req.body.title;
  var description = req.body.description;
  res.send(
    "Formulário recebido com sucesso! Titulo: " +
      title +
      " Descrição: " +
      description
  );
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
