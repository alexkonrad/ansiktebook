json.partial! 'users/user', user: @user

json.posts do |json|
  json.partial! 'users/wall', collection: @user.received_posts, as: :post
end
