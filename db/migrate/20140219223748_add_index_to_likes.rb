class AddIndexToLikes < ActiveRecord::Migration
  def change
    add_index :likes, [:user_id, :likeable_id, :likeable_type], unique: true
  end
end
