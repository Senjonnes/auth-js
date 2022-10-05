const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

// import routes
const auth = require("./routes/auth");
const user = require("./routes/user");

// connect to DB
mongoose.connect(process.env.DB_CONNECT, () => console.log("conected to DB"));

// middleware
app.use(express.json());

// routes middlewares
app.use("/api/v1/auth", auth);
app.use("/api/v1/user", user);

app.listen(3000, () => console.log("Server is up and running"));
