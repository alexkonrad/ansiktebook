class CreateFriendRequests < ActiveRecord::Migration
  def change
    create_table :friend_requests do |t|
      t.integer :sender_id, null: false
      t.integer :recipient_id, null: false

      t.timestamps
    end

    add_index :friend_requests, :sender_id
    add_index :friend_requests, :recipient_id
  end
end
