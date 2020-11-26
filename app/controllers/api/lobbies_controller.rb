class Api::LobbiesController < ApplicationController
  def users 
    

    @players = CharacterLobby.where(:lobbies_id => params[:id])
    
    puts @players.inspect
    @array = @players.map{|player| 
      @user_id = player.user_id
      puts @user_id
      User.find_by(id: @user_id)
    }
    puts @array.inspect
    render :json => {
      users: @array
    }
  end
  
end
