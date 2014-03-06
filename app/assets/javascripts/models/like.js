Facebook.Models.Like = Backbone.Model.extend({
	urlRoot: "/likes",
	toJSON: function () {
	    var data = {
			"likeable_id" : "",
			"likeable_type" : ""
		};

	    return data;	
	}
})