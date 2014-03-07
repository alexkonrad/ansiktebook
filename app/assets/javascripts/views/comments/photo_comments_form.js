// Facebook.Views.CommentsForm = Backbone.View.extend({
//   tagName: "form",
//   className: "post-footer-item new-comment in-photo-modal",
//   template: JST["comments/new"],
//   initialize: function () {
//   },
//
//   events: {
//     "submit" : "submit",
//   },
//
//   render: function () {
//     var renderedCommentForm = this.template({
//       commentable_id: this.model.get('commentable_id')
//     });
//
//     this.$el.html(renderedCommentForm);
//
//     return this;
//   },
//
//   submit: function (event) {
//     event.preventDefault();
//     var data = this.$el.serializeJSON();
//
//     var model = new Facebook.Models.Comment(data);
//     event.currentTarget.reset();
//
//     model.set({
//       commentable_type: this.commentable_type,
//       author: Facebook.currentUser
//     });
//
//     var that = this;
//     model.save({}, {
//       success: function (model) {
//       }
//     });
//
//     this.collection.add(model);
//
//   }
// })