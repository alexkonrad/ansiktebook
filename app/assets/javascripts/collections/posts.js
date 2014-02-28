Facebook.Collections.Posts = Backbone.Collection.extend({

  model: Facebook.Models.Post,

  initialize: function (models, options) {
    this.add(models);
    this.user_id = options.user_id;
  },

  url: function () {
    return '/users/' + this.user_id + '/posts';
  },
});
