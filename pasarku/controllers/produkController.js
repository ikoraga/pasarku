const { v4: uuidv4 } = require("uuid");
const db = require("../models/bundleModel");

exports.create = async (req, res) => {
  const data = {
    id: uuidv4(),
    tittle: req.body.tittle,
    description: req.body.description,
    full_description: req.body.full_description,
    price: req.body.price,
    image: req.file.filename,
    category_id: req.body.category_id,
  };

  db.produk
    .create(data)
    .then((result) => {
      res.send({
        code: 200,
        message: "Berhasil Menambahkan data",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).send({
        code: 500,
        message: "Gagal Menambah data",
      });
    });
  console.log(req.body);
};

exports.findAll = async (req, res) => {
  db.produk
    .findAll({ subQuery: false })
    .then((result) => {
      res.send({
        code: 200,
        message: "Ok Find All",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).send({
        code: 500,
        message: "Gagal Meretrive data",
      });
      console.log(err);
    });
  // const produks = await db.produk.findAll();
  // console.log(produks);
};

exports.findOne = async (req, res) => {
  const id = req.params.id;
  db.produk
    .findOne({ where: { id: id } })
    .then((result) => {
      res.send({
        code: 200,
        message: "Ok Find All",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).send({
        code: 500,
        message: "Gagal Meretrive data",
      });
    });
  res.send({
    message: "Ok all Find",
  });
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const data = {
    tittle: req.body.tittle,
    description: req.body.description,
    full_description: req.body.full_description,
    price: req.body.price,
    category_id: req.body.category_id,
  };
  if (req.file.filename) {
    data["image"] = req.file.filename;
  }
  // console.log("datas", data);
};
