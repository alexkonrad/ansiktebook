Facebook.Views.UserShow = Backbone.View.extend({
  className: "user",
  template: JST['users/show'],
  initialize: function () {
  },

  events: {
    "click .user-show-link" : "show"
  },

  render: function () {
    var renderedUser = this.template({
      user: this.model
    });

    this.$el.html(renderedUser);

    return this;
  },

  show: function (event) {
    event.preventDefault();
    var url = "#/users/" + this.model.get('id');
    Backbone.history.navigate(url);
  }
});
