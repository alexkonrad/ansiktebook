Facebook.Views.TagsNew = Backbone.View.extend({
  initialize: function () {},
  className: "",
  template: JST["tags/new"],
  events: "",
  render: function () {
    var renderedNewTag = this.template({});
    
    this.$el.html(renderedNewTag);
    
    return this;
  }
})