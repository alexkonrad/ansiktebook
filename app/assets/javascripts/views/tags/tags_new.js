Facebook.Views.TagsNew = Backbone.View.extend({
  initialize: function () {},
  className: "",
  template: JST["tags/new"],
  events: {
    "submit" : "submit"
  },
  render: function () {
    var renderedNewTag = this.template({});
    
    this.$el.html(renderedNewTag);
    
    return this;
  },
  submit: function (event) {
    event.preventDefault();
    
    var data = this.$el.serializeJSON();
    console.log(data);
  }
})