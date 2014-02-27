Facebook.Views.PostNew = Backbone.View.extend({
  tagName: "form",
  className: "post-form",
  template: JST["posts/new"],
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
      recipient: Facebook.currentUser,
      author: Facebook.currentUser,
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