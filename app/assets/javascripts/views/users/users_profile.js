Facebook.Views.UserProfile = Backbone.View.extend({
  template: JST["users/profile"],
  initialize: function () {
  },
  render: function () {
    // render profile

    var userPostsIndexView = new Facebook.Views.PostsIndex({
      collection: this.model.get('posts'),
      model: this.model
    });

    this.$el.html(userPostsIndexView.render().$el);

    return this;
  }
})