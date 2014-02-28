Facebook.Views.PhotosIndex = Backbone.View.extend({
  template: JST['photos/index'],

  initialize: function () {
    this.listenTo(this.collection, "add remove", this.render);
  },
  events: {
    "click .profile-posts-index-link" : "posts"
  },

  render: function() {
    alert("rendering photo index view")
    var photoNewView = new Facebook.Views.PhotoNew({
      collection: this.collection
    });

    this.$el.html(photoNewView.render().$el);

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
    var url = 'users/' + Facebook.currentUser.get('id') + "/posts"
    Backbone.history.navigate(url, {
      replace: true
    });
  }

});