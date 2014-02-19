class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :photos, :user_id
  end
end
