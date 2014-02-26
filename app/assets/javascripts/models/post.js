Facebook.Models.Post = Backbone.Model.extend({
  // comments: function () {
  //   if (!this.get('comments')) {
  //     var comments = new Facebook.Collections.Comments([], {
  //       user_id: this.user_id,
  //       post_id: this.id
  //     });
  //     this.set({
  //       comments: comments
  //     });
  //   }
  //   return this.get('comments');
  // },
  //
  // author: function () {
  //   if (!this.get('author')) {
  //
  //     this.set({
  //       author: Facebook.users.add({
  //         id: this.author_id
  //       })
  //     })
  //   }
  // },

  parse: function (resp) {
    var author = new Facebook.Models.User(resp["author"]);
    var recipient = new Facebook.Models.User(resp["recipient"]);
    var comments = new Facebook.Collections.Comments([], {
      user_id: this.user_id,
      post_id: this.id
    });

    resp.author = author;
    resp.recipient = recipient;
    resp.comments = comments

    return resp;
  },
  // toJSON: function () {
  //
  // }
});
