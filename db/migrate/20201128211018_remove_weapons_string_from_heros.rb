class RemoveWeaponsStringFromHeros < ActiveRecord::Migration[5.2]
  def change
    remove_column :heros, :weapon, :string
  end
end
