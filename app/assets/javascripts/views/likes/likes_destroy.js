Facebook.Views.LikesDestroy = Backbone.View.extend({
  tagName: "form",
  className: "unlike",
  template: JST["likes/unlike"],
  events: {
	  "submit" : "submit"
  },
  
  render: function () {
    var renderedUnlikeButton = this.template({
      post: this.model
    });

    this.$el.html(renderedUnlikeButton);
  console.log(this.model)

    return this;
  },
  
  submit: function (event) {
	  event.preventDefault();
	  
	  var data = this.$el.serializeJSON();
	  console.log(this.model)

	  var model = this.model.get('likes').findWhere({ 
		  user_id: Facebook.currentUser.get('id')
	  });
	  
	  model.destroy();
  }
});