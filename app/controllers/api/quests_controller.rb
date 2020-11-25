class Api::QuestsController < ApplicationController
  def index 
    @quests = CharacterQuest.where(:characters_id => params[:id])
    
    puts @quests.inspect
    @array = @quests.map{|quest| 
      Quest.find_by(id: quest.quests_id)
    }
    render :json => {
      quests: @array
    }
  end
  # character = Character.find_by(id: @characters)

end