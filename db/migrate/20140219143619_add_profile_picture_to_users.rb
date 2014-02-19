class AddProfilePictureToUsers < ActiveRecord::Migration
  def self.up
    change_table :users do |t|
      t.attachment :profile_picture
    end
  end

  def self.down
    drop_attached_file :users, :profile_picture
  end
end
