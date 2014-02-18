class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :likeable_id, null: false
      t.integer :user_id, null: false
      t.string :likeable_type, null: false

      t.timestamps
    end

    add_index :likes, :user_id
    add_index :likes, :likeable_id
    add_index :likes, [:user_id, :likeable_id], unique: true
  end
end
