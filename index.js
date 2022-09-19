const { Sequelize } = require("sequelize");
const express = require("express");
const app = express();

const sequelize = new Sequelize("ecommerce", "root", "rootroot", {
  host: "localhost",
  dialect: "mysql",
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    console.log(`Server is running on port http://localhost:${PORT}.`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
