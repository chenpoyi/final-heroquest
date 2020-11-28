class AddMovementWeaponsToHeros < ActiveRecord::Migration[5.2]
  def change
    add_column :heros, :default_weapon, :integer
  end
end
