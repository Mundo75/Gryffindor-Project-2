var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });
  app.get("/views/restaurants", function(req, res) {
    db.Restaurant.findAll({}).then(function(data) {
      res.render("restaurants", {
        msg: "Welcome!",
        examples: data
      });
    });
  });
  app.get("/views/recipes", function(req, res) {
    db.Recipe.findAll({}).then(function(data) {
      res.render("recipes", {
        msg: "Welcome!",
        examples: data
      });
    });
  });
  app.get("/views/questionare-answers", function(req, res) {
    db.User.findAll({}).then(function(data) {
      res.render("questionare-answers", {
        msg: "Welcome!",
        examples: data
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
