# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Helper functions
def open_asset(file_name)
  File.open(Rails.root.join('db', 'seed_assets', file_name))
end

# Only run on development (local) instances not on production, etc.
unless Rails.env.development?
  puts "Development seeds only (for now)!"
  exit 0
end

## Hero 

puts "Re-creating Heros ..."

Hero.destroy_all

heroes = Hero.create({
  race: 'barbarian', 
  attack: 3, 
  defend: 2, 
  body: 8 , 
  mind: 2, 
  default_weapon: 2,
  image: 'https://i.imgur.com/h0nbSUe.gif'
  })

heroes = Hero.create({
  race: 'dwarf', 
  attack: 2, 
  defend: 2, 
  body: 7, 
  mind: 3, 
  default_weapon: 7,
  image:'https://i.imgur.com/jHZRMeu.gif'
  })

heroes = Hero.create({
  race: 'elf', 
  attack: 2, 
  defend: 2, 
  body: 6, 
  mind: 4, 
  default_weapon: 7,
  image: 'https://i.imgur.com/51xJXTf.gif'
  })
  
heroes = Hero.create({
  race: 'wizard', 
  attack: 1, 
  defend: 2, 
  body: 4, 
  mind: 6, 
  default_weapon: 4,
  image:'https://i.imgur.com/PEM18xf.gif'
  })

heroes = Hero.create({
  race: 'zargon', 
  attack: 0, 
  defend: 0, 
  body: 0, 
  mind: 0, 
  default_weapon: 4, ## don't show this 
  image:'https://i.imgur.com/PEM18xf.gif'
  })

  ## Users

puts "Re-creating Users ..."

User.destroy_all

users = User.create!({
  email: "scott@m.ca",
  password: "password",
  password_confirmation: "password"
})

users = User.create({
  email: "paul@c.ca",
  password: "password",
  password_confirmation: "password"

})

users = User.create({
  email: "jake@p.ca",
  password: "password",
  password_confirmation: "password"
})

users = User.create({
  email: "john@m.ca",
  password: "password",
  password_confirmation: "password"
})

