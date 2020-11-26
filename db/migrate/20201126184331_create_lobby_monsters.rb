class CreateLobbyMonsters < ActiveRecord::Migration[5.2]
  def change
    create_table :lobby_monsters do |t|
      t.string :name
      t.integer :attack
      t.integer :defend
      t.integer :body
      t.integer :mind
      t.integer :movement
      t.string :image
      t.timestamps
    end
    add_reference :lobby_monsters, :lobbies, index: true, foreign_key: true
    add_reference :lobby_monsters, :monsters, index: true, foreign_key: true
  end
end
