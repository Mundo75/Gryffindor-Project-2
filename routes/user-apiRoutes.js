var db = require("../models");

module.exports = function (app) {
  //This will update user answers
  app.put("/api/user/:answers", function (req, res) {
    db.User.update(req.body,
      {
        where: {
          id: req.params.id,
          surveyAnswer1: req.params.surveyAnswer1,
          surveyAnswer2: req.params.surveyAnswer2,
          surveyAnswer3: req.params.surveyAnswer3,
          surveyAnswer4: req.params.surveyAnswer4,
          surveyAnswer5: req.params.surveyAnswer5,
        },
      }).then(function (dbUser) {
        res.json(dbUser);
      });
  });
  // Get all users
  app.get("/api/user", function (req, res) {
    db.User.findAll({
      include: [db.Restaurant]
    }).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });
  //Get a user
  app.get("/api/user/:id", function (req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Restaurant]
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Create a new user
  app.post("/api/user", function (req, res) {
    db.User.create(req.body).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Delete user by id
  app.delete("/api/user/:id", function (req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function (dbUser) {
      res.json(dbUser);
    });
  });
};
