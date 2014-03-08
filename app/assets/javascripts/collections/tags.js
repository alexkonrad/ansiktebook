Facebook.Collections.Tags = Backbone.Collection.extend({
  model: Facebook.Models.Tag,
  
  url: function () {
    return "/users/" + this.taggable.get('user').get('id') + "/photos/" + this.taggable.get('id') + "/tags";
  },
  
  initialize: function(models, options) {
    this.taggable = options.taggable;
    this.add(models);
  },
})