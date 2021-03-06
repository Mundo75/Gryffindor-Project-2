var searchRestaurant = require("../components/yelpAPI");

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
