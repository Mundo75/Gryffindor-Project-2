//var response = require("../components/yelpAPI");
var searchRestaurant = require("../components/yelpAPI");
//var restaurantInput = require("../public/js/goingOut");

module.exports = function(app) {
  app.get("/api/Parameters", function(req, res) {
    return res.json(yelpParameters);
  });

  app.put("/api/Parameters", function(req, res) {
    var restResults = req.body;

    console.log(restResults);

    yelpParameters.push(restResults);

    res.json(restResults);
  });

  app.post("/api/restaurants", function(req, res) {
    console.log(req.body);
    searchRestaurant(req.body, function(result) {
      console.log("API Call", result);
      res.json(result);
    });
  });
};

//var restData = response;

//module.exports = yelpParameters;
