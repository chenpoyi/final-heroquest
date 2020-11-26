class RemoveColumnStatusLobbies < ActiveRecord::Migration[5.2]
  def change
    remove_column :lobbies, :status, :string
  end
end
