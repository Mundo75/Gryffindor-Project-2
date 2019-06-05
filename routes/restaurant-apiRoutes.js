var db = require("../models");

module.exports = function(app) {
  // Get favorite restaurants for a user
  app.get("/api/restaurant/:user_id", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    db.Restaurant.findAll({
      include: [db.User]
    }).then(function(dbRestaurant) {
      res.json(dbRestaurant);
    });
  });
  //Get a restaurant
  app.get("/api/restaurant/:id", function(req, res) {
    db.Restaurant.findOne({
      where: {
        id: req.params.id,
        include: [db.User]
      }
    }).then(function(dbRestaurant) {
      res.json(dbRestaurant);
    });
  });

  // Create a new restaurant
  app.post("/api/restaurant", function(req, res) {
    db.Restaurant.create(req.body).then(function(dbRestaurant) {
      res.json(dbRestaurant);
    });
  });

  // Delete an restaurant by id
  app.delete("/api/restaurant/:id", function(req, res) {
    db.Restaurant.destroy({ where: { id: req.params.id } }).then(function(dbRestaurant) {
      res.json(dbRestaurant);
    });
  });
};
