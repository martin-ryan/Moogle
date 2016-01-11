var app = app || {};
var active = active || {};

// var express = require('express');
// // var passport = require('passport');
// // var LocalStrategy = require('passport-local').Strategy;
// var User = require('../models/User');
// var router = express.Router();

// configure passport
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
// end configuration for passport

app.loginView = Backbone.View.extend({
  el: $('#body_container'),
  initialize: function() {
    active.userCollection = new app.userCollection();
    //this.collection = active.userCollection;
    // active.userCollection.fetch();
    // console.log(active.userCollection);
    this.render();
  },
  events: {
    "click #login-btn" : "login"
  },
  render: function() {
    var template = document.getElementById('login-template').innerHTML;
    var compiledTemplate = _.template(template);
    this.$el.append(compiledTemplate);
  },
  login: function() {
    // var col = collection;
    var data = {
      username: document.getElementById('login-username').value,
      password: document.getElementById('login-password').value
    };
    // 1. loop through all models in collection
    for (var model in active.userCollection) {
      // 2. check to see if this model's username/pw matches
      var model = active.userCollection[model];
      var modelUsername = model.get('username');
      if (data.username == modelUsername) {
        // 3. success! alert the user
        console.log("you have passed the test");
        break;
      } else {
        // 4. keep on trucking
      }
      //5. if condiiton never ever meets, no user, let them know

    }
    // console.log(data);
    // passport.authenticate("local", { failureRedirect: "/" }), function(req, res) {
    //   this.el.innerHTML = "";
    //   active.collection = new app.searchCollection();
    // };
  }
});

// app.ModelView = Backbone.View.extend({
//   initialize: function() {
//     console.log("We have instantiated our model view.");
//     this.render();
//   },
//   render: function() {
//     // var data = this.model.attributes;
//     console.log("Rendering ModelView");
//     var data = this.model.attributes;
//     console.log("Grabbing template");
//     var template = document.getElementById('location-template').innerHTML;
//     console.log("Transforming template");
//     var compiledTemplate = _.template(template);
//     console.log("Creating HTML from template and model data...");
//     var html = compiledTemplate(data);
//     this.el.innerHTML = this.el.innerHTML + html;
//   }
// });
//
