json.current_user_id current_user.id

json.users do |json|
  json.partial! 'users/user', collection: @users, as: :user
end