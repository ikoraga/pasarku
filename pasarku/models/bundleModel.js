const Sequelize = require("sequelize");
const dbConfig = require("../config/config");

const sequelize = new Sequelize(
  dbConfig.DBNAME,
  dbConfig.USER,
  dbConfig.PASSWORD,

  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,
    port: dbConfig.DBPORT,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.produk = require("./produkModel")(sequelize, Sequelize);
db.kategory = require("./kategoryModel")(sequelize, Sequelize);

db.kategory.hasMany(db.produk, {
  foreignkey: "category_id",
  onDelete: "SET NULL",
});

db.produk.belongsTo(db.kategory, {
  foreignKey: "category_id",
  onDelete: "SET NULL",
});

module.exports = db;
