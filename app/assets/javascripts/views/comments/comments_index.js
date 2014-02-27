Facebook.Views.CommentsIndex = Backbone.View.extend({
  className: "post-footer-item all-comments",
  initialize: function () {
    this.listenTo(this.collection, "add", this.render);
  },
  template: JST["comments/index"],
  render: function () {
    var that = this;
    this.collection.each(function (comment) {
      var commentShowView = new Facebook.Views.CommentShow({
        model: comment
      });

      that.$el.append(commentShowView.render());
    });

    return this;
  }
})