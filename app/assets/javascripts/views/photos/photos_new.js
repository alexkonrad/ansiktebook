Facebook.Views.PhotoNew = Backbone.View.extend({
  className: "in-posts photo-form post-form group",
  template: JST["photos/new"],
  initialize: function () {
  },

  events: {
    "submit" : "submit",
  },

  render: function () {
    this.$el.html(this.template());

    return this;
  },

  submit: function (event) {
    // event.preventDefault();
    // alert("uploading photo!!!")
    //
    // var data = this.$el.serializeJSON();
    // console.log(data)
    // var model = new Facebook.Models.Photo(data);
    // model.set({
    //   user: Facebook.currentUser,
    //   likes: {}
    // });
    //
    // var that = this;
    // model.save({}, {
    //   success: function (model) {
    //     alert("in the save calback")
    //     that.collection.unshift(model);
    //   }
    // });
  }
})