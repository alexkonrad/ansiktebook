json.current_user_id current_user.id

json.partial! 'api/users/user', user: @user

json.friend_requests do |json|
  json.partial! 'api/users/user', collection: @users, as: :user
end

json.posts do |json|
  json.partial! 'api/posts/post', collection: @posts, as: :post
end