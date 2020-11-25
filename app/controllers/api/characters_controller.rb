class Api::CharactersController < ApplicationController
  def index 
    @characters = Character.where(:users_id => params[:id])
    puts @characters.inspect
    render :json => {
      characters: @characters
    }
  end
  

end


# Product.find_by(id: item[:product_id])
