class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.integer :tagger_id, null: false
      t.integer :tagged_id, null: false
      t.integer :photo_id, null: false

      t.timestamps
    end

    add_index :tags, :tagger_id
    add_index :tags, :tagged_id
    add_index :tags, [:tagged_id, :photo_id], unique: true
  end
end
