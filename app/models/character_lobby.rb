class CharacterLobby < ApplicationRecord
has_many :characters
end

# Logic
# must have 1 Zargon
# must have min 1 character
