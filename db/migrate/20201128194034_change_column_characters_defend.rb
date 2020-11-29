class ChangeColumnCharactersDefend < ActiveRecord::Migration[5.2]
  def change
    change_column :characters, :defend, :integer
  end
end
