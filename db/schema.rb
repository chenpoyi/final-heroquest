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

ActiveRecord::Schema.define(version: 2020_11_28_211242) do

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
    t.bigint "characters_id"
    t.bigint "armors_id"
    t.index ["armors_id"], name: "index_character_armors_on_armors_id"
    t.index ["characters_id"], name: "index_character_armors_on_characters_id"
  end

  create_table "character_artifacts", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "characters_id"
    t.bigint "artifacts_id"
    t.index ["artifacts_id"], name: "index_character_artifacts_on_artifacts_id"
    t.index ["characters_id"], name: "index_character_artifacts_on_characters_id"
  end

  create_table "character_lobbies", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "characters_id"
    t.bigint "lobbies_id"
    t.bigint "users_id"
    t.integer "user_id"
    t.index ["characters_id"], name: "index_character_lobbies_on_characters_id"
    t.index ["lobbies_id"], name: "index_character_lobbies_on_lobbies_id"
    t.index ["users_id"], name: "index_character_lobbies_on_users_id"
  end

  create_table "character_potions", force: :cascade do |t|
    t.integer "quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "characters_id"
    t.bigint "weapons_id"
    t.index ["characters_id"], name: "index_character_potions_on_characters_id"
    t.index ["weapons_id"], name: "index_character_potions_on_weapons_id"
  end

  create_table "character_quests", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "characters_id"
    t.bigint "quests_id"
    t.index ["characters_id"], name: "index_character_quests_on_characters_id"
    t.index ["quests_id"], name: "index_character_quests_on_quests_id"
  end

  create_table "character_weapons", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "characters_id"
    t.bigint "weapons_id"
    t.index ["characters_id"], name: "index_character_weapons_on_characters_id"
    t.index ["weapons_id"], name: "index_character_weapons_on_weapons_id"
  end

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.integer "body"
    t.integer "mind"
    t.integer "gold"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "users_id"
    t.bigint "heros_id"
    t.string "image"
    t.integer "attack"
    t.integer "defend"
    t.integer "movement"
    t.index ["heros_id"], name: "index_characters_on_heros_id"
    t.index ["users_id"], name: "index_characters_on_users_id"
  end

  create_table "heros", force: :cascade do |t|
    t.string "race"
    t.integer "attack"
    t.integer "defend"
    t.integer "body"
    t.integer "mind"
    t.string "image"
    t.string "movement"
    t.integer "default_weapon"
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
    t.bigint "lobbies_id"
    t.bigint "monsters_id"
    t.index ["lobbies_id"], name: "index_lobby_monsters_on_lobbies_id"
    t.index ["monsters_id"], name: "index_lobby_monsters_on_monsters_id"
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

  add_foreign_key "character_armors", "armors", column: "armors_id"
  add_foreign_key "character_armors", "characters", column: "characters_id"
  add_foreign_key "character_artifacts", "artifacts", column: "artifacts_id"
  add_foreign_key "character_artifacts", "characters", column: "characters_id"
  add_foreign_key "character_lobbies", "characters", column: "characters_id"
  add_foreign_key "character_lobbies", "lobbies", column: "lobbies_id"
  add_foreign_key "character_lobbies", "users", column: "users_id"
  add_foreign_key "character_potions", "characters", column: "characters_id"
  add_foreign_key "character_potions", "weapons", column: "weapons_id"
  add_foreign_key "character_quests", "characters", column: "characters_id"
  add_foreign_key "character_quests", "quests", column: "quests_id"
  add_foreign_key "character_weapons", "characters", column: "characters_id"
  add_foreign_key "character_weapons", "weapons", column: "weapons_id"
  add_foreign_key "characters", "heros", column: "heros_id"
  add_foreign_key "characters", "users", column: "users_id"
  add_foreign_key "lobby_monsters", "lobbies", column: "lobbies_id"
  add_foreign_key "lobby_monsters", "monsters", column: "monsters_id"
end
