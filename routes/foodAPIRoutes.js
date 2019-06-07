var result = require("../components/foodAPI");

module.exports = function(app) {
  app.get("/api/parameters", function(req, res) {
    return res.json(foodParameters);
  });

  app.put("/api/parameters", function(req, res) {
    var foodInput = req.body;

    console.log(foodInput);

    foodParameters.push(foodInput);

    res.json(foodInput);
  });
};
var foodData = result.body;

//module.exports = foodParameters;
