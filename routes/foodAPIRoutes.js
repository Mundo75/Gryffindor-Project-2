var searchRecipe = require("../components/foodAPI");

module.exports = function (app) {
  app.get("/api/parameters", function(req, res) {
    return res.json(foodParameters);
  });

  app.put("/api/parameters", function(req, res) {
    var foodInput = req.body;

    console.log(foodInput);

    foodParameters.push(foodInput);

    res.json(foodInput);
  });

  app.post("/api/recipes", function(req, res) {
    //console.log(req.body);
    searchRecipe(req.body, function(result) {
      console.log("API Call", result);
      res.json(result);
    });
  });
};
