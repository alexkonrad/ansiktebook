Facebook.Collections.Comments = Backbone.Collection.extend({

  model: Facebook.Models.Comment,

  url: function () {
    return '/users/' + this.commentable.get('recipient').get('id') + '/posts/' + this.commentable.get('id') + '/comments';
  },

  initialize: function(models, options) {
    this.commentable = options.commentable;
    this.add(models);
  },
})