var app = app || {};
var active = active || {};

app.userCollection = Backbone.Collection.extend({
  model: app.userModel,
  url: "/user",
  initialize: function() {
    this.fetch();
  }
});
