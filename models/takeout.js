module.exports = function(sequelize, DataTypes) {
  var Takeout = sequelize.define("Takeout", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Takeout;
};
