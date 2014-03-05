Facebook.Views.PostsIndex = Backbone.View.extend({
  template: JST['posts/index'],

  initialize: function () {
    this.listenTo(this.collection, "add remove", this.render);
  },
  events: {
    "click .profile-photos-index-link" : "photos",
  },
  render: function() {

    var renderedProfileNavView = JST['shared/profile_nav']({
      user: this.model
    });

    this.$el.html(renderedProfileNavView);

    var postNewView = new Facebook.Views.PostNew({
      collection: this.collection,
      model: this.model
    });

    this.$el.append(postNewView.render().$el);

    var that = this;
    this.collection.each(function(post) {
      var postShowView = new Facebook.Views.PostShow({
        model: post
      });

      that.$el.append(postShowView.render().$el);

    });

    this.$('.in-posts').wrapAll("<div class=\"posts\">");

    var userProfileShowView = new Facebook.Views.UserProfileShow({
      model: this.model,
      collection: this.collection
    });

    this.$el.prepend(userProfileShowView.render().$el);

    return this;
  },

  photos: function() {
    event.preventDefault();
    var url = '#/users/' + this.model.get('id') + "/photos"
	Backbone.history.navigate();
    Backbone.history.navigate(url);
  },
});
