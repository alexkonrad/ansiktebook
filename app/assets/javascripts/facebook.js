window.Facebook = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log('Hello from Backbone!');

    // also bootstrap instead of fetch
    // search for users
    Facebook.users = new Facebook.Collections.Users();
    Facebook.users.fetch({
      success: function (users, response) {
        Facebook.currentUser = users.findWhere({id: response.current_user_id});

        new Facebook.Routers.Posts({
          $rootEl: $(".wrapper"),
          users: Facebook.users
        });

        var notifications = Facebook.currentUser.get('notifications').length;
        if (notifications > 0) {
          $('.notifications-button').toggleClass('has-notifications');
          $('.new-notifications').append(notifications)
        }
        $('.notifications-button').on("click", function (event) {
          event.preventDefault();
          $('.new-notifications').remove();
        })

        Backbone.history.start();
      }
    });
  }
};
