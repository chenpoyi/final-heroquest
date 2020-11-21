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
  race: barbarian, 
  attack: 3, 
  defend: 2, 
  body: 8 , 
  mind: 2, 
  image: open_asset('Barbarian-small.gif')
  })

heroes = Hero.create({
  race: dwarf, 
  attack: 2, 
  defend: 2, 
  body: 7, 
  mind: 3, 
  image: open_asset('Dwarf-small.gif')
  })

heroes = Hero.create({
  race: elf, 
  attack: 2, 
  defend: 2, 
  body: 6, 
  mind: 4, 
  image: open_asset('Elf-small.gif')})
  
heroes = Hero.create({
  race: wizard, 
  attack: 1, 
  defend: 2, 
  body: 4, 
  mind: 6, 
  image: open_asset('wizard-small.gif')})