Facebook.Collections.Posts = Backbone.Collection.extend({

  model: Facebook.Models.Post,

  url: function () {
    return 'api/users/' + this.user.id + '/posts'
  },

  intialize: function (models, options) {
    this.user = options["user"];
  }
});
