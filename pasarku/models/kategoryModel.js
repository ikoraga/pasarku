module.exports = (sequelize, Sequelize) => {
  const kategory = sequelize.define("kategory", {
    name: {
      type: Sequelize.STRING,
    },
  });
  return kategory;
};
