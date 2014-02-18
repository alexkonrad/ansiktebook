class TextPost < ActiveRecord::Base
  attr_accessible :body

  # => TODO: should i make these singular? or wrap them up in the post class
  has_many :posts, as: :content
  has_many :users, through: :posts, source: :user
end
