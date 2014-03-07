Facebook.Views.PhotosIndex = Backbone.View.extend({
  template: JST['photos/index'],

  initialize: function () {
    this.listenTo(this.collection, "add remove", this.render);
  },
  events: {
    "click .profile-posts-index-link" : "posts",
  },

  render: function() {

    var renderedNotifications = new Facebook.Views.NotificationsIndex({
      collection: Facebook.currentUser.get('notifications')
    });

    this.$el.html(renderedNotifications.render().$el);

    var renderedProfileNavView = JST['shared/profile_nav']({
      user: this.model
    });

    this.$el.append(renderedProfileNavView);

    var photoNewView = new Facebook.Views.PhotoNew({
      collection: this.collection
    });

    this.$el.append(photoNewView.render().$el);

    var that = this;
    this.collection.each(function(photo) {
      var photoShowView = new Facebook.Views.PhotoShow({
        model: photo
      });

      that.$el.append(photoShowView.render().$el);
    });

    this.$('.in-posts').wrapAll("<div class=\"posts\">");

    var userProfileShowView = new Facebook.Views.UserProfileShow({
      model: this.model,
      collection: Facebook.users
    });

    this.$el.prepend(userProfileShowView.render().$el);

    return this;
  },

  posts: function() {
    event.preventDefault();
    var url = '#/users/' + this.model.get('id') + "/posts"
    Backbone.history.navigate(url, {
      replace: true
    });
  },
});