Facebook.Views.PostsIndex = Backbone.View.extend({
  template: JST['posts/index'],

  initialize: function () {
    this.listenTo(this.collection, "add remove", this.render);
  },
  events: {
    "click .profile-photos-index-link" : "photos",
    "click .profile-users-index-link" : "users"
  },
  render: function() {
    var renderedProfileNavView = JST['shared/profile_nav']({
      user: this.model
    });
    console.log(this.el)
    this.$el.html(renderedProfileNavView);

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
      console.log(that.el)
    });

    return this;
  },

  photos: function() {
    event.preventDefault();
    var url = '#/users/' + this.model.get('id') + "/photos"
    Backbone.history.navigate(url);
  },

  users: function() {
    event.preventDefault();
    var url = '#/users';
    Backbone.history.navigate(url);
  }
});
