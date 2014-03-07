Facebook.Collections.Notifications = Backbone.Collection.extend({
  model: Facebook.Models.Notification,

  url: function () {
    return "/users/" + this.user_id + "/notifications"
  },

  initialize: function (models, options) {
    this.notifiable = options.notifiable;
    this.add(models);
  }
})