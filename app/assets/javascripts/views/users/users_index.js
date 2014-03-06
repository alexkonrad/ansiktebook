Facebook.Views.UsersIndex = Backbone.View.extend({
  className: "users-index",
  initialize: function() {
  },

  events: {
    "click .profile-photos-index-link" : "photos",
    "click .profile-posts-index-link" : "posts",
  },

  render: function () {

    var that = this;
    _.each(this.collection.first(9), function(user) {

      if (user.get('id') != Facebook.currentUser.get('id')) {
        var userShowView = new Facebook.Views.UserShow({
          model: user
        });

        that.$el.append(userShowView.render().$el);
      }

    });

    return this;
  },

  photos: function() {
    event.preventDefault();
    var url = '#/users/' + Facebook.currentUser.get('id') + "/photos"
    Backbone.history.navigate(url);
  },

  posts: function() {
    event.preventDefault();
    var url = '#/users/' + Facebook.currentUser.get('id') + "/posts"
    Backbone.history.navigate(url, {
      replace: true
    });
  }
});
