class CreateCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :attack
      t.integer :defend
      t.integer :body
      t.integer :mind
      t.integer :gold

      t.timestamps
    end

    add_reference :characters, :user, index: true, foreign_key: true
    add_reference :characters, :hero, index: true, foreign_key: true
  end
end
