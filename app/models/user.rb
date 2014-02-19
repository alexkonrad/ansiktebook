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

  validates_attachment_content_type :profile_picture, content_type: %w(image/jpeg image/jpg image/png)

  has_many(
    :authored_posts,
    class_name: "Post",
    foreign_key: :author_id,
    primary_key: :id
  )

  has_many(
    :received_posts,
    class_name: "Post",
    foreign_key: :recipient_id,
    primary_key: :id
  )

  has_many(
    :photos,
    class_name: "Photo",
    foreign_key: :user_id,
    primary_key: :id
  )

  has_many(
    :likes,
    class_name: "Like",
    foreign_key: :user_id,
    primary_key: :id
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
