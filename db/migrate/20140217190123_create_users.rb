class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, unique: true, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.date :birthday, null: false
      t.text :about

      t.timestamps
    end
  end
end
