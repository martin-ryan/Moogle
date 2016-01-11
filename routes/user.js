

// THIS IS NOTHING BUT A DATA ROUTE FOR USER LOGIN


var express = require('express');
// // var passport = require('passport');
// // var LocalStrategy = require('passport-local').Strategy;
var model = require('../models/User');
var router = express.Router();

// configure passport
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
// end configuration for passport

router.get('/', function(req, res, next) {
  model.find(function(err, users) {
    // console.log(users);
    // console.log(err);
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(users);
    }
  });
});

router.get('/:id', function(req, res, next) {
  model.findById(req.params.id, function(err, user) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(user);
    }
  });
});

router.post('/', function(req, res, next) {
  model.create(req.body, function(err, user) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(user);
    }
  });
});

router.put('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function(err, user) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(user);
    }
  });
});

router.patch('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function(err, user) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(user);
    }
  });
});


router.delete('/:id', function(req, res, next) {
  model.findByIdAndRemove(req.params.id, req.body, function(err, user) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(user);
    }
  });
});

module.exports = router;
