Facebook.Collections.Comments = Backbone.Collection.extend({

  model: Facebook.Models.Comment,

  url: function () {
    return '/users/' + this.post.get('recipient').get('id') + '/posts/' + this.post.get('id') + '/comments';
  },

  initialize: function(models, options) {
    this.commentable = options.commentable;
    this.add(models);
  },
})