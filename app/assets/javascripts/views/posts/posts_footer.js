Facebook.Views.PostFooter = Backbone.View.extend({
	className: "post-footer",
	template: JST["posts/post-footer"],
	initialize: function() {
    this.listenTo(this.collection, "add remove", this.render);
	},
	render: function () {
	    var renderedPostFooter = JST['posts/post_footer']({
	      post: this.model
	    });

	    this.$el.html(renderedPostFooter);

		var likeView = new Facebook.Views.LikesShow({
			model: this.model,
      collection: this.collection
		});
		this.$el.append(likeView.render().$el);

		return this;
	}
})