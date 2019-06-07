var response = require("../components/yelpAPI");
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
};

var restData = response;

//module.exports = yelpParameters;
