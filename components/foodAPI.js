var parameters = require("../routes/foodAPIRoutes");
var unirest = require("unirest");

unirest
  .get(
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer?q=How+much+vitamin+c+is+in+2+apples%3F"
  )
  .header(
    "X-RapidAPI-Host",
    "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
  )
  .header(
    "X-RapidAPI-Key",
    "f504da3c21mshe56c513d6a9955dp1b1c63jsn4548cb484cf3"
  )
  .end(function(result) {
    console.log(result.body);
  });
