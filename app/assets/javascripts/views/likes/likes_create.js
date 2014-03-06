Facebook.Views.LikesCreate = Backbone.View.extend({
  tagName: "form",
  className: "like",
  template: JST["likes/like"],
  events: {
	  "click .like" : "submit"
  },

  render: function () {
    var renderedLikeButton = this.template({
      post: this.model
    });

    this.$el.html(renderedLikeButton);

    return this;
  },
  
  submit: function (event) {
	  event.preventDefault();
	  
	  var data = this.$el.serializeJSON();
	  var model = new Facebook.Models.Like();
	  
	  model.set({
		  likeable_id: this.model.get('id'),
		  likeable_type: "Post"
	  });
	  
	  var that = this;
	  model.save({}, {
		  success: function (model) {
			  that.collection.push(model);
		  }
	  });
  }
});