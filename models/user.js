module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    surveyAnswer1: DataTypes.STRING,
    surveyAnswer2: DataTypes.STRING,
    surveyAnswer3: DataTypes.STRING,
    surveyAnswer4: DataTypes.STRING,
    surveyAnswer5: DataTypes.STRING
  });
  User.associate = function(models) {
    // Associating User with Restaurants

    User.hasMany(models.Restaurant);
  };

  User.associate = function(models) {
    // Associating User with Recipes

    User.hasMany(models.Recipe);
  };
  return User;
};
