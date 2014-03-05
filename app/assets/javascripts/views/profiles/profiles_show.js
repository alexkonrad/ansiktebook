Facebook.Views.UserProfileShow = Backbone.View.extend({
  template: JST["profiles/show"],
  className: "profile",

  initialize: function () {
    // this.listenTo(this.collection, "all", this.render)
  },

  render: function () {
    var renderedProfile = this.template({
      user: this.model
    });

    this.$el.html(renderedProfile);

    var renderedUsersIndexView = new Facebook.Views.UsersIndex({
      collection: Facebook.users
    });

    this.$el.append(renderedUsersIndexView.render().$el);

    return this;
  }
})