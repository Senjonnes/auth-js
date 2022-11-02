const router = require("express").Router();
const Review = require("../model/Review");
const Product = require("../model/Product");
const verify = require("./verifyToken");

router.post("/create/:id", verify, async (req, res) => {
  Review.create({
    rate: req.body.rate,
    comment: req.body.comment,
  })
    .then((savedReview) => {
      return Product.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { reviews: savedReview._id } },
        { new: true }
      ).populate("reviews");
    })
    .then((savedProduct) => res.json(savedProduct))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
