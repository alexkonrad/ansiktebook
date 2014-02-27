json.(user, :id, :username, :profile_picture, :email, :birthday, :about)

json.friend_requests do |json|
  json.partial! 'users/friend_requests', collection: user.friend_requesters, as: :users
end

json.posts do |json|
  json.partial! 'posts/post', collection: user.received_posts, as: :post
end