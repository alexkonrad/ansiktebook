Facebook.Views.PostShow = Backbone.View.extend({
  template: JST['posts/show'],
  className: "in-posts post",
  initialize: function() {
    this.listenTo(this.model, "all", this.render)
  },
  events: {
    "click .delete-post-link" : "destroy"
  },
  render: function() {
    var renderedPost = this.template({
      post: this.model
    });

    this.$el.html(renderedPost);

  	var postFooterView = new Facebook.Views.PostFooter({
  		model: this.model,
      collection: this.model.get('likes')
  	});

  	this.$el.append(postFooterView.render().$el);

    var postCommentsView = new Facebook.Views.CommentsIndex({
      collection: this.model.get('comments')
    });

    this.$el.append(postCommentsView.render().$el);

    var commentFormView = new Facebook.Views.CommentsForm({
      collection: this.model.get('comments'),
      model: this.model
    });

    this.$el.append(commentFormView.render().$el);

    return this;
  },
  destroy: function (event) {
    event.preventDefault();
    this.model.destroy();
  }
});
