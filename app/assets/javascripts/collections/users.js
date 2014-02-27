Facebook.Collections.Users = Backbone.Collection.extend({

  model: Facebook.Models.User,
  url: '/users',
  parse: function (resp) {
    return resp.users
  }

});
