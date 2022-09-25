const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("shopping", "root", "rootroot", {
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
