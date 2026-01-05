const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());

app.use(cors());


const products = require("./routes/productRoutes");
app.use("/api/v1", products);

module.exports = app;