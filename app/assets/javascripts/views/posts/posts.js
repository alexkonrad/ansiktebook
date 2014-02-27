Facebook.Views.Posts = Backbone.View.extend({

  template: JST['posts/post'],

  render: function () {
    var that = this;
    this.collection.each(function(post) {
      var renderedPost = that.template({
        post: post
      });

      that.$el.append(renderedPost);

      var renderedPostFooter = JST['posts/post_footer']({
        post: post
      });

      that.$el.append(renderedPostFooter);

      post.get('comments').each(function (comment) {
        var commentShowView = new Facebook.Views.CommentShow({
          model: comment,
          post: post
        });

        that.$el.append(commentShowView.render().$el);
      });
      console.log(post.get('comments'))
      var commentFormView = new Facebook.Views.CommentsForm({
        collection: post.get('comments'),
      });

      that.$el.append(commentFormView.render().$el);
    });

    return this;
  }
});