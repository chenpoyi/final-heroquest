class AddWeaponsToHeros < ActiveRecord::Migration[5.2]
  def change
    add_column :heros, :weapon, :string
  end
end
