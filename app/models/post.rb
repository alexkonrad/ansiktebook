class Post < ActiveRecord::Base
  attr_accessible :author_id, :recipient_id, :text

  validates :author_id, :recipient_id, :text, presence: true

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id
  )

  belongs_to(
    :recipient,
    class_name: "User",
    foreign_key: :recipient_id,
    primary_key: :id
  )
end