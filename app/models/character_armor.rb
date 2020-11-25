class CharacterArmor < ApplicationRecord
  has_one :character
  has_one :armor
end
