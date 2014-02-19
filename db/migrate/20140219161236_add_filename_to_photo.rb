class AddFilenameToPhoto < ActiveRecord::Migration
  def self.up
    change_table :photos do |t|
      t.attachment :filename
    end
  end

  def self.down
    drop_attached_file :photos, :filename
  end
end
