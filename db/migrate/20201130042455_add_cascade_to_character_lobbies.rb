class AddCascadeToCharacterLobbies < ActiveRecord::Migration[5.2]
  def change
    remove_foreign_key :character_lobbies, :characters
    add_foreign_key :character_lobbies, :characters, on_delete: :cascade
  end
end
