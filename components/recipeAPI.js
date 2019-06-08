var unirest = require("unirest");

function recipeDataOne(idRecipeOne, cb) {
  var idObjectOne = {
    id: idRecipeOne.id
  };

  var id = idObjectOne.id;
  console.log("Test", id);

  unirest
    .get(
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information"
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
      cb(result.body);
      //console.log(result.body);
    });
}

module.exports = recipeDataOne;
