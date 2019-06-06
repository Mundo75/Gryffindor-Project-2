var restaurantInput = require("../public/js/goingOut");

var parameters = {
  term: "restaurants",
  location: 85016,
  radius: 4000,
  categories: "chinese",
  limit: 3,
  price: 2,
  attributes: "none"
};

module.exports = function(app) {
  app.get("/api/parameters", function(req, res) {
    return res.json(parameters);
  });

  app.put("/api/parameters", function(req, res) {
    var restaurantInput = req.body;

    console.log(restaurantInput);

    parameters.push(restaurantInput);

    res.json(restaurantInput);
  });
};

module.exports = parameters;