users = User.create({
  email: "howard@c.ca",
  password: "password",
  password_confirmation: "password"
})
  ## Characters for Users

  puts "Re-creating Characters for users ..."

  Character.destroy_all

  user_character = Character.create! ({
    name:"Ragnor",
    attack: 3,
    defend: 2,
    body: 8, 
    mind: 2,
    gold: 400,
    user_id: 3,
    hero_id: 1,
    movement: 2,
    image: 'https://i.imgur.com/h0nbSUe.gif'
  })
  
  user_character = Character.create! ({
    name:"Saurlith",
    attack: 2,
    defend: 2,
    body: 7, 
    mind: 3,
    gold: 450,
    user_id: 4,
    hero_id: 2,
    movement: 2,
    image:'https://i.imgur.com/jHZRMeu.gif'
  })
  
  user_character = Character.create! ({
    name:"Maursin",
    attack: 2,
    defend: 2,
    body: 6, 
    mind: 4,
    gold: 600,
    user_id: 1,
    hero_id: 3,
    movement: 2,
    image: 'https://i.imgur.com/51xJXTf.gif'
  })
  
  user_character = Character.create! ({
    name:"Elsin",
    attack: 1,
    defend: 2,
    body: 4, 
    mind: 6,
    gold: 300,
    user_id: 5,
    hero_id: 4,
    movement: 2,
    image:'https://i.imgur.com/PEM18xf.gif'
  })
  
  ## extra characters for user 1
  
  user_character = Character.create! ({
    name:"Detrix",
    attack: 3,
    defend: 2,
    body: 8, 
    mind: 2,
    gold: 400,
    user_id: 1,
    hero_id: 1,
    movement: 2,
    image: 'https://i.imgur.com/h0nbSUe.gif'
  })
  
  user_character = Character.create! ({
    name:"Axios",
    attack: 2,
    defend: 2,
    body: 6, 
    mind: 4,
    gold: 600,
    user_id: 1,
    hero_id: 2,
    movement: 2,
    image:'https://i.imgur.com/jHZRMeu.gif'
  })
  
  user_character = Character.create! ({
    name:"Doloman the Wise",
    attack: 1,
    defend: "2D6",
    body: 4, 
    mind: 6,
    gold: 300,
    user_id: 1,
    hero_id: 4,
    movement: 2,
    image:'https://i.imgur.com/PEM18xf.gif'
  })
  # Zargon for everyone
  
  user_character = Character.create! ({
    name:"Zargon",
    attack: 0,
    defend: 0,
    body: 0, 
    mind: 0,
    gold: 0,
    user_id: 1,
    hero_id: 5,
    movement: 0,
    image:'https://i.imgur.com/PEM18xf.gif'
  })
  
  
  user_character = Character.create! ({
    name:"Zargon",
    attack: 0,
    defend: 0,
    body: 0, 
    mind: 0,
    gold: 0,
    user_id: 2,
    hero_id: 5,
    movement: 0,
    image:'https://i.imgur.com/PEM18xf.gif'
  })
  
  user_character = Character.create! ({
    name:"Cypress",
    attack: 1,
    defend: "2D6",
    body: 4, 
    mind: 6,
    gold: 400,
    user_id: 2,
    hero_id: 4,
    movement: 2,
    image:'https://i.imgur.com/PEM18xf.gif'
  })
  
  
  user_character = Character.create! ({
    name:"Zargon",
    attack: 0,
    defend: 0,
    body: 0, 
    mind: 0,
    gold: 0,
    user_id: 3,
    hero_id: 5,
    movement: 0,
    image:'https://i.imgur.com/PEM18xf.gif'
  })
  
  
  user_character = Character.create! ({
    name:"Zargon",
    attack: 0,
    defend: 0,
    body: 0, 
    mind: 0,
    gold: 0,
    user_id: 4,
    hero_id: 5,
    movement: 0,
    image:'https://i.imgur.com/PEM18xf.gif'
  })
  
  user_character = Character.create! ({
    name:"Zargon",
    attack: 0,
    defend: 0,
    body: 0, 
    mind: 0,
    gold: 0,
    user_id: 5,
    hero_id: 5,
    movement: 0,
    image:'https://i.imgur.com/PEM18xf.gif'
  })
  ## Weapons for Armory

  puts "Re-creating Weapons for Armory..."

  Weapon.destroy_all

  weapon = Weapon.create!({
    name: "Battle Axe",
    price: 400,
    attack: 4,
    wizard: false,
    description: "This heavy, double-edged axe gives you the attack strength of 4 combat dice. You may not use a shield when using this weapon.",
    image: "https://i5.walmartimages.com/asr/489802ea-9efd-4619-864a-9878b2d05ac0_1.4b632c00d7bd43d3442d04cd9d773271.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff"

  })

  weapon = Weapon.create!({
    name: "Braodsword",
    price: 250,
    attack: 3,
    wizard: false,
    description: "This wide blade gives you the attack of 3 combat dice.",
    image: "https://samuraiswords.store/wp-content/uploads/2017/08/Viking-Broadsword.jpg"

  })

  weapon = Weapon.create!({
    name: "Crossbow",
    price: 350,
    attack: 3,
    wizard: false,
    description: "This long-range weapon gives you the attack strength of 3 combat dice. You may fire at any monster that you can see. However, you cannot fire at a monster that is adjacent to you. You have an unlimited supply of arrows.",
    image: "https://www.bogensportwelt.de/media/image/product/1631/lg/medieval-crossbow-79cm-approx-80-100lbs.jpg"

  })

  weapon = Weapon.create!({
    name: "Dagger",
    price: 25,
    attack: 1,
    wizard: true,
    description: "This sharp knife gives you the attack strength of 1 combat die. A dagger can also be thrown at any monster you can see, but is lost once it is thrown.",
    image: "https://images-na.ssl-images-amazon.com/images/I/51xTt-2VZ8L._AC_SL1000_.jpg"

  })

  weapon = Weapon.create!({
    name: "Hand Axe",
    price: 150,
    attack: 2,
    wizard: false,
    description: "The hand axe allows to roll 2 combat dice in attack. It can also be thrown at any monster you can see, but is lost once it is thrown.",
    image: "https://cdn.shopify.com/s/files/1/0925/7092/products/forged-carbon-steel-iroquois-throwing-axe.jpg?v=1575940653"

  })

  weapon = Weapon.create!({
    name: "Longsword",
    price: 350,
    attack: 3,
    wizard: false,
    description: "This long blade gives you the attack of 3 combat dice. Because of its length, the longsword enables you to attack diagonally.",
    image: "https://medievalbritain.com/wp-content/uploads/2019/11/The-Writhen-Hilt_Sword.jpg"

  })

  weapon = Weapon.create!({
    name: "Short sword",
    price: 150,
    attack: 2,
    wizard: false,
    description: "This short blade gives you the attack strength of 2 combat dice.",
    image: "https://s3.amazonaws.com/content.sellbrite.com/19698/41773623/img/49500969/large/__57.jpg?1476220713"

  })


  weapon = Weapon.create!({
    name: "Spear",
    price: 150,
    attack: 2,
    wizard: false,
    description: "The spear allows to roll 2 combat dice in attack. Because of its length, it enables you to attack diagonally. It can also be thrown at any monster you can see, but is lost once it is thrown.",
    image: "https://26r1162iqrnz10wquy34bg3o-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/600314-300x300.jpg"

  })

  weapon = Weapon.create!({
    name: "Staff",
    price: 100,
    attack: 1,
    wizard: true,
    description: "This long, sturdy, wooden staff gives you the attack strength of 1 combat die. Because of its length, the staff enables you to attack diagonally. You may not use a shield when using this weapon.",
    image: "https://i.pinimg.com/originals/fc/28/be/fc28bee6dcbfb3fa077761f7bd362831.jpg"

  })

  ## Weapons for Armory

  puts "Re-creating Armor for Armory..."

  Armor.destroy_all
  
  weapon = Armor.create!({
    name: "Chain mail",
    price: 450,
    defense: 3,
    wizard: false,
    description: "This light metal armor gives you 1 extra combat die in defense. May be combined with the Helmet and/or Shield.",
    image: "https://image.shutterstock.com/image-photo/portrait-medieval-dirty-face-warrior-260nw-411742261.jpg"

  })

  weapon = Armor.create!({
    name: "Helmet",
    price: 125,
    defense: 1,
    wizard: false,
    description: "This protective headpiece gives you 1 extra combat die in defense",
    image: "https://www.heritagecostumes.com/images/products/18189.jpg"

  })

  weapon = Armor.create!({
    name: "Plate Armor",
    price: 850,
    defense: 4,
    wizard: false,
    description: "This heavy metal armor gives you 2 extra combat dice in defense. However, because it is so heavy, you may only roll 1 red die for movement while wearing it. May be combined with the Helmet and/or Shield.",
    image: "https://static.turbosquid.com/Preview/2020/03/30__06_51_41/Medieval_Knight_Plate_Armor_with_Zweihander_Rigged_c4d_00.jpg8CC120C3-6ADE-4C15-85FC-ACF3FFEC0DFCLarge.jpg"

  })

  weapon = Armor.create!({
    name: "Shield",
    price: 100,
    defense: 1,
    wizard: false,
    description: "This hand-held armor gives you 1 extra combat die in defense. May not be used with the Battle Axe or the Staff.",
    image: "https://cdn.shopify.com/s/files/1/1551/9675/products/970_8_6aab293d-fce7-4bd0-8b1f-85c392302ee0_1024x1024.jpg?v=1591025229"

  })

