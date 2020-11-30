class CreateCharacterWeapons < ActiveRecord::Migration[5.2]
  def change
    create_table :character_weapons do |t|
      t.timestamps
    end
    add_reference :character_weapons, :character, index: true, foreign_key: true
    add_reference :character_weapons, :weapon, index: true, foreign_key: true
  end
end
