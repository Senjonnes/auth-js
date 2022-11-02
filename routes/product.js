const router = require("express").Router();
const Product = require("../model/Product");
const Seller = require("../model/Seller");
const verify = require("./verifyToken");

router.post("/create", verify, async (req, res) => {
  // create a new product
  console.log(req?.body?.sellerId);
  const seller = await Seller.findById({ _id: req?.body?.sellerId });
  console.log(seller);
  const product = new Product({
    name: req.body.name,
    quantity: req.body.quantity,
    weight: req.body.weight,
    seller: seller?._id,
  });

  try {
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

router.get("/products", verify, async (req, res) => {
  try {
    const products = await Product.find()
      .populate("seller")
      .populate("reviews");
    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

module.exports = router;
