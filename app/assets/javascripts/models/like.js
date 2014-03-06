Facebook.Models.Like = Backbone.Model.extend({
  urlRoot: "/likes",
	toJSON: function () {

	  var data = {
			"likeable_id" : this.get('likeable_id'),
			"likeable_type" : this.get('likeable_type')
		};

	  return data;
	}
})