Facebook.Views.PhotosIndex = Backbone.View.extend({
  template: JST['photos/index'],
  className: "user-photos-index",

  initialize: function () {
    this.listenTo(this.collection, "add remove", this.render);
  },
  events: {
    "click .profile-posts-index-link" : "posts",
    "click .profile-users-index-link" : "users"
  },

  render: function() {
    var renderedProfileNavView = JST['shared/profile_nav']({
      user: this.model
    });

    this.$el.html(renderedProfileNavView);

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

      var renderedPhoto = that.template({
        photo: photo
      });

      that.$el.append(renderedPhoto);
    });

    return this;
  },

  posts: function() {
    event.preventDefault();
    var url = '#/users/' + this.model.get('id') + "/posts"
    Backbone.history.navigate(url, {
      replace: true
    });
  },

  users: function() {
    event.preventDefault();
    var url = '#/users';
    Backbone.history.navigate(url, {
      replace: true
    });
  }
});