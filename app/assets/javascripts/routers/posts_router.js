Facebook.Routers.Posts = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.users = options.users;
  },

  routes: {
    '' : 'index',
    'users' : 'users',
    'users/:id' : 'user',
    'users/:id/posts' : 'posts',
    'users/:id/photos' : 'photos'
  },

  index: function () {
    var postsIndexView = new Facebook.Views.PostsIndex({
      collection: Facebook.currentUser.get('posts'),
      model: Facebook.currentUser
    });

    this._swapView(postsIndexView);
  },

  user: function(id) {
    id = parseInt(id);

    this.posts(id)
  },

  users: function () {
    var usersIndexView = new Facebook.Views.UsersIndex({
      collection: Facebook.users
    });

    this._swapView(usersIndexView);
  },

  photos: function (id) {
    // TODO: this should be prefetched at startup
    alert(id)
    var photos = new Facebook.Collections.Photos(null, { user_id: parseInt(id) });
    var that = this;
    photos.fetch({
      success: function (photos) {
        var user = Facebook.users.findWhere({ id: parseInt(id) });
        console.log(user);
        var photosIndexView = new Facebook.Views.PhotosIndex({
          collection: photos,
          model: user
        });

        that._swapView(photosIndexView);
      }
    })
  },

  posts: function (id) {
    // TODO: this should be prefetched at startup
    alert(id)
    var posts = new Facebook.Collections.Posts(null, { user_id: parseInt(id) });
    var that = this;
    posts.fetch({
      success: function (posts) {
        var user = Facebook.users.findWhere({ id: parseInt(id) });
        var postsIndexView = new Facebook.Views.PostsIndex({
          collection: posts,
          model: user
        });

        that._swapView(postsIndexView);
      }
    })
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