## MONSTERS for Zargon

puts "Re-creating MONSTERS for Zargon..."

Monster.destroy_all

monster = Monster.create! ({
  name:"Orc",
  attack: 3,
  defend: 2,
  body: 1, 
  mind: 2,
  movement: 10,
  image: "https://i.imgur.com/MrwYk8c.jpg"

})

monster = Monster.create! ({
  name:"Chaos Warrior",
  attack: 4,
  defend: 4,
  body: 3, 
  mind: 3,
  movement: 7,
  image: "https://i.imgur.com/QPPVnmi.jpg"

})

monster = Monster.create! ({
  name:"Verag",
  attack: 4,
  defend: 4,
  body: 3, 
  mind: 3,
  movement: 7,
  image: "https://i.imgur.com/QPPVnmi.jpg"

})


## Quest descriptions 
puts "Re-creating Quests..."

Quest.destroy_all

quest = Quest.create! ({
  name: "Quest 1: The Trial",
  description: "You have learned well, my friends. Now has come the time for your first trial. You must first enter the catacombs which contain Fellmarg’s tomb. You must seek out and destroy Verag, a foul Gargoyle who hides in the catacombs. This Quest is not easy and you must work together in order to survive. This is your first step on the road to becoming true Heroes. Tread carefully my friends.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbTKVxzr5gwFu2pVTcmtoshNYZNXSRoAPhA&usqp=CAU"

})

