Facebook.Views.PhotoShow = Backbone.View.extend({
  template: JST['photos/show'],
  className: "photo",
  initialize: function() {
    this.listenTo(this.model, "all", this.render)
  },
  events: {
    "click .delete-photo-link" : "destroy"
  },
  render: function() {
    var renderedPhoto = this.template({
      photo: this.model,
      link: true
    });

    this.$el.html(renderedPhoto);

    var renderedPhotoFooter = JST['photos/photo_footer']({
      post: this.model
    });

    this.$el.append(renderedPhotoFooter);

    // var postCommentsView = new Facebook.Views.CommentsIndex({
    //   collection: this.model.get('comments')
    // });
    //
    // this.$el.append(postCommentsView.render().$el);
    //
    // var commentFormView = new Facebook.Views.CommentsForm({
    //   post: this.model,
    // });
    //
    // this.$el.append(commentFormView.render().$el);


    return this;
  },
  destroy: function (event) {
    event.preventDefault();
    this.model.destroy();
  }

});
