class ChangeMovementToInteger < ActiveRecord::Migration[5.2]
  def change
    remove_column :heros, :movement, :string
    add_column :heros, :movement, :integer
  end
end
