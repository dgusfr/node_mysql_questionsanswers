const sequelize = require("sequelize");

const db = new sequelize("asks", "root", "3215", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
