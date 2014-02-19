class Photo < ActiveRecord::Base
  attr_accessible :user_id, :filename

  validates :user_id, presence: true

  has_attached_file :filename, styles: {
    large: "400x600>",
    small: "200x200>"
  }

  validates_attachment_content_type :filename, content_type: %w(image/jpeg image/jpg image/png)

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )

  has_many(
    :likes,
    as: :likeable,
    foreign_key: :likeable_id,
    primary_key: :id
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
