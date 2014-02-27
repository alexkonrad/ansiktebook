Facebook.Views.PostsIndex = Backbone.View.extend({
  template: JST['posts/index'],

  initialize: function () {
    this.listenTo(this.collection, "add remove", this.render);
  },

  render: function() {
    var postNewView = new Facebook.Views.PostNew({
      collection: this.collection
    });

    this.$el.html(postNewView.render().$el);

    var that = this;
    this.collection.each(function(post) {
      var postShowView = new Facebook.Views.PostShow({
        model: post
      });

      that.$el.append(postShowView.render().$el);

      var renderedPost = that.template({
        post: post
      });

      that.$el.append(renderedPost);
    });

    return this;
  }

});
