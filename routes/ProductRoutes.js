const { ProductController } = require("../controllers/ProductController");

const router = require("express").Router();

router.get("/", ProductController.getAllProduct);

router.post("/", ProductController.addProduct);

router.put("/:id", ProductController.updateProduct);

router.delete("/:id", ProductController.deleteProduct);

module.exports = router;
