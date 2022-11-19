const db = require("../models/bundleModel");

exports.create = async (req, res) => {
  const data = {
    name: req.body.name,
  };
  db.kategory
    .create(data)
    .then((result) => {
      res.send({
        code: 200,
        message: "Berhasil minyimpan data",
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).send({
        code: 500,
        message: "Gagal meyimpan data",
      });
    });
};

exports.findAll = async (req, res) => {
  db.kategory
    .findAll()
    .then((result) => {
      if (result.length > 0) {
        res.send({
          code: 200,
          message: "OK",
          data: result,
        });
      } else {
        res.send({
          code: 404,
          message: "Tidak ada data",
        });
      }
    })
    .catch((err) => {
      res.send({
        code: 500,
        message: "Gagal retrive data",
      });
    });
};

exports.update = async (req, res) => {
  const id = req.params.id;

  const data = {
    name: req.body.name,
  };
  db.kategory
    .update(data, {
      where: { id: id },
    })
    .then((result) => {
      if (result[0]) {
        res.send({
          code: 200,
          message: "berhasil Update data",
        });
      } else {
        res.status(422).send({
          code: 422,
          message: "Gagal update data, field error",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        code: 500,
        message: "Gagal update data",
      });
    });
};

exports.delete = async (req, res) => {
  const id = req.params.id;

  db.kategory
    .destroy({
      where: { id: id },
    })
    .then((result) => {
      res.send({
        code: 200,
        message: "Sukses delete data",
      });
    })
    .catch((err) => {
      res.status(500).send({
        code: 500,
        message: "Gagal delete data",
      });
    });
};
