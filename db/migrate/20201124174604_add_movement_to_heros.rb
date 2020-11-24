class AddMovementToHeros < ActiveRecord::Migration[5.2]
  def change
    add_column :heros, :movement, :string
  end
end
