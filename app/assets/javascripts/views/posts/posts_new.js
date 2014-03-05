Facebook.Views.PostNew = Backbone.View.extend({
  tagName: "form",
  className: "in-posts post-form group",
  template: JST["posts/new"],
  initialize: function () {
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
      recipient: this.model,
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