Facebook.Views.PostsIndex = Backbone.View.extend({
  template: JST['posts/index'],

  render: function() {
    var that = this;
    this.collection.each(function(post) {
      var postShowView = new Facebook.Views.PostShow({
        model: post
      });

      that.$el.append(postShowView.render().$el);
      var renderedPost = that.template({
        post: post
      });

      that.$el.append(renderedPost);

      var postCommentsView = new Facebook.Views.CommentsIndex({
        collection: post.get('comments')
      });

      that.$el.append(postCommentsView.render().$el);

      var commentFormView = new Facebook.Views.CommentsForm({
        collection: post.get('comments'),
      });

      that.$el.append(commentFormView.render().$el);
    });

    return this;
  }

});
