class AddWeaponToCharacters < ActiveRecord::Migration[5.2]
  def change
    add_column :characters, :weapon, :string
  end
end
