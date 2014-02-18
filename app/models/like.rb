class Like < ActiveRecord::Base
  attr_accessible :user_id, :likeable_id, :likeable_type

  validates :user_id, uniqueness: [scope: :likeable_id]

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
end
