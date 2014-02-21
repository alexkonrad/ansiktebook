class Friendship < ActiveRecord::Base
  attr_accessible :user_id, :friend_id

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )

  belongs_to(
    :friend,
    class_name: "User",
    foreign_key: :friend_id,
    primary_key: :id
  )

  has_many(
    :notifications,
    as: :notifiable,
    foreign_key: :notifiable_id,
    primary_key: :id
  )
end
