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
      success: function (users) {
        // Facebook.history = new Backbone.History();
        Facebook.currentUser = users.findWhere({id: Facebook.current_user_id});
        new Facebook.Routers.Profile({
          $rootEl: $(".posts"),
          users: Facebook.users
        })
        Backbone.history.start();
        // Facebook.history.start({ pushState: true });
      }
    });
  }
};

$(document).ready(function(){
  Facebook.initialize();
});
