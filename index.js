const express = require("express");
const app = express(); //instance of express

app.set("view engine", "ejs");
app.use(express.static("public"));

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

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
