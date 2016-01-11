var express = require('express');
var router = express.Router();

siteData = {
  title: 'Beeler\'s Blockers'
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// router.get("/", function(req, res, next) {
//   res.render("search");
// })

module.exports = router;
