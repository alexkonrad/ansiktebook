class FriendRequest < ActiveRecord::Base
  attr_accessible :recipient_id, :sender_id

  validates :recipient_id, :sender_id, presence: true

  belongs_to(
    :sender,
    class_name: "User",
    foreign_key: :sender_id,
    primary_key: :id
  )

  belongs_to(
    :recipient,
    class_name: "User",
    foreign_key: :recipient_id,
    primary_key: :id
  )
end
