Facebook.Views.NotificationsIndex = Backbone.View.extend({
  initialize: function () {},
  className: "notifications",
  template: JST["notifications/index"],
  events: {},
  render: function () {
    var renderedNotifications = this.template({
      notifications: this.collection
    });

    this.$el.html(renderedNotifications);

    var that = this;
    this.collection.each(function (notification) {
      var renderedNotificationShow = new Facebook.Views.NotificationShow({
        model: notification
      });

      that.$el.append(renderedNotificationShow.render().$el);
    });

    return this;
  }
})