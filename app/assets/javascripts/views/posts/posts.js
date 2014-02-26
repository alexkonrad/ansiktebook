Facebook.Views.Posts = Backbone.View.extend({

  template: JST['posts/post'],

  render: function () {
    var that = this;
    this.collection.each(function(post) {
      var renderedPost = that.template({
        post: post
      });

      that.$el.append(renderedPost);

      post.get('comments').each(function (comment) {
        var commentShowView = new Facebook.Views.Comments({
          model: comment,
          post: post
        });

        that.$el.append(commentShowView.render().$el);
      })
    });

    return this;
  }
});