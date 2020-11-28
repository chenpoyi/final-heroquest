class AddColumnCharactersAttackDefendMovementInteger < ActiveRecord::Migration[5.2]
  def change
    add_column :characters, :attack, :integer
    add_column :characters, :defend, :integer
    add_column :characters, :movement, :integer
  end
end
