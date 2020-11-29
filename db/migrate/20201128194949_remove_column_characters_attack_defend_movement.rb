class RemoveColumnCharactersAttackDefendMovement < ActiveRecord::Migration[5.2]
  def change
    remove_column :characters, :attack, :string
    remove_column :characters, :defend, :string
    remove_column :characters, :movement, :string
  end
end
