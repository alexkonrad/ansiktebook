Facebook.Routers.Users = Backbone.Router.extend({
  initialize: function (users, $rootEl) {
    this.users = users;
    this.$rootEl = $rootEl;
  },

  routes: {
    '' : 'index',
    'users/:id' : 'show'
  },

  index: function () {
    var userIndexView = new Facebook.Views.UserIndex({
      collection: this.users
    });

    this._swapView(userIndexView);
  },

  show: function (id) {
    var userShowView = new Facebook.Views.UserShow({
      model: this.users.get(id)
    });

    this._swapView(userShowView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
