json.(photo, :id, :filename)

json.user do |json|
  json.(photo.user, :id, :username, :profile_picture)  
end

json.comments photo.comments do |comment|
  json.(comment, :id, :body)
  json.user do |json|
    json.(comment.author, :id, :username, :profile_picture)
  end
end

json.likes do |json|
  json.(photo.likes, :count)
end