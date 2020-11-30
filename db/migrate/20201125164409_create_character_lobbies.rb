class CreateCharacterLobbies < ActiveRecord::Migration[5.2]
  def change
    create_table :character_lobbies do |t|

      t.timestamps
    end
    add_reference :character_lobbies, :character, index: true, foreign_key: true
    add_reference :character_lobbies, :lobby, index: true, foreign_key: true
  end
end
