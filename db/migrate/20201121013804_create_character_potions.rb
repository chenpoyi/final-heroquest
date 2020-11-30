class CreateCharacterPotions < ActiveRecord::Migration[5.2]
  def change
    create_table :character_potions do |t|
      t.integer :quantity
      t.timestamps
    end
    add_reference :character_potions, :character, index: true, foreign_key: true
    add_reference :character_potions, :weapon, index: true, foreign_key: true
  end
end
