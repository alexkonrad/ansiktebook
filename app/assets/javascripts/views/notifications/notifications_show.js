Facebook.Views.NotificationShow = Backbone.View.extend({
  initialize: function () {},
  className: "notification",
  template: JST["notifications/show"],
  events: {},
  render: function () {
    var renderedNotification = this.template({
      notification: this.model
    });

    this.$el.html(renderedNotification);

    return this;
  }
})