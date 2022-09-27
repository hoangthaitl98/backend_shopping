const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB, "root", "rootroot", {
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connect successfull");
  })
  .catch((err) => console.log(err));

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync();

module.exports = { sequelize };
