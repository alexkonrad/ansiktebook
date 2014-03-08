Facebook.Views.TagShow = Backbone.View.extend({
  initialize: function () {},
  className: "",
  template: JST["tags/show"],
  events: {},
  render: function () {
    var renderedTag = this.template({
      tag: this.model
    });
    
    this.$el.html(renderedTag);
    
    return this;
  }
})