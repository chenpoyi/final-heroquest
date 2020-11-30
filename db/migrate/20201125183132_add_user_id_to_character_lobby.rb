class AddUserIdToCharacterLobby < ActiveRecord::Migration[5.2]
  def change
    add_reference :character_lobbies, :user, index: true, foreign_key: true
    
  end

end
