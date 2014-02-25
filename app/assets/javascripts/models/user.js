Facebook.Models.User = Backbone.Model.extend({
  initialize: function () {
  },

  parse: function (resp) {
    if (resp["posts"]) {
      this.posts.add(resp["posts"]);
    }
	  return resp;
  },

  posts: function () {
    if (!this.get('posts')) {
      var newPosts = new Facebook.Collections.Posts([], {
        user: this
      });
      this.set({
        posts: newPosts
      });
    }
    return this.get('posts');
  }
});
