class Tag < ActiveRecord::Base
  attr_accessible :photo_id, :tagged_id, :tagger_id

  validates :photo_id, :tagged_id, :tagger_id, presence: true
  validates_uniqueness_of :tagged_id, scope: :photo_id

  belongs_to :photo

  belongs_to(
    :tagger,
    class_name: "User",
    foreign_key: :tagger_id,
    primary_key: :id
  )

  belongs_to(
    :tagged,
    class_name: "User",
    foreign_key: :tagged_id,
    primary_key: :id
  )

  has_many(
    :notifications,
    as: :notifiable,
    foreign_key: :notifiable_id,
    primary_key: :id
  )
end
