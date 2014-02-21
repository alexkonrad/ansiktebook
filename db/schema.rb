# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20140221152825) do

  create_table "comments", :force => true do |t|
    t.integer  "user_id",          :null => false
    t.integer  "commentable_id",   :null => false
    t.string   "commentable_type", :null => false
    t.datetime "created_at",       :null => false
    t.datetime "updated_at",       :null => false
    t.string   "body",             :null => false
  end

  add_index "comments", ["commentable_id"], :name => "index_comments_on_commentable_id"
  add_index "comments", ["user_id"], :name => "index_comments_on_user_id"

  create_table "friend_requests", :force => true do |t|
    t.integer  "sender_id",    :null => false
    t.integer  "recipient_id", :null => false
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
  end

  add_index "friend_requests", ["recipient_id"], :name => "index_friend_requests_on_recipient_id"
  add_index "friend_requests", ["sender_id"], :name => "index_friend_requests_on_sender_id"

  create_table "friendships", :force => true do |t|
    t.integer  "user_id"
    t.integer  "friend_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "friendships", ["friend_id"], :name => "index_friendships_on_friend_id"
  add_index "friendships", ["user_id"], :name => "index_friendships_on_user_id"

  create_table "likes", :force => true do |t|
    t.integer  "likeable_id",   :null => false
    t.integer  "user_id",       :null => false
    t.string   "likeable_type", :null => false
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
  end

  add_index "likes", ["likeable_id"], :name => "index_likes_on_likeable_id"
  add_index "likes", ["user_id", "likeable_id", "likeable_type"], :name => "index_likes_on_user_id_and_likeable_id_and_likeable_type", :unique => true
  add_index "likes", ["user_id"], :name => "index_likes_on_user_id"

  create_table "notifications", :force => true do |t|
    t.integer  "user_id",         :null => false
    t.integer  "notifiable_id",   :null => false
    t.string   "notifiable_type", :null => false
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

  add_index "notifications", ["notifiable_id"], :name => "index_notifications_on_notifiable_id"
  add_index "notifications", ["user_id"], :name => "index_notifications_on_user_id"

  create_table "photos", :force => true do |t|
    t.integer  "user_id",               :null => false
    t.datetime "created_at",            :null => false
    t.datetime "updated_at",            :null => false
    t.string   "filename_file_name"
    t.string   "filename_content_type"
    t.integer  "filename_file_size"
    t.datetime "filename_updated_at"
  end

  add_index "photos", ["user_id"], :name => "index_photos_on_user_id"

  create_table "posts", :force => true do |t|
    t.string   "text"
    t.integer  "author_id",    :null => false
    t.integer  "recipient_id", :null => false
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
  end

  add_index "posts", ["author_id"], :name => "index_posts_on_author_id"
  add_index "posts", ["recipient_id"], :name => "index_posts_on_recipient_id"

  create_table "tags", :force => true do |t|
    t.integer  "tagger_id",  :null => false
    t.integer  "tagged_id",  :null => false
    t.integer  "photo_id",   :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "tags", ["tagged_id", "photo_id"], :name => "index_tags_on_tagged_id_and_photo_id", :unique => true
  add_index "tags", ["tagged_id"], :name => "index_tags_on_tagged_id"
  add_index "tags", ["tagger_id"], :name => "index_tags_on_tagger_id"

  create_table "users", :force => true do |t|
    t.string   "username",                     :null => false
    t.string   "email",                        :null => false
    t.string   "password_digest",              :null => false
    t.string   "session_token",                :null => false
    t.date     "birthday",                     :null => false
    t.text     "about"
    t.datetime "created_at",                   :null => false
    t.datetime "updated_at",                   :null => false
    t.string   "profile_picture_file_name"
    t.string   "profile_picture_content_type"
    t.integer  "profile_picture_file_size"
    t.datetime "profile_picture_updated_at"
  end

end
