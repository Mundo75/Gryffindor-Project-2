var recipeDataOne = require("../components/recipeAPI");

module.exports = function(app) {
  app.post("/api/recipe/info", function(req, res) {
    console.log(req.body);
    recipeDataOne(req.body, function(result) {
      //console.log("API Call", result);
      res.json(result);
    });
  });

  app.get("/api/recipe", function(data) {
    app.get("/api/recipe/info/" + data.results[0].id, function(result) {
      console.log("data = ", data);
      console.log("result = ", result);
    });
  });
};
