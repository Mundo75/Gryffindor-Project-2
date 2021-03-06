'use strict';

var yelp = require("yelp-fusion");

var apiKey = "jh5DFfaTKLWtMJf2-qdZGL7TE2-mH8KYQJ1lNOrLIp7SscIbLeiDIKsKYCAOwAOQTLaVKEv9G3SxdW4kmHNdm1ZyNxjqn5aDxo2Je-tIuoBTxlV12QylFn8pqXzwXHYx";

function searchRestaurant(restaurantData, cb) {

  var client = yelp.client(apiKey);
  var yelpParameters = {
    term: restaurantData.term,
    location: restaurantData.location,
    radius: restaurantData.radius,
    categories: restaurantData.categories,
    limit: 3,
    price: restaurantData.price,
    attributes: restaurantData.attributes
  }
  client.search(yelpParameters).then(response => {

    //console.log(response.jsonBody.businesses)
  
    //let restaurantID = response.jsonBody.businesses[0].name;
  
    console.log(response.jsonBody.businesses);
    cb(response.jsonBody.businesses);
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

}

module.exports = searchRestaurant;





