# Facebook Clone
**An almost-fully functional clone of Facebook.**
## Models
###User
  * attributes: `username`, `email`, `password_digest`, `session_token`, `birthday`, `about`

  * relations: has many `Posts`

  * has many `LikedPosts` through `PostLikes`

  * has many `Friendships`, has many `Friends` thru `Friendships`

  * has many `Notifications`, has many `PostLikes`


###Post
  * attributes: `text`, `image`, `user_id`

  * relations: belongs to `user`, has many `PostLikes`, belongs to 'recipient'

###PostLike
  * belongs to `Post`

  * belongs to `User`


###PostTag
  * belongs to `Post`

  * belongs to `User`


###Friendship
  * attributes: `friend_id`, `friended_id`

  * belongs to `friend`, belongs_to `friender`


###Notification
  * belongs to `User`

  * belongs to `Action` (polymorphic on `Post`, `Friendship`, `PostTags`)

  * attr: `seen`, `user_id`, `action_id`


## Routes
###Static Pages
  * "/" GET: `StaticPages`#`index`

###Users
  * "users/new" GET: `Users`#`new`

  * "users/create" POST: `Users`#`create`

  * "users" GET: `Users`#`index`

  * "users/:id" GET: `Users`#`show`

  * "users/:id/edit" GET: `Users`#`edit`

  * "users/:id" PUT: `Users`#`update`

  * "users/:id" DELETE: `Users`#`destroy`

  * "Users/:id/posts" GET: `Posts`#`index`

  * "Users/:id/feed" GET: `Posts`#`feed`

  * "Users/:id/wall" GET: `Posts`#`wall`


###Sessions
  * "sessions/new" GET: `Sessions`#`new`

  * "sessions" POST: `Sessions`#`create`

  * "sessions" DELETE: `Sessions`#`create`


###Posts
  * "posts/new" GET: `Posts`#`new`

  * "posts/:id" GET: `Posts`#`show`

  * "posts" POST: `Posts`#`create`

  * "posts/:id/edit" GET: `Posts`#`edit`

  * "posts/:id" PUT: `Posts`#`update`

  * "posts/:id" DELETE: `Posts`#`destroy`


###Friends
  * `friends` POST: `Friendships`#`request`

  * `friends` PUT: `Friendships`#`approve_or_deny`

  * `friends` DELETE: `Friendships`#`unfriend`


###PostLikes
  * `post_likes` POST: `PostLikes`#`like`

  * `post_likes` DELETE: `PostLikes`#`unlike`


###PostTags
  * `post_tags` POST: `PostTags`#`tag`

  * `post_tags` DELETE: `PostTags`#`untag`

###Notifications
  * `notifications` GET: `Notifications`#`index`

##API Routes
TODO: write API Routes

## Itinerary
#### Formatting
##### Splash
  * splash login screen put labels above inputs, arrange correctly
  * reformat signup page, float right on page
  * find something to put n left side
  * change button CSS style for post show options
##### Navbar
  * add Friends button
  * add icons to home, profile, settings, button etc
  * add logout button
  * make it thinner
  * make a photo logo to replace the text button
  * add a search bar with magnifying glass
##### Profile
  * allow editing profile attributes on the page
  * remove border, background transparent
  * make about box editable on click
##### Friends
  * add partial to show small icons of top six friends with names
  * light blue banner with darker top-border
  * link to full friends page (or specific friend profile)
##### Posts
  * make inactive tabs light blue, add info tab
  * add yellow (notepad style) note box for flashes
  * remove border from post box, use borders from outside elements
  * group posts by day (using light gray bar saying today/yesterday/may)