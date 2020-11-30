class SetUpDepDestroyCharacterWeapons < ActiveRecord::Migration[5.2]
  def change
    remove_foreign_key :character_weapons, :characters
    add_foreign_key :character_weapons, :characters, on_delete: :cascade
  end
end
