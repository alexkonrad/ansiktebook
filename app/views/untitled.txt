json.commentable_id comments.first.commentable_id
json.commentable_type comments.first.commentable_type

json.comments comments do |comment|
  json.(comment, :id, :body, :created_at)
  json.author do |json|
    json.(comment.author, :id, :username, :profile_picture)
    json.profile_picture comment.author.profile_picture.url(:small)
  end
end