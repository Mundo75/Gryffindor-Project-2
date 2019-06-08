$("#restaurantSearch").on("click", function(event) {
  event.preventDefault();

  var newRestSearch = {
    term: "restaurants",
    location: $("#zipcode")
      .val()
      .trim(),
    radius: $("#q3").val(),
    categories: $("#q2").val(),
    limit: 3,
    price: $("#q4").val(),
    attributes: $("#q5").val()
  };

  console.log(newRestSearch);

  $.post("/api/restaurants", newRestSearch).then(function(data) {
    console.log("goingOut.js", data);
  });

 
});
