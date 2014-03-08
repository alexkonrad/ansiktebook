Facebook.Models.Tag = Backbone.Model.extend({
  urlRoot: "/tags",
  toJSON: function () {
    var data = {
      "photo_id" : this.get('photo_id'),
      "tagged_id" : this.get('tagged_user_id'),
      "tagger_id" : Facebook.currentUser.get('id')      
    };
    
    return data;
  }
})