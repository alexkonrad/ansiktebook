Facebook.Views.CommentsForm = Backbone.View.extend({
  tagName: "form",
  className: "post-footer-item new-comment",
  template: JST["comments/new"],
  intialize: function () {
  },

  events: {
    "submit" : "submit",
  },

  render: function () {
    var renderedCommentForm = this.template({
      post: this.collection.post
    });

    this.$el.html(renderedCommentForm);

    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var data = this.$el.serializeJSON();
    var model = new Facebook.Models.Comment(data);
    model.set({
      author: Facebook.currentUser
    });
    this.collection.add(model);
    model.save();

  }
})