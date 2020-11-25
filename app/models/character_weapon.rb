class CharacterWeapon < ApplicationRecord
  has_one :character
  has_one :weapon

end
