Facebook.Views.CommentShow = Backbone.View.extend({
  className: "group",
  template: JST['comments/show'],
  initialize: function () {
    this.listenTo(this.model, "all", this.render);
  },
  render: function() {
    var renderedComment = this.template({
      comment: this.model
    });

    this.$el.html(renderedComment);

    console.log(this.$el)

    return this;
  }
})