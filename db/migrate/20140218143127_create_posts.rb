class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :text
      t.integer :author_id
      t.integer :recipient_id

      t.timestamps
    end

    add_index :posts, :author_id
    add_index :posts, :recipient_id
  end
end
