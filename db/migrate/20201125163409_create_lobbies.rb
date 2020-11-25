class CreateLobbies < ActiveRecord::Migration[5.2]
  def change
    create_table :lobbies do |t|
      t.string :name
      t.string :url
      t.string :status
      t.timestamps
    end
  end
end
