Facebook.Collections.Posts = Backbone.Collection.extend({

  model: Facebook.Models.Post,

  url: function () {
    // for static_pages
    // return 'users/' + this.user_id + '/posts';

    // for user show page
    return '/users/' + this.user_id + '/posts';
  },

  // url: "/api/users",

  initialize: function (models, options) {
    this.user_id = options.user_id;
  }
});
