Facebook.Views.UsersShow = Backbone.View.extend({

  template: JST['users/show'],

  render: function () {
    var renderedProfile = this.template({
      user: this.model
    });

    this.$el.html(renderedProfile);

    this.model.posts.each(function(post) {
      var renderedPost = new Facebook.Views.PostsShow({
        model: post
      });

      this.$el.append(renderedPost);
    })

    return this;
  }

});
