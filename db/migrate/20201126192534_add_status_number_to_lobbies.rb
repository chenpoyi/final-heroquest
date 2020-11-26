class AddStatusNumberToLobbies < ActiveRecord::Migration[5.2]
  def change
    add_column :lobbies, :status, :integer
  end
end
