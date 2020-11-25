class AddUserIdToCharacterLobby < ActiveRecord::Migration[5.2]
  def change
    add_column :character_lobbies, :user_id, :integer
  end
  add_reference :character_lobbies, :users, index: true, foreign_key: true

end
