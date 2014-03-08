Facebook.Views.TagsIndex = Backbone.View.extend({
  initialize: function () {},
  className: "",
  template: JST["tags/index"],
  events: {},
  render: function () {
    var renderedTagsIndex = this.template({
      collection: this.collection
    });
    
    this.$el.html(renderedTagsIndex);
    
    var that = this;
    this.collection.each(function (tag) {
      var tagShowView = new Facebook.Views.TagShow({
        model: tag
      });
      
      that.$el.append(tagShowView.render().$el);
    });
    
    // change collection to something else
    var newTagView = new Facebook.Views.TagsNew({
      collection: this.collection
    });
    
    this.$el.append(newTagView.render().$el);
    
    return this;
  }
})