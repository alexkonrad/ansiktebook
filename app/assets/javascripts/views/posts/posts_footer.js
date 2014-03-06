Facebook.Views.PostFooter = Backbone.View.extend({
	className: "post-footer",
	template: JST["posts/post-footer"],
	initialize: function() {
		
	},
	render: function () {
	    var renderedPostFooter = JST['posts/post_footer']({
	      post: this.model
	    });

	    this.$el.html(renderedPostFooter);
		
		var likeView = new Facebook.Views.LikesShow({
			model: this.model
		});
		console.log(this.model)
		this.$el.append(likeView.render().$el);
		
		return this;
	}
})