quest = Quest.create!({
  name: "Quest 2: The Resuce of Sir Ragnar",
  description: "Sir Ragnar, of the Emperor’s most powerful knights, has been captured. There is reason to believe that he is being held prisoner but Ulag, the orc Warlord. You are to find Sir Ragnar and bring him back to the stairway. Prince Magnus will pay 240 gold coins to be divided among the heroes if they rescue Sir Ragnar. No reward will be paid if Sir Ragnar is killed during the escape.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbTKVxzr5gwFu2pVTcmtoshNYZNXSRoAPhA&usqp=CAU"

})

quest = Quest.create!({
  name: "Quest 3: Lair of the Orc Warlord",
  description: "Prince Magnus has ordered that the Orc Warlord, Ulag, who was responsible for the imprisonment of Sir Ragnar, be sought out and destroyed. When Ulag is destroyed, the Heroes will receive a reward of 180 gold coins to be divided among them. Any treasure found in Ulag’s stronghold may be kept by the finder alone.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbTKVxzr5gwFu2pVTcmtoshNYZNXSRoAPhA&usqp=CAU"

})

## Quest descriptions 
puts "Re-creating CharacterQuests..."

CharacterQuest.destroy_all

quest_list = CharacterQuest.create!({
  character_id: 1,
  quest_id: 1,
})

quest_list = CharacterQuest.create!({
  character_id: 1,
  quest_id: 2,
})

quest_list = CharacterQuest.create!({
  character_id: 1,
  quest_id: 3,
})

quest_list = CharacterQuest.create!({
  character_id: 2,
  quest_id: 1,
})

quest_list = CharacterQuest.create!({
  character_id: 2,
  quest_id: 2,
})

quest_list = CharacterQuest.create!({
  character_id: 2,
  quest_id: 3,
})

quest_list = CharacterQuest.create!({
  character_id: 3,
  quest_id: 1,
})

quest_list = CharacterQuest.create!({
  character_id: 3,
  quest_id: 2,
})

quest_list = CharacterQuest.create!({
  character_id: 3,
  quest_id: 3,
})

quest_list = CharacterQuest.create!({
  character_id: 4,
  quest_id: 1,
})

quest_list = CharacterQuest.create!({
  character_id: 4,
  quest_id: 2,
})

quest_list = CharacterQuest.create!({
  character_id: 4,
  quest_id: 3,
})

quest_list = CharacterQuest.create!({
  character_id: 5,
  quest_id: 1,
})

quest_list = CharacterQuest.create!({
  character_id: 5,
  quest_id: 2,
})

quest_list = CharacterQuest.create!({
  character_id: 5,
  quest_id: 3,
})

## Rule descriptions 
puts "Re-creating Rules..."

Rule.destroy_all

