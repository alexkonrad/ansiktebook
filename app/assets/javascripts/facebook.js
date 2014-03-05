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

        // new Facebook.Routers.Profile({
        //   $rootEl: $(".profile"),
        //   user: Facebook.currentUser
        // });

        Backbone.history.start();
      }
    });
  }
};
