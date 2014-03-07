Facebook.Models.Post = Backbone.Model.extend({
  parse: function (resp) {
    resp.author = new Facebook.Models.User(resp["author"]);
    resp.recipient = new Facebook.Models.User(resp["recipient"]);
    resp.comments = new Facebook.Collections.Comments(resp["comments"], {
      commentable: this
    });
  	resp.likes = new Facebook.Collections.Likes(resp["likes"], {
  		likeable: this
  	});

    return resp;
  },

  urlRoot: "/posts",

  toJSON: function () {
    var data = { "user_id" : this.get('recipient').get('id'),
                 "post" : { "text" : this.get('text') }};

    return data;
  }
});
