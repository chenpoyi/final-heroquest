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
  image: 'https://i.imgur.com/h0nbSUe.gif'
  })

heroes = Hero.create({
  race: 'dwarf', 
  attack: 2, 
  defend: 2, 
  body: 7, 
  mind: 3, 
  image:'https://i.imgur.com/jHZRMeu.gif'
  })

heroes = Hero.create({
  race: 'elf', 
  attack: 2, 
  defend: 2, 
  body: 6, 
  mind: 4, 
  image: 'https://imgur.com/a/j5ow8li'
  })
  
heroes = Hero.create({
  race: 'wizard', 
  attack: 1, 
  defend: 2, 
  body: 4, 
  mind: 6, 
  image:'https://i.imgur.com/PEM18xf.gif'
  })

heroes = Hero.create({
  race: 'zargon', 
  attack: 1, 
  defend: 2, 
  body: 4, 
  mind: 6, 
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
  attack: "3D6",
  defend: "2D6",
  body: 8, 
  mind: 2,
  gold: 400,
  users_id: 3,
  heros_id: 1,
  movement: "2D6",
  weapon: "Broad Sword"

})

user_character = Character.create! ({
  name:"Zargon",
  attack: "1D6",
  defend: "2D6",
  body: 4, 
  mind: 6,
  gold: 0,
  users_id: 2,
  heros_id: 5,
  movement: "Check Monsters",
  weapon: "Spells and Monsters"

})

user_character = Character.create! ({
  name:"Saurlith",
  attack: "2D6",
  defend: "2D6",
  body: 7, 
  mind: 3,
  gold: 450,
  users_id: 4,
  heros_id: 2,
  movement: "2D6",
  weapon: "Short Sword"

})

user_character = Character.create! ({
  name:"Maursin",
  attack: "2D6",
  defend: "2D6",
  body: 6, 
  mind: 4,
  gold: 600,
  users_id: 1,
  heros_id: 3,
  movement: "2D6",
  weapon: "Short Sword"

})

user_character = Character.create! ({
  name:"Elsin",
  attack: "1D6",
  defend: "2D6",
  body: 4, 
  mind: 6,
  gold: 300,
  users_id: 5,
  heros_id: 4,
  movement: "2D6",
  weapon: "Dagger"

})

## extra characters for user 1


user_character = Character.create! ({
  name:"Detrix",
  attack: "3D6",
  defend: "2D6",
  body: 8, 
  mind: 2,
  gold: 400,
  users_id: 1,
  heros_id: 1,
  movement: "2D6",
  weapon: "Broad Sword"

})

user_character = Character.create! ({
  name:"Axios",
  attack: "2D6",
  defend: "2D6",
  body: 6, 
  mind: 4,
  gold: 600,
  users_id: 1,
  heros_id: 2,
  movement: "2D6",
  weapon: "Short Sword"

})

user_character = Character.create! ({
  name:"Doloman the Wise",
  attack: "1D6",
  defend: "2D6",
  body: 4, 
  mind: 6,
  gold: 300,
  users_id: 1,
  heros_id: 4,
  movement: "2D6",
  weapon: "Dagger"

})




