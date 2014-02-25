Facebook.Models.User = Backbone.Model.extend({
  urlRoot: "/api/users",
  initialize: function (options) {
    this.id = options.id
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
  },
  parse: function (resp) {
    if (resp["posts"]) {
      this.posts().add(resp["posts"]);
    }
	  return resp;
  },
  toJSON: function () {

  }
});
