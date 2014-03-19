# Ansiktebook

Facebook clone in Rails and Backbone.js. Implements users, friendships and friend requests, posts, photos, tags, likes, notifications, etc. Uses polymorphic associations for models, XHR/HTTP response capability for controllers, and a Backbone.js front-end for a single-page style application (but is also fully functional as a static web application). Below are some of its features followed by a TODO list.

## Features

### Front-end
#### Backbone.js Router
 * Monitors and changes page views
 * makes XHR requests to the Rails JSON API
```ruby
Facebook.Routers.Posts = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.users = options.users;
  },

  routes: {
    '' : 'index',
    'users' : 'users',
    'users/:id' : 'user',
    'users/:id/posts' : 'posts',
    'users/:id/photos' : 'photos'
  },

  index: function () {
    this.posts(Facebook.currentUser.get('id'))
  },

  user: function(id) {
    id = parseInt(id);

    this.posts(id)
  },

  users: function () {
    var usersIndexView = new Facebook.Views.UsersIndex({
      collection: Facebook.users
    });

    this._swapView(usersIndexView);
  },

  photos: function (id) {
    // TODO: this should be prefetched at startup
    var photos = new Facebook.Collections.Photos(null, { user_id: parseInt(id) });
    var that = this;
    photos.fetch({
      success: function (photos) {
        var user = Facebook.users.findWhere({ id: parseInt(id) });
        var photosIndexView = new Facebook.Views.PhotosIndex({
          collection: photos,
          model: user
        });

        that._swapView(photosIndexView);
      }
    })
  },

  posts: function (id) {
    // TODO: this should be prefetched at startup
    var posts = new Facebook.Collections.Posts(null, { user_id: parseInt(id) });
    var that = this;
    posts.fetch({
      success: function (posts) {
        var user = Facebook.users.findWhere({ id: parseInt(id) });
        var postsIndexView = new Facebook.Views.PostsIndex({
          collection: posts,
          model: user
        });

        that._swapView(postsIndexView);
      }
    })
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
```

#### Backbone.js Views
 * Index view renders all associated views on the page:
 ```ruby
 render: function() {
   var renderedNotifications = new Facebook.Views.NotificationsIndex({
     collection: Facebook.currentUser.get('notifications')
   });

   this.$el.html(renderedNotifications.render().$el);

   var renderedProfileNavView = JST['shared/profile_nav']({
     user: this.model
   });

   this.$el.append(renderedProfileNavView);

   var postNewView = new Facebook.Views.PostNew({
     collection: this.collection,
     model: this.model
   });

   this.$el.append(postNewView.render().$el);

   var that = this;
   this.collection.each(function(post) {
     var postShowView = new Facebook.Views.PostShow({
       model: post
     });

     that.$el.append(postShowView.render().$el);

   });

   this.$('.in-posts').wrapAll("<div class=\"posts\">");

   var userProfileShowView = new Facebook.Views.UserProfileShow({
     model: this.model,
     collection: this.collection
   });

   this.$el.prepend(userProfileShowView.render().$el);

   return this;
 },
 ```
 * the main function of the posts index view is to render each individual post on a wall:
 ```ruby
  render: function() {
    var renderedPost = this.template({
     post: this.model
    });

    this.$el.html(renderedPost);

    var postFooterView = new Facebook.Views.PostFooter({
    model: this.model,
     collection: this.model.get('likes')
    });

    this.$el.append(postFooterView.render().$el);

    var postCommentsView = new Facebook.Views.CommentsIndex({
     collection: this.model.get('comments')
    });

    this.$el.append(postCommentsView.render().$el);

    var commentFormView = new Facebook.Views.CommentsForm({
     collection: this.model.get('comments'),
     model: this.model
    });

    this.$el.append(commentFormView.render().$el);

    return this;
  },
 ```
 * and so on...

#### Backbone.js XHR requests and JSON responses
 * `parse` function (todo: keep a local store of all these):
 ```ruby
 parse: function (resp) {
   resp.author = new Facebook.Models.User(resp["author"]);
   resp.recipient = new Facebook.Models.User(resp["recipient"]);
   resp.comments = new Facebook.Collections.Comments(resp["comments"], {
     commentable: this
   });

 	 resp.likes = new Facebook.Collections.Likes(resp["likes"], {
 	 	likeable: this
 	 });

   return resp;
 },
 ```
 * `toJSON` for XHR requests (to construct what goes into the `params` hash)
 ```ruby
 toJSON: function () {
   var data = { "user_id" : this.get('recipient').get('id'),
                "post" : { "text" : this.get('text') }};

   return data;
 }
 ```
