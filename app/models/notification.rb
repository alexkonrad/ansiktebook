class Notification < ActiveRecord::Base
  attr_accessible :notifiable_id, :notifiable_type, :user_id

  validates :user_id, :notifiable_id, presence: true

  belongs_to :user
  belongs_to(
    :notifiable,
    polymorphic: true,
    foreign_key: :notifiable_id,
    primary_key: :id
  )
end
