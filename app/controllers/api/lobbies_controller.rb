class Api::LobbiesController < ApplicationController
  def users 
    

    @players = CharacterLobby.where(:lobby_id => params[:id])
    
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

  def characters 
    

    @players = CharacterLobby.where(:lobby_id => params[:id])
    
    puts @players.inspect
    @array = @players.map{|player| 
      @character_id = player.character_id
      puts @character_id
      Character.find_by(id: @character_id)
    }
    puts '-------'
    puts @array.inspect
    render :json => {
      characters: @array
    }
  end
  def add_characters
    @character = CharacterLobby.find_by(user_id: params[:user_id], lobby_id: params[:lobby_id])
    @character.character_id = params[:character_id]
    @character.save
    puts @character
  end
end
