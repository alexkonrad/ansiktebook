window.Facebook = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log('Hello from Backbone!');
    // var $rootEl = $("#content");
    // var users = new Facebook.Collections.Users();
    // users.fetch({
    //   success: function() {
    //     new Facebook.Routers.Users(users, $rootEl);
    //   }
    // });
    // Backbone.history.start();
  }
};

$(document).ready(function(){
  Facebook.initialize();

  var $postContainerEl = $(".posts");
  var userModel = new Facebook.Models.User({id: 1});
  var posts = new Facebook.Collections.Posts([], { user_id: 1 });
  posts.fetch({
    success: function () {
      var postsPartial = new Facebook.Views.Posts({
        collection: posts
      })
    },
  });
  // userModel.fetch({
  //   success: function() {
  //     var postsPartial = new Facebook.Views.Posts({
  //       collection: userModel.get('posts')
  //     });
  //   }
  // })

  var userShowView = new Facebook.Views.UsersShow({
    model: userModel
  });
});
