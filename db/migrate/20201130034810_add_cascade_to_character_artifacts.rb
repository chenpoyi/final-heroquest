class AddCascadeToCharacterArtifacts < ActiveRecord::Migration[5.2]
  def change
    remove_foreign_key :character_artifacts, :characters
    add_foreign_key :character_artifacts, :characters, on_delete: :cascade
  end
end
