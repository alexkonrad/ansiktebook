Facebook.Views.LikesShow = Backbone.View.extend({
  className: "post-footer-item likes",
  className: "likes",
  template: JST["likes/show"],

  initialize: function () {
  },

  render: function () {
    if (this.collection.findWhere({ user_id: Facebook.currentUser.get('id') })) {
      var likesDestroyView = new Facebook.Views.LikesDestroy({
        model: this.model
      });

      this.$el.html(likesDestroyView.render().$el);
    } else {
      this.$el.addClass('can-like');

      var likesCreateView = new Facebook.Views.LikesCreate({
        model: this.model
      });

      this.$el.html(likesCreateView.render().$el);
    }

    return this;
  }
})