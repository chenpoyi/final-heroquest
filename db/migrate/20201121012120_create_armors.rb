class CreateArmors < ActiveRecord::Migration[5.2]
  def change
    create_table :armors do |t|
      t.string :name
      t.integer :price
      t.integer :defense
      t.boolean :wizard
      t.string :description
      t.string :image
      t.timestamps
    end
  end
end
