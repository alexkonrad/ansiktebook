class Comment < ActiveRecord::Base
  attr_accessible :commentable_id, :commentable_type, :user_id, :body

  validates :commentable_id, :commentable_type, :user_id, :body, presence: true

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )

  belongs_to(
    :commentable,
    polymorphic: true,
    foreign_key: :commentable_id,
    primary_key: :id
  )

  has_many(
    :notifications,
    as: :notifiable,
    foreign_key: :notifiable_id,
    primary_key: :id
  )
end