rule = Rule.create! ({
  name: "Attack",
  description: "Attack - attack a monster adjacent to you or diagonal (check your weapon staff, long sword). Cast a Spell (Wizard Elf only)
  Cast a spell at any enemy in their line of sight.",
})

rule = Rule.create! ({
  name: "Search for Treasure",
  description: "Search for Treasure - Only allowed if there are no monsters in the room. If no quest-specific treasure in the room take a treasure card follow instructions. Be warned not all the cards have treasure...",
})

rule = Rule.create! ({
  name: "Search for Secret Doors",
  description: "Only search for secret doors when no monsters are in line of sight or in the room you are in. Must be opened like any other door and the door can not be closed. Secret room are the same as a regular room...treasure and traps!",
})

rule = Rule.create! ({
  name: "Search for Secret Doors",
  description: "Only search for secret doors when no monsters are in line of sight or in the room you are in. Must be opened like any other door and the door can not be closed. Secret room are the same as a regular room...treasure and traps!",
})

rule = Rule.create! ({
  name: "Search for Traps",
  description: "Search for Traps - Can search only when no monsters are visible (line of sight). Must be in a room to search for traps in a that room.",
})

rule = Rule.create! ({
  name: "Disarm Traps",
  description: "Roll or use a tool kit. You must announce before you move you are attempting to disarm a trap. Roll one combat die. Skull - sprung trap and you suffer body damage. Black or white shield trap is disarmed...Dwarf has a better chance and never needs a tool kit. If the Dwarf rolls a Black shield the trap is sprung anything else the trap is diarmed",
})

rule = Rule.create! ({
  name: "Jumping a Trap",
  description: "You must have at least two remaining movement squares. Rolling anything but a skull to jump the trap. If you roll a skull then the trap is sprung and you suffer body damage.",
})

## Lobbies
puts "Re-creating lobbies"

Lobby.destroy_all

lobby = Lobby.create! ({
  name: "Lobby 1",
  url: "abcd",
  status: 0,
})

lobby = Lobby.create! ({
  name: "Lobby 2",
  url: "abcd",
  status: 0,
})

lobby = Lobby.create! ({
  name: "Lobby 3",
  url: "abcd",
  status: 1,
})
lobby = Lobby.create! ({
  name: "Lobby 4",
  url: "abcd",
  status: 2,
})

## Quest descriptions 
puts "Re-creating CharacterLobby..."

CharacterLobby.destroy_all

character_lobby = CharacterLobby.create!({
  character_id: 3,
  user_id: 1,
  lobby_id: 1,
})

character_lobby = CharacterLobby.create!({
  character_id: 9,
  user_id: 2,
  lobby_id: 1,
})
character_lobby = CharacterLobby.create!({
  character_id: 1,
  user_id: 3,
  lobby_id: 1,
})

character_lobby = CharacterLobby.create!({
  character_id: 2,
  user_id: 4,
  lobby_id: 1,
})

character_lobby = CharacterLobby.create!({
  # character_id: 0,
  user_id: 1,
  lobby_id: 2,
})

character_lobby = CharacterLobby.create!({
  # character_id: 0,
  user_id: 2,
  lobby_id: 2,
})
character_lobby = CharacterLobby.create!({
  # character_id: 0,
  user_id: 3,
  lobby_id: 2,
})

character_lobby = CharacterLobby.create!({
  # character_id: 0,
  user_id: 4,
  lobby_id: 2,
})
# SEEDS OF LOBBY IN PROGRESS
character_lobby = CharacterLobby.create!({
  character_id: 4,
  user_id: 5,
  lobby_id: 3,
})

character_lobby = CharacterLobby.create!({
  character_id: 2,
  user_id: 4,
  lobby_id: 3,
})
character_lobby = CharacterLobby.create!({
  character_id: 1,
  user_id: 3,
  lobby_id: 3,
})

character_lobby = CharacterLobby.create!({
  character_id: 7,
  user_id: 1,
  lobby_id: 3,
})

