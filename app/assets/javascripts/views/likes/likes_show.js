Facebook.Views.LikesShow = Backbone.View.extend({
  className: "post-footer-item likes",

  template: JST["likes/show"],

  render: function () {
    if (this.model.liking_user_ids.contains(Facebook.current_user.id)) {
      this.className = "likes can-like";

      var likesCreateView = new Facebook.Views.LikesCreate({
        post: this.model
      });

      this.$el.html(likesCreateView.render().$el);
    } else {
      var likesDestroyView = new Facebook.Views.LikesDestroy({
        post: this.model
      });

      this.$el.html(likesDestroyView.render().$el);
    }

    return this;
  }
})