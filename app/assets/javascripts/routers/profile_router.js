Facebook.Routers.Profile = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.users = options.users;
  },

  routes: {
    '' : 'index',
    'users/:id/posts' : 'posts',
    'users/:id/photos' : 'photos'
  },

  index: function () {
    var postsIndexView = new Facebook.Views.PostsIndex({
      collection: Facebook.currentUser.get('posts')
    });

    this._swapView(postsIndexView);
  },

  photos: function (id) {
    // TODO: this should be prefetched at startup
    // TODO: write the same function but for posts
    var photos = new Facebook.Collections.Photos(null, { user_id: id });
    var that = this;
    photos.fetch({
      success: function (photos) {
        console.log(photos);
        var photosIndexView = new Facebook.Views.PhotosIndex({
          collection: photos
        });

        that._swapView(photosIndexView);
      }
    })
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
