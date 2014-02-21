class CreateNotifications < ActiveRecord::Migration
  def change
    create_table :notifications do |t|
      t.integer :user_id, null: false
      t.integer :notifiable_id, null: false
      t.string :notifiable_type, null: false

      t.timestamps
    end

    add_index :notifications, :user_id
    add_index :notifications, :notifiable_id
  end
end
