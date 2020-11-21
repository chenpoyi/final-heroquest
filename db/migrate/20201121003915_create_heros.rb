class CreateHeros < ActiveRecord::Migration[5.2]
  def change
    create_table :heros do |t|
      t.string :race
      t.integer :attack
      t.integer :defend
      t.integer :body
      t.integer :mind
      t.string :image
    end
  end
end
