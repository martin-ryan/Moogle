var app = app || {};
var active = active || {};

app.loginView = Backbone.View.extend({
  //
  el: $("#container_login"),
  //
  events: {
    "click #login-btn" : "login"
  },
  //
  initialize: function() {
    active.userCollection = new app.userCollection();
    this.render();
  },
  //
  render: function() {
    // data object
    // underscore template
    // compile template
    // append compiled template to dom
  },
  //
  login: function() {

  }
});
