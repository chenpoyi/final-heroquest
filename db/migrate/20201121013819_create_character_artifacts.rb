class CreateCharacterArtifacts < ActiveRecord::Migration[5.2]
  def change
    create_table :character_artifacts do |t|

      t.timestamps
    end

    add_reference :character_artifacts, :characters, index: true, foreign_key: true
    add_reference :character_artifacts, :artifacts, index: true, foreign_key: true

  end
end
