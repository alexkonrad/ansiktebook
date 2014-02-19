class RemoveIndexFromLikes < ActiveRecord::Migration
  def up
    change_table :likes do |t|
      t.remove_index column: [:user_id, :likeable_id]
    end
  end

  def down
    add_index :likes, [:user_id, :likeable_id], unique: true
  end
end
