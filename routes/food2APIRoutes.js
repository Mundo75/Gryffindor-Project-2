var recipeDataOne = require("../components/recipeAPI");

module.exports = function(app) {
  // app.get("api/recipe/info", function(req, res) {
  //   res.json(results)

  // })

  app.post("/api/recipe/info", function(req, res) {
    //console.log(req.body);
    recipeDataOne(req.body, function(result) {
      console.log("API Call", result);
      res.json(result);
    });
  });
};
