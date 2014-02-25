Facebook.Models.User = Backbone.Model.extend({
  initialize: function () {
    this.posts = new Facebook.Collections.Posts();
    this.posts.url = '/users/' + this.id + '/posts';
    this.posts.on("reset", this.updateCounts);
  }
  
  parse: function (response) {
  	  
	  return response;
  }
});
