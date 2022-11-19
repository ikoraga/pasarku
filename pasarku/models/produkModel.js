module.exports = (sequelize, Sequelize) => {
  const produk = sequelize.define("produk", {
    // produks_id: {
    //   type: Sequelize.STRING,
    //   primarykey: true,
    // },
    tittle: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    full_description: {
      type: Sequelize.TEXT,
    },
    image: {
      type: Sequelize.STRING,
    },
    category_id: {
      type: Sequelize.INTEGER,
    },
    price: {
      type: Sequelize.INTEGER,
    },
    url: {
      type: Sequelize.STRING,
    },
  });
  return produk;
};
