const Product = require("../models/Product");

const ProductController = {
  getAllProduct: async (req, res) => {
    try {
      let products = await Product.findAll({});
      res.status(200).send(products);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = { ProductController };
