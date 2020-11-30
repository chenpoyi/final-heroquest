# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_11_30_042455) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "armors", force: :cascade do |t|
    t.string "name"
    t.integer "price"
    t.integer "defense"
    t.boolean "wizard"
    t.string "description"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "artifacts", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "character_armors", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "character_id"
    t.bigint "armor_id"
    t.index ["armor_id"], name: "index_character_armors_on_armor_id"
    t.index ["character_id"], name: "index_character_armors_on_character_id"
  end

  create_table "character_artifacts", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "character_id"
    t.bigint "artifact_id"
    t.index ["artifact_id"], name: "index_character_artifacts_on_artifact_id"
    t.index ["character_id"], name: "index_character_artifacts_on_character_id"
  end

  create_table "character_lobbies", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "character_id"
    t.bigint "lobby_id"
    t.bigint "user_id"
    t.index ["character_id"], name: "index_character_lobbies_on_character_id"
    t.index ["lobby_id"], name: "index_character_lobbies_on_lobby_id"
    t.index ["user_id"], name: "index_character_lobbies_on_user_id"
  end

  create_table "character_potions", force: :cascade do |t|
    t.integer "quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "character_id"
    t.bigint "weapon_id"
    t.index ["character_id"], name: "index_character_potions_on_character_id"
    t.index ["weapon_id"], name: "index_character_potions_on_weapon_id"
  end

  create_table "character_quests", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "character_id"
    t.bigint "quest_id"
    t.index ["character_id"], name: "index_character_quests_on_character_id"
    t.index ["quest_id"], name: "index_character_quests_on_quest_id"
  end

  create_table "character_weapons", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "character_id"
    t.bigint "weapon_id"
    t.index ["character_id"], name: "index_character_weapons_on_character_id"
    t.index ["weapon_id"], name: "index_character_weapons_on_weapon_id"
  end

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.integer "body"
    t.integer "mind"
    t.integer "gold"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.bigint "hero_id"
    t.string "image"
    t.integer "attack"
    t.integer "defend"
    t.integer "movement"
    t.index ["hero_id"], name: "index_characters_on_hero_id"
    t.index ["user_id"], name: "index_characters_on_user_id"
  end

  create_table "heros", force: :cascade do |t|
    t.string "race"
    t.integer "attack"
    t.integer "defend"
    t.integer "body"
    t.integer "mind"
    t.string "image"
    t.integer "default_weapon"
    t.integer "movement"
  end

  create_table "lobbies", force: :cascade do |t|
    t.string "name"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "status"
  end

  create_table "lobby_monsters", force: :cascade do |t|
    t.string "name"
    t.integer "attack"
    t.integer "defend"
    t.integer "body"
    t.integer "mind"
    t.integer "movement"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "lobby_id"
    t.bigint "monster_id"
    t.index ["lobby_id"], name: "index_lobby_monsters_on_lobby_id"
    t.index ["monster_id"], name: "index_lobby_monsters_on_monster_id"
  end

  create_table "monsters", force: :cascade do |t|
    t.string "name"
    t.integer "attack"
    t.integer "defend"
    t.integer "body"
    t.integer "mind"
    t.integer "movement"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "potions", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "quests", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "rules", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "spells", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.boolean "chaos"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest"
  end

  create_table "weapons", force: :cascade do |t|
    t.string "name"
    t.integer "price"
    t.integer "attack"
    t.boolean "wizard"
    t.string "description"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "character_armors", "armors"
  add_foreign_key "character_armors", "characters", on_delete: :cascade
  add_foreign_key "character_artifacts", "artifacts"
  add_foreign_key "character_artifacts", "characters", on_delete: :cascade
  add_foreign_key "character_lobbies", "characters", on_delete: :cascade
  add_foreign_key "character_lobbies", "lobbies"
  add_foreign_key "character_lobbies", "users"
  add_foreign_key "character_potions", "characters", on_delete: :cascade
  add_foreign_key "character_potions", "weapons"
  add_foreign_key "character_quests", "characters", on_delete: :cascade
  add_foreign_key "character_quests", "quests"
  add_foreign_key "character_weapons", "characters", on_delete: :cascade
  add_foreign_key "character_weapons", "weapons"
  add_foreign_key "characters", "heros"
  add_foreign_key "characters", "users"
  add_foreign_key "lobby_monsters", "lobbies"
  add_foreign_key "lobby_monsters", "monsters"
end
