Facebook.Views.PostShow = Backbone.View.extend({
  template: JST['posts/show'],
  className: "post",

  render: function() {
    var renderedPost = this.template({
      post: this.model
    });

    this.$el.html(renderedPost);

    var renderedPostFooter = JST['posts/post_footer']({
      post: this.model
    });

    this.$el.append(renderedPostFooter);

    return this;
  }

});
