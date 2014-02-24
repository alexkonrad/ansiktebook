class User < ActiveRecord::Base
  EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

  attr_accessible :about, :birthday, :email, :password_digest, :session_token, :username, :profile_picture
  attr_reader :password

  before_validation :ensure_session_token

  validates :birthday, :email, :password_digest, :session_token, :username, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :email, format: { with: EMAIL_REGEX }

  has_attached_file :profile_picture, styles: {
    large: "600x600#",
    small: "150x150#"
  }
  # => TODO: take default picture from asset pipeline or public folder
  #, default_url: ActionController::Base.helpers.asset_path("public/default-picture.jpg")

  validates_attachment_content_type :profile_picture, content_type: %w(image/jpeg image/jpg image/png)

  has_many :comments

  has_many :notifications

  has_many(
    :photo_taggings,
    class_name: "Tag",
    foreign_key: :tagged_id,
    primary_key: :id
  )

  has_many :tagged_photos, through: :photo_taggings, source: :photo

  # do i need to keep track of this?
  has_many(
    :photo_taggings_made,
    class_name: "Tag",
    foreign_key: :tagger_id,
    primary_key: :id
  )

  has_many(
    :friendships,
    class_name: "Friendship",
    foreign_key: :user_id,
  )

  has_many :friends, through: :friendships, source: :friend

  has_many(
    :inverse_friendships,
    class_name: "Friendship",
    foreign_key: :friend_id
  )

  has_many :inverse_friends, through: :inverse_friendships, source: :user

  has_many(
    :sent_friend_requests,
    class_name: "FriendRequest",
    foreign_key: :sender_id,
    primary_key: :id,
    dependent: :destroy
  )

  has_many(
    :received_friend_requests,
    class_name: "FriendRequest",
    foreign_key: :recipient_id,
    primary_key: :id,
    dependent: :destroy
  )

  has_many(
    :friend_requesters,
    through: :received_friend_requests,
    source: :sender
  )

  has_many(
    :authored_posts,
    class_name: "Post",
    foreign_key: :author_id,
    primary_key: :id,
    dependent: :destroy
  )

  has_many(
    :received_posts,
    class_name: "Post",
    foreign_key: :recipient_id,
    primary_key: :id,
    dependent: :destroy
  )

  has_many(
    :photos,
    class_name: "Photo",
    foreign_key: :user_id,
    primary_key: :id,
    dependent: :destroy
  )

  has_many(
    :likes,
    class_name: "Like",
    foreign_key: :user_id,
    primary_key: :id,
    dependent: :destroy
  )

  has_many(
    :liked_posts,
    through: :likes,
    source: :likeable,
    source_type: "Post"
  )

  has_many(
    :post_authors,
    through: :received_posts,
    source: :author
  )

  def self.find_by_credentials(email, password)
    user = self.find_by_email(email)

    user && user.is_password?(password) ? user : nil
  end

  def sent_friend_request?(user)
    !!find_friend_request_by_user_id(user.id)
  end

  def all_friends
    self.friends + self.inverse_friends
  end

  def is_friend?(user)
    self.friends.where(id: user.id).any? ||
    self.inverse_friends.where(id: user.id).any?
  end

  def mutual_friends_with(user)
    self.all_friends.select do |friend|
      friend.is_friend?(user)
    end
  end

  def find_friend_request_by_user_id(id)
    recipient = self
      .received_friend_requests
      .where(sender_id: id)
      .all
      .first

    return recipient if recipient

    sender = self
      .sent_friend_requests
      .where(recipient_id: id)
      .all
      .first

    return sender if sender
  end

  def find_friendship_by_user_id(id)
    friend = self
      .friendships
      .where(friend_id: id)
      .all
      .first

    return friend if friend

    inverse_friend = self
      .inverse_friendships
      .where(user_id: id)
      .all
      .first

    return inverse_friend if inverse_friend
  end

  def status
    self.received_posts.where(author_id: self.id)[0]
  end

  def password=(secret)
    self.password_digest = BCrypt::Password.create(secret)
  end

  def is_password?(secret)
    BCrypt::Password.new(self.password_digest).is_password?(secret)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64()
    self.save!
    self.session_token
  end

  private

    def ensure_session_token
      self.session_token = SecureRandom.urlsafe_base64()
    end
end
