json.current_user_id current_user.id

json.partial! 'users/user', user: @user

json.friend_requests do |json|
  json.partial! 'users/user', collection: @users, as: :user
end

json.posts do |json|
  json.partial! 'posts/post', collection: @posts, as: :post
end