character_lobby = CharacterLobby.create!({
  character_id: 9,
  user_id: 2,
  lobby_id: 3,
})
# SEEDS OF LOBBY IN PROGRESS WITH SCOTT AS ZARGON
character_lobby = CharacterLobby.create!({
  character_id: 8,
  user_id: 1,
  lobby_id: 4,
})

character_lobby = CharacterLobby.create!({
  character_id: 2,
  user_id: 4,
  lobby_id: 4,
})
character_lobby = CharacterLobby.create!({
  character_id: 1,
  user_id: 3,
  lobby_id: 4,
})

character_lobby = CharacterLobby.create!({
  character_id: 4,
  user_id: 5, 
  lobby_id: 4,
})

character_lobby = CharacterLobby.create!({
  character_id: 10,
  user_id: 2,
  lobby_id: 4,
})

## Monsters in the Lobby descriptions 
puts "Re-creating Monsters in the Lobby..."

LobbyMonster.destroy_all

    lobby_monster = LobbyMonster.create! ({
      name:"Orc",
      attack: 13,
      defend: 12,
      body: 11, 
      mind: 12,
      movement: 110,
      image: "https://i.imgur.com/MrwYk8c.jpg",
      lobby_id: 1,
      monster_id: 1 #there must be a way to pull this in
    
    })
    
    lobby_monster = LobbyMonster.create! ({
      name:"Chaos Warrior",
      attack: 24,
      defend: 24,
      body: 23, 
      mind: 23,
      movement: 27,
      image: "https://i.imgur.com/QPPVnmi.jpg",
      lobby_id: 1,
      monster_id: 2 #there must be a way to pull this in
    })
    
    lobby_monster = LobbyMonster.create! ({
      name:"Verag",
      attack: 34,
      defend: 34,
      body: 33, 
      mind: 33,
      movement: 37,
      image: "https://i.imgur.com/QPPVnmi.jpg",
      lobby_id: 1,
      monster_id: 3 #there must be a way to pull this in
    })

    lobby_monster = LobbyMonster.create! ({
      name:"Orc",
      attack: 13,
      defend: 12,
      body: 11, 
      mind: 12,
      movement: 110,
      image: "https://i.imgur.com/MrwYk8c.jpg",
      lobby_id: 2,
      monster_id: 1 #there must be a way to pull this in
    
    })
    
    lobby_monster = LobbyMonster.create! ({
      name:"Chaos Warrior",
      attack: 24,
      defend: 24,
      body: 23, 
      mind: 23,
      movement: 27,
      image: "https://i.imgur.com/QPPVnmi.jpg",
      lobby_id: 2,
      monster_id: 2 #there must be a way to pull this in
    })
    
    lobby_monster = LobbyMonster.create! ({
      name:"Verag",
      attack: 34,
      defend: 34,
      body: 33, 
      mind: 33,
      movement: 37,
      image: "https://i.imgur.com/QPPVnmi.jpg",
      lobby_id: 2,
      monster_id: 3 #there must be a way to pull this in
    })

    ## Character weapons 
puts "Re-creating CharacterWeapons"

CharacterWeapon.destroy_all

character_weapon = CharacterWeapon.create! ({
  character_id: 1,
  weapon_id: 2,

})

character_weapon = CharacterWeapon.create! ({
  character_id: 1,
  weapon_id: 6,

})

character_weapon = CharacterWeapon.create! ({
  character_id: 2,
  weapon_id: 7,

})

character_weapon = CharacterWeapon.create! ({
  character_id: 3,
  weapon_id: 7,

})

character_weapon = CharacterWeapon.create! ({
  character_id: 4,
  weapon_id: 4,

})

## extra characters for user 1

character_weapon = CharacterWeapon.create! ({
  character_id: 5,
  weapon_id: 2,

})

character_weapon = CharacterWeapon.create! ({
  character_id: 6,
  weapon_id: 7,

})

character_weapon = CharacterWeapon.create! ({
  character_id: 7,
  weapon_id: 4,

})


   