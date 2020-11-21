class CreateMonsters < ActiveRecord::Migration[5.2]
  def change
    create_table :monsters do |t|
      t.string :name
      t.integer :attack
      t.integer :defend
      t.integer :body
      t.integer :mind
      t.integer :movement
      t.string :image
      t.timestamps
    end
  end
end
