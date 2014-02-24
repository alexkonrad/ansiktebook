Facebook.Views.PostsIndex = Backbone.View.extend({
  template: JST['posts/index']

  render: function () {
    var renderedContent = this.template({
      posts: this.collection
    });

    this.$el.html(renderedContent);

    return this;
  }

});
