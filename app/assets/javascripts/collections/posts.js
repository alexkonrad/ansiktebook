Facebook.Collections.Posts = Backbone.Collection.extend({

  model: Facebook.Models.Post,

  initialize: function (models, options) {
    this.add(models)
  },

  url: function () {
    return '/users/' + this.user_id + '/posts';
  },
});
