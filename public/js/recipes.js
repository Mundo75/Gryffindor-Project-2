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
  $("#recipe-survey").hide();
  $.post("/api/recipes", newFoodSearch).then(function(data) {
    console.log("recipes.js", data);

    //console.log("Recipe Id", data.results[0].id);
    var newRecipeID = {
      id: data.results[0].id
    };

    console.log("Recipe Id", newRecipeID);
    
    $.post("/api/recipe/info", newRecipeID).then(function(data) {
      console.log("1st Recipe Info", data);
      var name = data.title;
      var instructions = data.instructions;
      var image = data.image;
      var ingredientList = "";
      for (var i = 0; i < data.extendedIngredients.length; i++) {
        ingredientList += `${data.extendedIngredients[i].name}\n`
      }
      console.log(name);
      console.log(instructions);
      console.log(ingredientList);
      
      $("#recipe-results").append(`<div class="card">
      <div id="restaurant-name-one" class="card-header">
          ${name}
      </div>
      <div class="card">
          <img class="card-img-top" src="${image}" alt="Card image cap">
          <div class="card-body">
              <p class="card-text"><strong> Ingredients:</strong> ${ingredientList}</p>
              <p class="card-text"><strong> Instructions:</strong> ${instructions}</p>
          </div>
      </div>
  </div>
  <br>
  <br>
  <br></div>`);     
    });
  });

  var newRecipeID = {
    id: ""
  }

  
});
