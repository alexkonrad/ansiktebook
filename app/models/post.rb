class Post < ActiveRecord::Base
  attr_accessible :content_id, :user_id

  belongs_to :content, polymorphic: true
  belongs_to :user

  # => TODO: name this something else. it's just a wrapper to keep things simple
  # => or maybe wrap it up in the user model
  def data
    content.body.first
  end
end
