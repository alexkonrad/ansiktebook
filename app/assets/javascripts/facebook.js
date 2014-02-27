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
        var currentUser = users.findWhere({id: Facebook.current_user_id});
        Facebook.currentUser = currentUser;
        var $postContainerEl = $(".posts");

        console.log(Facebook.users, currentUser);

        var posts = new Facebook.Views.PostsIndex({
          collection: currentUser.get('posts')
        });

        $postContainerEl.html(posts.render().$el);

        // var posts = new Facebook.Collections.Posts([], { user_id: 3 });
        // posts.fetch({
        //   success: function (posts) {
        //     var postsPartial = new Facebook.Views.Posts({
        //       collection: posts
        //     });
        //
        //     $postContainerEl.html(postsPartial.render().$el);
        //   }
        // });
      }
    });
  }
};

$(document).ready(function(){
  Facebook.initialize();
});
