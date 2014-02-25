Facebook.Views.UsersIndex = Backbone.View.extend({

  template: JST['users/index'],

  render: function () {

    var renderedContent = this.template({
      posts: this.collection
    });

    this.$el.html(renderedContent);

    return this;
  }

});
