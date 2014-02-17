class User < ActiveRecord::Base
  EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

  attr_accessible :about, :birthday, :email, :password_digest, :session_token, :username
  attr_reader :password

  before_validation :ensure_session_token

  validates :birthday, :email, :password_digest, :session_token, :username, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :email, format: { with: EMAIL_REGEX }

  def self.find_by_credentials(email, password)
    user = self.find_by_email(email)

    user && user.is_password?(password) ? user : nil
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
