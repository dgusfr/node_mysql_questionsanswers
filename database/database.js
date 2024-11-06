const Sequelize = require("sequelize");

const db = new Sequelize("guia_perguntas", "root", "1234", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
