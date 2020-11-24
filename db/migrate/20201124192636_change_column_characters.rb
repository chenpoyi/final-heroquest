class ChangeColumnCharacters < ActiveRecord::Migration[5.2]
  def change
    change_column :characters, :defend, :string
  end
end
