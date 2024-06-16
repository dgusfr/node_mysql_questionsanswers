const sequelize = require("sequelize");
const db = require("./database");

//Create title and description in database with JS
const Ask = db.define("asks", {
  title: {
    type: sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: sequelize.TEXT,
    allowNull: false,
  },
});

//send model to database
Ask.sync({ force: false }).then(() => {
  console.log("Table created");
});
