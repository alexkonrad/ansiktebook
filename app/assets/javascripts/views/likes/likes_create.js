Facebook.Views.LikesCreate = Backbone.View.extend({
  tagName: "form",
  className: "like",
  template: JST["likes/like"],

  render: function () {
    var renderedLikeButton = this.template({
      post: this.model
    });

    this.$el.html(renderedLikeButton);

    return this;
  }
});