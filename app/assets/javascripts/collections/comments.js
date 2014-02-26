Facebook.Collections.Comments = Backbone.Collection.extend({

  model: Facebook.Models.Comment,

  url: function () {
    return this.post.get('user_id') + '/posts/' + this.post.get('id') + '/comments';
  },

  initialize: function(models, options) {
    this.post = options.post;
  }
})