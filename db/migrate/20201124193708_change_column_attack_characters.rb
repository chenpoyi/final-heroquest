class ChangeColumnAttackCharacters < ActiveRecord::Migration[5.2]
  def change
    change_column :characters, :attack, :string
  end
end
