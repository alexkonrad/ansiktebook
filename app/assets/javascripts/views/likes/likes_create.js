Facebook.Views.LikesCreate = Backbone.View.extend({
  tagName: "form",
  className: "like",
  template: JST["likes/like"],
  events: {
	  "submit" : "submit"
  },

  initialize: function () {
	  this.listenTo(this.model, "all", this.render)

  },

  render: function () {
    var renderedLikeButton = this.template({
      post: this.model
    });

    this.$el.html(renderedLikeButton);

    return this;
  },

  submit: function (event) {
    event.preventDefault();

    var data = this.$el.serializeJSON();
    // var model = new Facebook.Models.Like();
    //
    // model.set({
    //   likeable_id: this.model.get('id'),
    //   likeable_type: "Post"
    // });
    //
    // model.save();
    //
    // this.model.get('likes').push(model);

        this.model.get('likes').create({
          likeable_id: this.model.get('id'),
          likeable_type: "Post",
          user_id: Facebook.currentUser.get('id')
        });
  }
});