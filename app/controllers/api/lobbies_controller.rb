class Api::LobbiesController < ApplicationController
  def users 
    

    @players = CharacterLobby.where(:lobbies_id => params[:id])
    
    puts @players.inspect
    @array = @players.map{|player| 
      @user_id = player.users_id
      puts @user_id
      User.find_by(id: @user_id)
    }
    puts @array.inspect
    render :json => {
      users: @array
    }
  end

  def characters 
    

    @players = CharacterLobby.where(:lobbies_id => params[:id])
    
    puts @players.inspect
    @array = @players.map{|player| 
      @characters_id = player.characters_id
      puts @characters_id
      Character.find_by(id: @characters_id)
    }
    puts '-------'
    puts @array.inspect
    render :json => {
      characters: @array
    }
  end
  def add_characters
    @character = CharacterLobby.find_by(users_id: params[:user_id], lobbies_id: params[:lobby_id])
    @character.characters_id = params[:character_id]
    @character.save
    puts @character
  end
end
