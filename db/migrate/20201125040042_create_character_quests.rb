class CreateCharacterQuests < ActiveRecord::Migration[5.2]
  def change
    create_table :character_quests do |t|

      t.timestamps
    end
    add_reference :character_quests, :characters, index: true, foreign_key: true
    add_reference :character_quests, :quests, index: true, foreign_key: true
  end
end
