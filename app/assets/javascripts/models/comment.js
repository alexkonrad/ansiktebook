Facebook.Models.Comment = Backbone.Model.extend({
  initialize: function() {
    this.set({
      author: new Facebook.Models.User(this.get('author'))
    })
  },

  toJSON: function() {
    var data = {
      "comment" : {
        "body" : this.get("body"),
        "commentable_type" : this.get("commentable_type"),
        "commentable_id" : this.get("commentable_id"),
        "user_id" : Facebook.currentUser.id
      }
    };
    return data;
  }
})