json.(post, :id, :text, :created_at)

json.author do |json|
  json.(post.author, :id, :username, :profile_picture)
end

json.recipient do |json|
  json.(post.recipient, :id, :username, :profile_picture)
end

json.comments post.comments do |comment|
  json.(comment, :id, :body)
  json.author do |json|
    json.(comment.author, :id, :username, :profile_picture)
  end
end

json.likes do |json|
  json.(post.likes, :count)
end