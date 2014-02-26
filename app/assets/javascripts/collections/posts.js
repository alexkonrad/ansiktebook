Facebook.Collections.Posts = Backbone.Collection.extend({

  model: Facebook.Models.Post,

  url: function () {
    return '/users/' + this.user_id + '/posts';
  },

  initialize: function (models, options) {
    this.user_id = options.user_id;
  }
});
