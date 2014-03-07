Facebook.Views.PostFooter = Backbone.View.extend({
	className: "post-footer group",
	template: JST["posts/post-footer"],
	initialize: function() {
    this.listenTo(this.collection, "add remove", this.render);
	},
	render: function () {
	  var likeView = new Facebook.Views.LikesShow({
	    model: this.model,
        collection: this.collection
      });
	  this.$el.html(likeView.render().$el);

    var renderedPostFooter = JST['posts/post_footer']({
      post: this.model
    });

    this.$el.append(renderedPostFooter);

		return this;
	}
})