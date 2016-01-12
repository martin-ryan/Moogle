var app = app || {};
var active = active || {};

app.searchModelView = Backbone.View.extend({
  //
  initialize: function() {
      this.render();
  },
  //
  render: function() {
    // var data = this.model.attributes;
  }
});


app.searchCollectionView = Backbone.View.extend({
  //
  el: $("body"),
  //
  initialize: function() {
    this.render();
  },
  //
  render: function() {
    var models = this.collection.models;
    for (var model in models) {
      new app.searchModelView({
        model: models[model],
        el: this.el
      });
    }
  }
});
