class AddCascadeToCharacterPotions < ActiveRecord::Migration[5.2]
  def change
      remove_foreign_key :character_potions, :characters
      add_foreign_key :character_potions, :characters, on_delete: :cascade
  end
end
 