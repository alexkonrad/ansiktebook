Facebook.Views.PostsIndex = Backbone.View.extend({
  template: JST['posts/index'],

  initialize: function () {
    this.listenTo(this.collection, "add remove", this.render);
  },
  events: {
    "click .profile-photos-index-link" : "photos"
  },
  render: function() {
    var renderedProfileNavView = JST['shared/profile_nav']({
      user: Facebook.currentUser
    });

    this.$el.append(renderedProfileNavView);

    var postNewView = new Facebook.Views.PostNew({
      collection: this.collection
    });

    this.$el.append(postNewView.render().$el);

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
    });

    return this;
  },

  photos: function() {
    event.preventDefault();
    var url = '#/users/' + Facebook.currentUser.get('id') + "/photos"
    Backbone.history.navigate(url);
  }

});
