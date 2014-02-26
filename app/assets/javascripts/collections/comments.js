Facebook.Collections.Comments = Backbone.Collection.extend({

  model: Facebook.Models.Comment,

  url: function () {
    return this.user_id + '/posts/' + this.post_id + '/comments';
  },

  initialize: function(models, options) {
    this.user_id = options.user_id;
    this.post_id = options.post_id;
  }
})