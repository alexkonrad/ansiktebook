Facebook.Models.Comment = Backbone.Model.extend({


  parse: function(resp) {
    var author = new Facebook.Models.User(resp["author"]);
    resp.author = author;

    return resp;
  }
})