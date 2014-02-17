# Facebook Clone
**An almost-fully functional clone of Facebook.**
## Models
###User
  * attributes: `username`, `email`, `password_digest`, `session_token`, `birthday`, `about`
  * relations: has many `PhotoPosts`, has many `TextPosts`, has many `Posts`
  * has many `Friendships`, has many `Friends` thru `Friendships`
  * has many `Notifications`, has many `PostLikes`,
  * has many `LikedPosts` through `PostLikes`

###PhotoPost
  * attributes: `image`, `user_id`
  * relations: belongs to `user`, has many `PostLikes`
###TextPost
  * attributes: `text`, `user_id`
  * relations: belongs to `user`, has many `PostLikes`
###Friendship
  * attributes: `friend_id`, `friended_id`
  * belongs to `friend`, belongs_to `friender`
###PostLike
  * belongs to `Post`
  * belongs to `User`
###PostTag
  * belongs to `Post`
  * belongs to `User`
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
  * "users/:id/edit" GET: `Users`#`edit
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
##API Routes
TODO: write API Routes