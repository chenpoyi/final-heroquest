class AddCascadeToCharacterQUests < ActiveRecord::Migration[5.2]
  def change
    remove_foreign_key :character_quests, :characters
    add_foreign_key :character_quests, :characters, on_delete: :cascade
  end
end
