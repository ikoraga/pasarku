const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const db = require("./models/bundleModel");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/public", express.static("public"));

db.sequelize.sync({ force: false });

const produkRouter = require("./routes/produk");
app.use("/produk", produkRouter);

const categoryRouter = require("./routes/category");
app.use("/category", categoryRouter);

module.exports = app;
