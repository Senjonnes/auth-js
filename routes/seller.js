const router = require("express").Router();
const Seller = require("../model/Seller");
const verify = require("./verifyToken");

router.post("/create", verify, async (req, res) => {
  const seller = new Seller({
    address: req.body.address,
    zip: req.body.zip,
    city: req.body.city,
    user: req?.user?._id,
  });

  try {
    const savedSeller = await seller.save();
    res.json(savedSeller);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

router.get("/sellers", verify, async (req, res) => {
  try {
    const sellers = await Seller.find().populate("user");
    res.json(sellers);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

module.exports = router;
