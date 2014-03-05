Facebook.Views.UserProfileShow = Backbone.View.extend({
  template: JST["profiles/show"],
  className: "profile",

  initialize: function () {
  },

  render: function () {
    var renderedProfile = this.template({
      user: this.model
    });

    this.$el.html(renderedProfile);

    return this;
  }
})