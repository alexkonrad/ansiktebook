Facebook.Views.LikesShow = Backbone.View.extend({
  className: "post-footer-item likes",
  className: "likes",
  template: JST["likes/show"],

  initialize: function () {
	  this.listenTo(this.model.get('likes'), "add remove", this.render)
  },

  render: function () {
    if (_.contains(this.model.get('liking_user_ids'), Facebook.currentUser.get('id'))) {
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