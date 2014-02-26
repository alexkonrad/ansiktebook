Facebook.Views.Posts = Backbone.View.extend({

  template: JST['posts/post'],

  render: function () {
    var that = this;
    this.$el.html("hello")
    this.collection.each(function(post) {
      var renderedContent = that.template({
        post: post
      });
      that.$el.append(renderedContent);
    })

    return this;
  }
});