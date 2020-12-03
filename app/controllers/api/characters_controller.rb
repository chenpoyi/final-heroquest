class Api::CharactersController < ApplicationController
  def index 

    @characters = Character.where(:user_id => params[:id])
    # puts @characters.inspect
    # @characters.map{|character| 
    #   puts character.heros.race
    # }
    render :json => {
      characters: @characters
    }

  end
  
  def create
    @hero = Hero.find_by(:id => params[:hero_id])
    @new_character = Character.create(name: params[:name], body: @hero.body, mind: @hero.mind, gold: 600, image: @hero.image, attack: @hero.attack, defend: @hero.defend, movement: @hero.movement, user_id: params[:user_id])
    @new_weapon = CharacterWeapon.create(character_id: @new_character.id, weapon_id: @hero.default_weapon )
    # CharacterWeapon.create(character_id: @characters, weapons_id: weapon)
    render :json => {
      message: "character created"
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

  def weapons 
    @weapons_character = CharacterWeapon.where(:character_id => params[:id])
    @weapons = @weapons_character.map{|weapon_character|
      Weapon.find_by(:id => weapon_character.weapon_id)
    }
    puts '-----------------'
    puts @weapons.inspect
    render :json => {
      weapons: @weapons
    }
  end
    
  def destroy
    @character = Character.find(params[:id])
    @character.destroy!
    
    render :json =>{
       message: "Character Destroyed"
    }
  end

end


# Product.find_by(id: item[:product_id])
