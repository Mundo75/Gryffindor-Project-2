$("#recipeSearch").on("click", function(event) {
  event.preventDefault();

  var recipeInput = {
    query: "restaurants",
    cuisine: $("#zipcode").val(),
    diet: $("#q3").val(),
    excludeIngredients: $("#q2").val(),
    type: 3
  };
  console.log(recipeInput);

  $.post("/api/characters", recipeInput).then(function(data) {
    console.log("goingOut.js", data);
  });
});

module.exports = recipeInput;
