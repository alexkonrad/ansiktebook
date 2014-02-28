json.(photo, :id, :filename)
json.photo_small photo.filename.url(:small)
json.photo_large photo.filename.url(:large)
json.created_at time_ago_in_words(photo.created_at)

json.user do |json|
  json.(photo.user, :id, :username, :profile_picture)
  json.profile_picture photo.user.profile_picture.url(:small)
end

json.comments photo.comments do |comment|
  json.(comment, :id, :body, :created_at)
  json.post_id post.id
  json.user do |json|
    json.(comment.author, :id, :username, :profile_picture)
    json.profile_picture comment.author.profile_picture.url(:small)
  end
end

json.likes do |json|
  json.(photo.likes, :count)
end


json.liking_user_ids photo.likes.pluck(:user_id)

json.current_user_id current_user.id