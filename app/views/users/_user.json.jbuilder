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