const express = require("express");
const { getAllProducts, createNewProduct } = require("../controller/productsController");
const { addToCart } = require("../controller/cartController");
const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/products/create").post(createNewProduct);
router.route("/products/addtocart").post(addToCart);

module.exports = router;