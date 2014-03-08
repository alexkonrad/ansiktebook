Facebook.Views.LikesDestroy = Backbone.View.extend({
  tagName: "form",
  className: "unlike",
  template: JST["likes/unlike"],
  events: {
	  "submit" : "submit"
  },

  initialize: function () {
	  this.listenTo(this.model, "all", this.render)
  },

  render: function () {
    var renderedUnlikeButton = this.template({
      post: this.model
    });

    this.$el.html(renderedUnlikeButton);

    return this;
  },

  submit: function (event) {
	  event.preventDefault();
	  var data = this.$el.serializeJSON();

	  var model = this.model.get('likes').findWhere({
		  user_id: Facebook.currentUser.get('id')
	  });

    model.destroy();
  }
});