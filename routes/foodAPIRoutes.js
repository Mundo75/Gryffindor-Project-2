var foodParams = require("../components/foodAPI");

var parameters = {
  query: "chinese",
  cuisine: "chinese",
  diet: "vegetarian",
  excludeIngredients: "coconut",
  type: "main course"
};

module.exports = function(app) {
  app.get("/api/parameters", function(req, res) {
    return res.json(parameters);
  });
};

app.put("/api/parameters", function(req, res) {
  var restaurantInput = req.body;

  console.log(restaurantInput);

  parameters.push(restaurantInput);

  res.json(restaurantInput);
});

module.exports = parameters;
