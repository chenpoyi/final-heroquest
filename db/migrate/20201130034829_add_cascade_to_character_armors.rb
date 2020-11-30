class AddCascadeToCharacterArmors < ActiveRecord::Migration[5.2]
  def change
    remove_foreign_key :character_armors, :characters
    add_foreign_key :character_armors, :characters, on_delete: :cascade
  end
end
