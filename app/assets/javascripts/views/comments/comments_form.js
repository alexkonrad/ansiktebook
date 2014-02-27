Facebook.Views.CommentsForm = Backbone.View.extend({
  tagName: "form",
  className: "post-footer-item comment",
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
    this.collection.create(data);
  }
})