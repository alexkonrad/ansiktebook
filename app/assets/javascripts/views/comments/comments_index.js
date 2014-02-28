Facebook.Views.CommentsIndex = Backbone.View.extend({
  className: "comments-index",
  initialize: function () {
    this.listenTo(this.collection, "add remove", this.render);
  },
  template: JST["comments/index"],
  render: function () {
    this.$el.html("");

    var that = this;
    this.collection.each(function (comment) {
      var commentShowView = new Facebook.Views.CommentShow({
        model: comment
      });

      that.$el.append(commentShowView.render().$el);
    });

    return this;
  }
})