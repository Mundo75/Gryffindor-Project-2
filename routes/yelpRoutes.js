var API = require("../components/yelpAPI")

var parameters = {
  term: "restaurants",
  location: 85016,
  radius: 4000,
  categories: "chinese",
  limit: 3,
  price: 2,
  attributes: "none"
};

module.exports = function(app) {
  app.get("/api/parameters", function(req, res) {
    return res.json(parameters);
  });

  app.put("/api/parameters", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var userInput = req.body;

    console.log(userInput);

    characters.push(userInput);

    res.json(userInput);
  });
};
