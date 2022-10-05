const router = require("express").Router();
const verify = require("./verifyToken");
const User = require("../model/User");

router.get("/users", verify, async (req, res) => {
  const users = await User.find();
  res.send(users);
});

module.exports = router;
