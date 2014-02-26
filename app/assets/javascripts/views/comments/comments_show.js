Facebook.Views.Comments = Backbone.View.extend({
  className: "group",
  template: JST["comments/comment"],
  render: function() {
    console.log(this.model)
    var renderedComment = this.template({
      comment: this.model
    });

    this.$el.html(renderedComment);

    return this;
  }
})