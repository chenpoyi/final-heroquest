class Api::WeaponsController < ApplicationController
  def index 
    @weapons = Weapon.all()
    puts @weapons
    render :json => {
      weapons: @weapons
    }
  end
  def purchase
    puts params
    @characters = params[:id]
    @weapons = params[:sendData]
    @total = params[:total]
    puts @total
    @weapons.each{|weapon| 
      CharacterWeapon.create(characters_id: @characters, weapons_id: weapon)
    }
    character = Character.find_by(id: @characters)
    puts character.gold
    character.gold -= @total
    puts character.gold
    character.save

    render :json => {
      message: "purchase success"
    }
  end
end
