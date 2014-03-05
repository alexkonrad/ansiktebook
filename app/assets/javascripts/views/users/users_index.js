Facebook.Views.UsersIndex = Backbone.View.extend({
  className: "users-index",

  // template: JST['users/show'],
  initialize: function() {
  },

  events: {
    "click .profile-photos-index-link" : "photos",
    "click .profile-posts-index-link" : "posts",
    // "click .user-show-link" : "show"
  },

  render: function () {
    // var renderedProfileNavView = JST['shared/profile_nav']({
    //   user: Facebook.currentUser
    // });
    //
    // this.$el.html(renderedProfileNavView);

    var that = this;
    this.collection.each(function(user) {
      // var renderedUser = that.template({
      //   user: user
      // });
      //
      // that.$el.append(renderedUser);
      var userShowView = new Facebook.Views.UserShow({
        model: user
      });

      that.$el.append(userShowView.render().$el);

      // var renderedUser = that.template({
      //   user: user
      // });
      //
      // that.$el.append(renderedUser);
    });

    return this;
  },

  // show: function (event) {
  //   event.preventDefault();
  //   var url = "#/users/" + this.model.get('id');
  //   Backbone.history.navigate(url);
  // },

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
