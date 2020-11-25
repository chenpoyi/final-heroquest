class Character < ApplicationRecord
  has_many  :quests
  has_many  :weapons
  has_many  :armors
  has_one   :lobby
  has_one   :user

end

# not sure about lobbies yet