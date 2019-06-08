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

  $("#restaurant-survey").hide();

  $.post("/api/restaurants", newRestSearch).then(function(data) {
    console.log("goingOut.js", data);

    $.each(data, function(i, item) {
      var name = item.name;
      var image = item.image_url;
      var phone = item.display_phone;
      var rating = item.rating;
      var price = item.price;
      var location = item.location.display_address;
      var url = item.url;
      console.log(name);

      $("#results").append(`<div class="card">
      <div id="restaurant-name-one" class="card-header">
          ${name}
      </div>
      <div class="card">
          <img class="card-img-top" src="${image}" alt="Card image cap">
          <div class="card-body">
              <p class="card-text"><strong> Rating:</strong> ${rating}</p>
              <p class="card-text"><strong> Phone Number:</strong> ${phone}</p>
              <p class="card-text"><strong> Price:</strong> ${price}.</p>
              <p class="card-text"><strong> Address: </strong> ${location}.</p>
              <p class="card-text"><strong> Website: </strong> <a href="${url}">${name}</a></p>

          </div>
      </div>
  </div>
  <br>
  <br>
  <br></div>`);
    });
  });
});
