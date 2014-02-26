Facebook.Models.Comment = Backbone.Model.extend({
  initialize: function() {
    this.set({
      author: new Facebook.Models.User(this.get('author'))
    })
  },
  parse: function(resp) {
    // var author = new Facebook.Models.User(resp["author"]);
    // resp.author = author;
    resp.author = new Facebook.Models.User(resp["author"]);

    console.log(resp)

    return resp;
  }
})