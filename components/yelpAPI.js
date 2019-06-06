'use strict';
var parameters = require("../routes/yelpRoutes");
var yelp = require("yelp-fusion"); 

// var searchParams = 
//    {
//      term: "restaurants",
//      location: 85016,
//      radius: 4000,
//      categories: "mexican",
//      limit: 3, 
//      price: 2,
//      attributes: "none"

// };

// module.exports = function(app) {
  
//   app.get("/api/restaurants", function(req, res) {
//       return res.json(searchParams);
//     });
//   };

var apiKey = "jh5DFfaTKLWtMJf2-qdZGL7TE2-mH8KYQJ1lNOrLIp7SscIbLeiDIKsKYCAOwAOQTLaVKEv9G3SxdW4kmHNdm1ZyNxjqn5aDxo2Je-tIuoBTxlV12QylFn8pqXzwXHYx";
var client = yelp.client(apiKey);


     client.search(parameters).then(response => {

         //console.log(response.jsonBody.businesses)
     
         let restaurantID = response.jsonBody.businesses[0].name;
         
         console.log (restaurantID)
         // console.log(response.jsonBody.businesses[0].name)
         // console.log(response.jsonBody.businesses[0].categories[0].title)
         // console.log(response.jsonBody.businesses[0].categories[1].title)
         // console.log(response.jsonBody.businesses[0].categories[2].title)
         // console.log(response.jsonBody.businesses[0].id)
         // console.log(response.jsonBody.businesses[0].rating)
         // console.log(response.jsonBody.businesses[0].price)
         // console.log(response.jsonBody.businesses[0].location.address1)
         // console.log(response.jsonBody.businesses[0].location.address2)
         // console.log(response.jsonBody.businesses[0].location.address3)
         // console.log(response.jsonBody.businesses[0].location.city)
         // console.log(response.jsonBody.businesses[0].location.state)
         // console.log(response.jsonBody.businesses[0].location.country)
         // console.log(response.jsonBody.businesses[0].location.zip_code)
         // console.log(response.jsonBody.businesses[0].display_phone)
         // console.log(response.jsonBody.businesses[0].url)
         // console.log(response.jsonBody.businesses[0].distance)
         // console.log(response.jsonBody.businesses[0].coordinates.latitude)
         // console.log(response.jsonBody.businesses[0].coordinates.longitude)
         // console.log(response.jsonBody.businesses[0].location.display_address)
         // console.log(response.jsonBody.businesses[1].name)
         // console.log(response.jsonBody.businesses[2].name)
     
         //client.reviews(restaurantID).then(response => {
             //console.log(response.jsonBody.reviews[0].text);
           //}).catch(e => {
             //console.log(e);
           //});
     
       }).catch(e => {
         console.log(e);
       });
     
      
