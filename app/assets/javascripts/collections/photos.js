Facebook.Collections.Photos = Backbone.Collection.extend({

  model: Facebook.Models.Photo,

  initialize: function (models, options) {
    this.add(models);
    this.user_id = options.user_id;
  },

  url: function () {
    return '/users/' + this.user_id + '/photos';
  },
})