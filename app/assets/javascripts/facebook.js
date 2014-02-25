window.Facebook = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log('Hello from Backbone!');
    var $rootEl = $("#content");
    var users = new Facebook.Collections.Users();
    users.fetch({
      success: function() {
        new Facebook.Routers.Users(users, $rootEl);
      }
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Facebook.initialize();
});
