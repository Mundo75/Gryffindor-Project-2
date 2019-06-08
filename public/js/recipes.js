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

    //console.log("Recipe Id", data.results[0].id);
    var newRecipeID = {
      id: data.results[0].id
    };

    console.log("Recipe Id", newRecipeID);
    
    $.post("/api/recipe/info", newRecipeID).then(function(data) {
      console.log("1st Recipe Info", data);

      
    });
  });

  var newRecipeID = {
    id: ""
  }

  
});
