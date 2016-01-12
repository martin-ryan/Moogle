var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//
// call Express and define our APP as Express
var express = require('express');
var app = express();

//
// load MONGOOSE and connect to our MONGODB database
require("./db/database");

//
// Include ROUTES and define ROUTER MAPS
var index = require('./routes/index');
var user = require('./routes/user');
//
app.use('/', index);
app.use('/user', user);

//
// define LOCATION and TYPES of VIEWS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//
// include and configure server PACKAGES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

//
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//
// error handlers
//
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
