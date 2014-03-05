Facebook.Routers.Profile = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.user = options.user;
  },

  routes: {
    // // '' : 'index',
    // 'users/:id' : 'show',
    // 'users/:id/posts' : 'show',
    // 'users/:id/photos' : 'show'
  },

  index: function() {
    alert("in the index function")
    this.show(this.user.get('id'));
  },

  show: function(id) {
    var user = Facebook.users.findWhere({ id: parseInt(id) });
    console.log(user)

    var userProfileShowView = new Facebook.Views.UserProfileShow({
      model: user,
      collection: Facebook.users
    });

    this._swapView(userProfileShowView);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})