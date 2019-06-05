module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define("Recipe", {
    name: DataTypes.STRING,
    cuisineType: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    cooktime: DataTypes.STRING,
    vegeterian: DataTypes.BOOLEAN,
    glutenFree: DataTypes.BOOLEAN,
    kosher: DataTypes.BOOLEAN,
    difficulty: DataTypes.STRING,
    rating: DataTypes.STRING,
    url: DataTypes.STRING
  });

  Recipe.associate = function(models) {
    Recipe.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
  };
  return Recipe;
};