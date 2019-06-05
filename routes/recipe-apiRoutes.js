var db = require("../models");

module.exports = function(app) {
  // Get all recipes
  app.get("/api/recipe", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    db.Recipe.findAll({
      include: [db.User]
    }).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });
  //Get a recipe
  app.get("/api/recipe/:id", function(req, res) {
    db.Recipe.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });

  // Create a new recipe
  app.post("/api/recipe", function(req, res) {
    db.Recipe.create(req.body).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });

  // Delete an example by id
  app.delete("/api/recipe/:id", function(req, res) {
    db.Recipe.destroy({ where: { id: req.params.id } }).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });
};
