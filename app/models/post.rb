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

  has_many(
    :comments,
    as: :commentable,
    foreign_key: :commentable_id,
    primary_key: :id,
    dependent: :destroy
  )

  has_many(
    :likes,
    as: :likeable,
    foreign_key: :likeable_id,
    primary_key: :id,
    dependent: :destroy
  )

  # note: is this necessary? or right?
  has_many(
    :liking_users,
    through: :likes,
    source: :user
  )

  def liked_by?(user)
    self.likes.where(user_id: user).any?
  end
end
