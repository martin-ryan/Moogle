

// __________ THIS IS NOTHING BUT A DATA (API) ROUTE FOR USER LOGIN __________


//
// require EXPRESS so that we can use a ROUTER for this RESTful implementation
var express = require('express');
var router = express.Router();

//
// load our user MODEL for use by the RESTful HTTP functions
var model = require('../models/User');

//
// establish RESTful HTTP for API
// ------ GET ALL -------
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
// ------ GET ONE -------
router.get('/:id', function(req, res, next) {
  model.findById(req.params.id, function(err, user) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(user);
    }
  });
});
// ------ CREATE ONE -------
router.post('/', function(req, res, next) {
  model.create(req.body, function(err, user) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(user);
    }
  });
});
// ------ UPDATE ONE -------
router.put('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function(err, user) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(user);
    }
  });
});
// ------ DELETE ONE -------
router.delete('/:id', function(req, res, next) {
  model.findByIdAndRemove(req.params.id, req.body, function(err, user) {
    if (err) {
      res.json(buildErrorResponse(err));
    } else {
      res.json(user);
    }
  });
});

//
// DONT NEED PATCH FOR BACKBONE
// router.patch('/:id', function(req, res, next) {
//   model.findByIdAndUpdate(req.params.id, req.body, function(err, user) {
//     if (err) {
//       res.json(buildErrorResponse(err));
//     } else {
//       res.json(user);
//     }
//   });
// });
module.exports = router;
