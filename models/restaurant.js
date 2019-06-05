module.exports = function(sequelize, DataTypes) {
  var Restaurant = sequelize.define("Restaurant", {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    type: DataTypes.STRING,
    price: DataTypes.STRING,
    vegeterian: DataTypes.BOOLEAN,
    glutenFree: DataTypes.BOOLEAN,
    handicapAccesible: DataTypes.BOOLEAN,
    rating: DataTypes.STRING,
    phone: DataTypes.STRING,
    url: DataTypes.STRING
  });

  Restaurant.associate = function(models) {
    Restaurant.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
  };
  return Restaurant;
};