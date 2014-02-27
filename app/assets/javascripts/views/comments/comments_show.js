Facebook.Views.CommentShow = Backbone.View.extend({
  className: "post-footer-item comment group",
  template: JST['comments/show'],
  initialize: function () {
    this.listenTo(this.model, "all", this.render);
  },
  events: {
    "click .delete-comment-link" : "destroy"
  },
  render: function() {
    var renderedComment = this.template({
      comment: this.model
    });

    this.$el.html(renderedComment);

    console.log("comment show: ", this.$el)

    return this;
  },
  destroy: function (event) {
    event.preventDefault();
    console.log("destoying...")
    this.model.destroy();
  }
})