json.partial! 'api/users/user', user: @user

json.posts do |json|
  json.partial! 'api/users/wall', collection: @user.received_posts, as: :post
end
