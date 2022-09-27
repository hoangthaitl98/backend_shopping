const Product = require("../models/Product");

const ProductController = {
  getAllProduct: async (req, res) => {
    try {
      let products = await Product.findAll({});
      return res.status(200).send(products);
    } catch (error) {
      return res.status(500).send(error);
    }
  },

  addProduct: async (req, res) => {
    try {
      const newProduct = await Product.create({ ...req.body });
      if (!newProduct.name) {
        throw new Error("name is mandatory");
      } else {
        return res.status(200).send("Create successfull");
      }
    } catch (error) {
      return res.status(500).send(error);
    }
  },

  updateProduct: async (req, res) => {
    try {
      await Product.update({ ...req.body }, { where: { id: req.params.id } });
      return res.status(200).send("Update successfull");
    } catch (error) {
      return res.status(500).send(error);
    }
  },

  deleteProduct: async (req, res) => {
    try {
      await Product.destroy({ where: { id: req.params.id } });
      return res.status(200).send("Delete successfull");
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};

module.exports = { ProductController };
