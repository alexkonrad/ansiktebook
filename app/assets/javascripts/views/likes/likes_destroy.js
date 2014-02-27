Facebook.Views.LikesCreate = Backbone.View.extend({
  tagName: "form",
  className: "unlike",
  template: JST["likes/unlike"],

  render: function () {
    var renderedUnlikeButton = this.template({
      post: this.model
    });

    this.$el.html(renderedUnlikeButton);

    return this;
  }
});