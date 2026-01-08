const express = require("express");
const { getAllProducts, createNewProduct } = require("../controller/productsController");
const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/products/create").post(createNewProduct);

module.exports = router;