var unirest = require("unirest");
//var foodData = require("../Data/foodData");

function searchRecipe(recipeData, cb) {
  var foodParameters = {
    query: "recipe",
    cuisine: recipeData.cuisine,
    diet: recipeData.diet,
    excludeIngredients: recipeData.excludeIngredients,
    type: recipeData.type
  };

  var q = foodParameters.query;
  var cuisine = foodParameters.cuisine;
  var diet = foodParameters.diet;
  var excludeIngredients = foodParameters.excludeIngredients;
  var type = foodParameters.type;
  var apiKey = "f504da3c21mshe56c513d6a9955dp1b1c63jsn4548cb484cf3";
  var searchURL =
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?";
  var searchParams =
    "cuisine=" +
    cuisine +
    "&diet=" +
    diet +
    "&excludeIngredients=" +
    excludeIngredients +
    "&number=3&type=" +
    type +
    "&query=" +
    q;
  var searchQuery = searchURL + searchParams;

  unirest
    .get(searchQuery)

    .header(
      "X-RapidAPI-Host",
      "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
    )

    .header("X-RapidAPI-Key", apiKey)

    .end(function(result) {
      cb(result.body);
    });
}

module.exports = searchRecipe;
