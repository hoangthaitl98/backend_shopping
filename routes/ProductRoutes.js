const { ProductController } = require("../controllers/ProductController");

const router = require("express").Router();

router.get("/", ProductController.getAllProduct);

module.exports = router;
