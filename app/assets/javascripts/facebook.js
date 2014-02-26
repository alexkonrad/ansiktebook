window.Facebook = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log('Hello from Backbone!');
  }
};

$(document).ready(function(){
  Facebook.initialize();
  var $postContainerEl = $(".posts");
  var posts = new Facebook.Collections.Posts([], { user_id: 3 });
  posts.fetch({
    success: function (posts) {
      var postsPartial = new Facebook.Views.Posts({
        collection: posts
      });

      $postContainerEl.html(postsPartial.render().$el);
    }
  });


  // userModel.fetch({
  //   success: function() {
  //     var postsPartial = new Facebook.Views.Posts({
  //       collection: userModel.get('posts')
  //     });
  //   }
  // })
  //
  // var userShowView = new Facebook.Views.UsersShow({
  //   model: userModel
  // });
});
