class Api::QuestsController < ApplicationController
  def index 
    @quests = CharacterQuest.where(:characters_id => params[:id])
    
    puts @quests.inspect
    # render :json => {
    #   characters: @characters
    # }
  end
  

end