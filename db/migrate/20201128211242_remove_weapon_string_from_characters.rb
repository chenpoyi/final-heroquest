class RemoveWeaponStringFromCharacters < ActiveRecord::Migration[5.2]
  def change
    remove_column :characters, :weapon, :string
  end
end
