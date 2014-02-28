Facebook.Views.PhotoNew = Backbone.View.extend({
  tagName: "form",
  className: "photo-form group",
  template: JST["photos/new"],
  intialize: function () {
  },

  events: {
    "submit" : "submit",
  },

  render: function () {
    this.$el.html(this.template());

    return this;
  },

  submit: function (event) {
    event.preventDefault();

    var data = this.$el.serializeJSON();

    var model = new Facebook.Models.Post(data);
    model.set({
      user: Facebook.currentUser,
      likes: {}
    });

    var that = this;
    model.save({}, {
      success: function (model) {
        that.collection.unshift(model);
      }
    });
  }
})