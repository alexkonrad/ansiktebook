Facebook.Models.User = Backbone.Model.extend({
  initialize: function () {
  },

  parse: function (resp) {
    resp.posts = new Facebook.Collections.Posts(resp["posts"], { parse: true });
	  return resp;
  },
  toJSON: function () {

  }
});
