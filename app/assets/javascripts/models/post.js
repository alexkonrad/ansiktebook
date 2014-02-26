Facebook.Models.Post = Backbone.Model.extend({
  parse: function (resp) {
    resp.author = new Facebook.Models.User(resp["author"]);
    resp.recipient = new Facebook.Models.User(resp["recipient"]);
    resp.comments = new Facebook.Collections.Comments(resp["comments"], {
      post: this
    });

    return resp;
  },
  // TODO:
  toJSON: function () {
   // DO THIS NEXT
  }
});
