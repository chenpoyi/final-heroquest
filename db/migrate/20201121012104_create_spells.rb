class CreateSpells < ActiveRecord::Migration[5.2]
  def change
    create_table :spells do |t|
      t.string :name
      t.string :description
      t.boolean :chaos
      t.string :image
      t.timestamps
    end
  end
end
