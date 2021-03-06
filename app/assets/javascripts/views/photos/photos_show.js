Facebook.Views.PhotoShow = Backbone.View.extend({
  template: JST['photos/show'],
  className: "in-posts photo",
  initialize: function() {
    this.listenTo(this.model, "all", this.render)
  },
  events: {
    "click .delete-photo-link" : "destroy",
    "click .photo-show-link" : "show",
    "click .photos-index-link" : "index"
  },
  render: function() {
    var renderedPhoto = this.template({
      photo: this.model,
      small: true
    });

    this.$el.html(renderedPhoto);

    var renderedPhotoFooter = JST['photos/photo_footer']({
      post: this.model
    });

    this.$el.append(renderedPhotoFooter);

    return this;
  },

  show: function () {
    event.preventDefault();
    $("body").addClass("has-active-modal")

    var renderedPhoto = this.template({
      photo: this.model,
      small: false
    });
    
    this.$el.html(renderedPhoto);
        
    var postFooterView = new Facebook.Views.PostFooter({
      model: this.model,
          collection: this.model.get('likes')
    });
    
    this.$el.append(postFooterView.render().$el.addClass('in-photo-modal'));
    
    var photoTagsView = new Facebook.Views.TagsIndex({
      collection: this.model.get('tags')
    });

    this.$el.append(photoTagsView.render().$el.addClass('in-photo-modal'));

    var photoCommentsView = new Facebook.Views.CommentsIndex({
      collection: this.model.get('comments')
    });

    this.$el.append(photoCommentsView.render().$el);

    var commentFormView = new Facebook.Views.CommentsForm({
      model: this.model,
      collection: this.model.get('comments')
    });
    
    console.log(this.model)

    this.$el.append(commentFormView.render().$el);

    this.$('.in-photo-modal').wrapAll("<div class=\"photo-modal-box\">");
    this.$('.photo-modal-box').wrap("<div class=\"photo-show-modal\">");

  },

  index: function () {
    var renderedPhoto = this.template({
      photo: this.model,
      small: true
    });

    this.$el.html(renderedPhoto);
  },

  destroy: function (event) {
    event.preventDefault();
    this.model.destroy();
  }

});
