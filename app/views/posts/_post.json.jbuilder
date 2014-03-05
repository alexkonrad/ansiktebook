json.(post, :id, :text)
json.created_at time_ago_in_words(post.created_at)

json.commentable_id post.id
json.commentable_type "Post"

json.author do |json|
  json.(post.author, :id, :username, :profile_picture)
  json.profile_picture post.author.profile_picture.url(:small)
end

json.recipient do |json|
  json.(post.recipient, :id, :username, :profile_picture)
  json.profile_picture post.recipient.profile_picture.url(:small)
end

json.comments post.comments do |comment|
  json.(comment, :id, :body, :created_at)
  json.author do |json|
    json.(comment.author, :id, :username, :profile_picture)
    json.profile_picture comment.author.profile_picture.url(:small)
  end
end

json.likes do |json|
  json.(post.likes, :count)
end

json.liking_user_ids post.likes.pluck(:user_id)

json.current_user_id current_user.id