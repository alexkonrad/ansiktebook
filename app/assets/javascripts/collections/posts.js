Facebook.Collections.Posts = Backbone.Collection.extend({

  model: Facebook.Models.Post,

  url: function () {
    return 'api/users/' + this.user_id + '/posts';
  },

  // url: "/api/users",

  initialize: function (models, options) {
    this.user_id = options.user_id;
  }
});
