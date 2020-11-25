class CreateCharacterLobbies < ActiveRecord::Migration[5.2]
  def change
    create_table :character_lobbies do |t|

      t.timestamps
    end
    add_reference :character_lobbies, :characters, index: true, foreign_key: true
    add_reference :character_lobbies, :lobbies, index: true, foreign_key: true
  end
end
