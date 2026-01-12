const Cart = require("../models/cartSchema");
const Product = require("../models/productSchema");

exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity, sessionId } = req.body;

    // 1. Validate product
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // 2. Find cart
    let cart = await Cart.findOne({ sessionId });

    if (!cart) {
      cart = new Cart({
        sessionId,
        items: [{ product: productId, quantity }]
      });
    } else {
      const itemIndex = cart.items.findIndex(
        item => item.product.toString() === productId
      );

      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ product: productId, quantity });
      }
    }

    await cart.save();
    res.status(200).json(cart);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
