class AddBodyToComments < ActiveRecord::Migration
  def change
    change_table :comments do |t|
      t.string :body, null: false
    end
  end
end
