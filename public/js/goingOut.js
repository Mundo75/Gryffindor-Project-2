//let yelp = require("../../components/yelp")

$("#restaurantSearch").on("click", function(event) {
  event.preventDefault();

   let userInput = {
     name: $("#name").val(),
     answers : [
       $("#zipcode").val(),
       $("#q2").val(),
       $("#q3").val(),
       $("#q4").val(),
       $("#q5").val()
     ]
   };
   console.log(userInput);

   let zipcode = userInput.answers[0];
   let cuisine = userInput.answers[1];
   let radiusMeters = userInput.answers[2];
   let price = userInput.answers[3];
   let special = userInput.answers[4];
  

   console.log(radiusMeters);
   console.log(zipcode);
   console.log(cuisine);
   console.log(price);
   console.log(special);

   yelpCall();

});   
