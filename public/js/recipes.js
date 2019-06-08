var recipeOne = "";
var recipeTwo = "";
var recipeThree = "";

$("#recipeSearch").on("click", function(event) {
  event.preventDefault();

  var newFoodSearch = {
    query: "recipe",
    cuisine: $("#q2").val(),
    diet: $("#q3").val(),
    excludeIngredients: $("#q4").val(),
    type: $("#q1").val()
  };
  console.log(newFoodSearch);

  $.post("/api/recipes", newFoodSearch).then(function(data) {
    console.log("recipes.js", data);
    recipeOne = data.results[0].id;
    recipeTwo = data.results[1].id;
    recipeThree = data.results[2].id;
    // console.log(recipeOne);
    // console.log(recipeTwo);
    // console.log(recipeThree);

    
    //console.log("Recipe Id", data.results[0].id);
  });
  
  var newRecipeID = {
    id: ""
  }

  $.post("/api/recipe/info", newRecipeID).then(function(data) {
    console.log("1st Recipe Info", data);
  });

  // $.post("/api/recipe/info", recipeTwo).then(function(data) {h
  //   console.log("2nd Recipe Info", data);
  
  //});
});
    console.log(recipeOne);
    console.log(recipeTwo);
    console.log(recipeThree);