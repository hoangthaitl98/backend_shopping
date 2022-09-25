const dotenv = require("dotenv");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ProductRouter = require("./routes/ProductRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
dotenv.config();

const port = process.env.PORT || 8080;

const productRouter = require("./routes/ProductRoutes");
app.use("/api/product", productRouter);

app.listen(port, () => {
  console.log(`server starts at http://localhost:${port}`);
});
