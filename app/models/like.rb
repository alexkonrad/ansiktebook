class Like < ActiveRecord::Base
  attr_accessible :user_id, :likeable_id, :likeable_type

  validates_uniqueness_of :user_id, scope: [:likeable_id, :likeable_type]

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )

  belongs_to(
    :likeable,
    polymorphic: true,
    foreign_key: :likeable_id,
    primary_key: :id
  )

  has_many(
    :notifications,
    as: :notifiable,
    foreign_key: :notifiable_id,
    primary_key: :id
  )
end
