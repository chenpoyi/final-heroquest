class CreateWeapons < ActiveRecord::Migration[5.2]
  def change
    create_table :weapons do |t|
      t.string :name
      t.integer :price
      t.integer :attack
      t.boolean :wizard
      t.string :description
      t.string :image
      t.timestamps
    end
  end
end
