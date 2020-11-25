class CharacterQuest < ApplicationRecord
  has_one :character
  has_one :quest
end
