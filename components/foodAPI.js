var unirest = require("unirest");
var foodData = require("../Data/foodData");

var q = foodData[0].query;
var cuisine = foodData[0].cuisine;
var diet = foodData[0].diet;
var excludeIngredients = foodData[0].excludeIngredients;
var type = foodData[0].type;
var apiKey = "f504da3c21mshe56c513d6a9955dp1b1c63jsn4548cb484cf3";
var searchURL =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?";
var searchParams =
  "diet=" +
  diet +
  "&excludeIngredients=" +
  excludeIngredients +
  "&number=3&type=" +
  type +
  "&cuisine=" +
  cuisine +
  "&query=" +
  q;
var searchQuery = searchURL + searchParams;

unirest
  .get(
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?diet=vegetarian&excludeIngredients=coconut&number=3&type=main+course&query=burger"
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
