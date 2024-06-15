const express = require("express");
const app = express(); //instance of express

app.set("view engine", "ejs");

app.get("/:nome/:lang", (req, res) => {
  var name = req.params.nome;
  var lang = req.params.lang;
  var exibirMSG = true;
  //renderizando html na tela:
  res.render("index", {
    name: name,
    lang: lang,
    msg: exibirMSG,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
