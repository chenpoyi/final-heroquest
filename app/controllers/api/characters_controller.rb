class Api::CharactersController < ApplicationController
  def index 

    @characters = Character.where(:users_id => params[:id])
    # puts @characters.inspect
    # @characters.map{|character| 
    #   puts character.heros.race
    # }
    render :json => {
      characters: @characters
    }

  end
  
  def show
    @character = Character.find_by(:id => params[:id])
    render :json =>{
       character: @character
    }
  end

  def update
    
    @character = Character.find_by(:id => params[:id])
    @character.gold = params[:gold]
    @character.body = params[:body]
    @character.mind = params[:mind]
    @character.save
  end


end


# Product.find_by(id: item[:product_id])
