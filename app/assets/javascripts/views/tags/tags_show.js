Facebook.Views.TagShow = Backbone.View.extend({
  initialize: function () {},
  className: "",
  template: JST["tags/show"],
  events: {
    "click .delete-tag" : "destroy"
  },
  render: function () {
    var renderedTag = this.template({
      tag: this.model
    });
    
    this.$el.html(renderedTag);
    
    return this;
  },
  destroy: function (event) {
    event.preventDefault();

    this.model.destroy();
  }
})