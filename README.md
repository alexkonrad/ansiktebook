# Facebook Clone
**An almost-fully functional clone of Facebook.
## Models
###User
  attributes: username, email, password digest, session token, birthday, about
  relations: has many PhotoPosts, has many TextPosts, has many Posts
             has many Friendships, has many Friends thru Friendships
             has many Notifications, has many PostLikes,
             has many LikedPosts through PostLikes

###PhotoPost
  attributes: `image`, `user_id`
  relations: belongs to `user`, has many `PostLikes`
###TextPost
  attributes: `text`, `user_id`
  relations: belongs to `user`, has many `PostLikes`
###Friendships
  attributes: `friend_id`, `friended_id`
  belongs to `friend`, belongs_to `friender`
###PostLikes
  belongs to `Post`
  belongs to `User`
###PostTags
###Notification
  belongs to `User`
  belongs to `Action` (polymorphic on `Post`, `Friendship`, `PostTags`)
  attr: `seen`, `user_id`, `action_id`