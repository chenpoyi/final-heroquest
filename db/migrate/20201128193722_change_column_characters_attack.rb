class ChangeColumnCharactersAttack < ActiveRecord::Migration[5.2]
  def change
    change_column :characters, :attack, :integer
  end
end
