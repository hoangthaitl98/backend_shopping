const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConfig");

const Product = sequelize.define(
  "product",
  {
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    tableName: "product",
  }
);

module.exports = Product;
