var foodApiCall = require("../../components/foodAPI");

$("#recipeSearch").on("click", function(event) {
  event.preventDefault();

  var newFoodSearch = {
    query: "restaurants",
    cuisine: $("#zipcode").val(),
    diet: $("#q3").val(),
    excludeIngredients: $("#q2").val(),
    type: 3
  };
  console.log(newFoodSearch);

  $.post("/api/parameters", newFoodSearch).then(function(data) {
    console.log("goingOut.js", data);
  });

  foodAPI.foodApiCall();
});
