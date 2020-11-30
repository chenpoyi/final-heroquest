class CreateCharacterArmors < ActiveRecord::Migration[5.2]
  def change
    create_table :character_armors do |t|
      
      t.timestamps
    end

    add_reference :character_armors, :character, index: true, foreign_key: true
    add_reference :character_armors, :armor, index: true, foreign_key: true
  end
end