#### Backbone.js on startup
 * `initialize` function on pageload
 ```ruby
   Facebook.users = new Facebook.Collections.Users();
   Facebook.users.fetch({
     success: function (users, response) {
       Facebook.currentUser = users.findWhere({id: response.current_user_id});

       new Facebook.Routers.Posts({
         $rootEl: $(".wrapper"),
         users: Facebook.users
       });

       var notifications = Facebook.currentUser.get('notifications').length;
       if (notifications > 0) {
         $('.notifications-button').toggleClass('has-notifications');
         $('.new-notifications').append(notifications)
       }
       $('.notifications-button').on("click", function (event) {
         event.preventDefault();
         $('.new-notifications').remove();
       })

       Backbone.history.start();
     }
   });
 ```
### Controllers
 * Serve static pages for every route
 * Use JBuilder to template JSON for the Backbone front-end
#### JBuilder Templates
 * the `user` template (sent on pageload):
```ruby
json.(user, :id, :username, :email, :birthday, :about)
json.status user.status.text if user.status
json.profile_picture user.profile_picture.url(:small)
json.large_profile_picture user.profile_picture.url(:large)

json.friend_requests do |json|
  json.partial! 'users/friend_requests', collection: user.friend_requesters, as: :users
end

json.notifications do |json|
  json.partial! 'shared/notification', collection: user.notifications.limit(10), as: :notification
end

json.posts do |json|
  json.partial! 'posts/post', collection: user.received_posts, as: :post
end
```
 * the `post` template:
```ruby
json.(post, :id, :text)
json.created_at time_ago_in_words(post.created_at)

json.commentable_id post.id
json.commentable_type "Post"

json.author do |json|
  json.(post.author, :id, :username, :profile_picture)
  json.profile_picture post.author.profile_picture.url(:small)
end

json.recipient do |json|
  json.(post.recipient, :id, :username, :profile_picture)
  json.profile_picture post.recipient.profile_picture.url(:small)
end

json.comments post.comments do |comment|
  json.(comment, :id, :body, :created_at)
  json.author do |json|
    json.(comment.author, :id, :username, :profile_picture)
    json.profile_picture comment.author.profile_picture.url(:small)
  end
end

json.likes post.likes do |like|
  json.(like, :id, :likeable_id, :likeable_type, :user_id)
end

json.liking_user_ids post.likes.pluck(:user_id)

json.current_user_id current_user.id
```
 * Prefetches associated data with `includes`, etc.

### Models
#### Polymorphic Associations
 * `notifiable`
   Friend Requests, Likes, Posts, Tags, Comments (basically everything is `notifiable`). A user `has_many` notifications
   ```ruby
     has_many(
       :notifications,
       as: :notifiable,
       foreign_key: :notifiable_id,
       primary_key: :id
     )
   ```
 * `likeable`
   ```ruby
     belongs_to(
       :likeable,
       polymorphic: true,
       foreign_key: :likeable_id,
       primary_key: :id
     )
   ```
 * `taggable`
 * `commentable`

#### All models
 * User
 * Post
 * Photo
 * FriendRequest
 * Friendship
 * Tag (Polymorphic)
 * Like (Polymorphic)
 * Notification (Polymorphic)
 * Comment (Polymorphic)

### Views
 * Partials for every static page element
 * Currently building those partials into the Backbone front-end


## TODO

### Backbone

### Rails

#### Application
  * Add privacy settings

#### Presentation

##### Splash
  * reformat signup page, float right on page
  * find something to put on left side

##### Navbar
  * add Friends button
  * add icons to home, profile, settings, button etc
  * add logout button
  * make a photo logo to replace the text button (?)
  * add a search bar with magnifying glass

##### Profile
  * allow editing profile attributes on the page
  * make about box editable on click

##### Friends
  * add partial to show small icons of top six friends with names

##### Posts
  * add yellow (notepad style) note box for flashes (?)
  * group posts by day (using light gray bar saying today/yesterday/may)
