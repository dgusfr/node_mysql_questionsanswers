const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./database/database");
const AskModel = require("./database/asks");

//Engine
app.set("view engine", "ejs");
app.use(express.static("public"));

//Database
db.authenticate()
  .then(() => {
    console.log("Conexão feita com o banco de dados!");
  })
  .catch((msgErro) => {
    console.log(msgErro);
  });

//Form
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("ask");
});

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

//Server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
