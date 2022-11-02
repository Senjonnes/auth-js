const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
    min: 6,
  },
  zip: {
    type: String,
    required: true,
    min: 6,
  },
  city: {
    type: String,
    required: true,
    min: 6,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Seller", sellerSchema);
