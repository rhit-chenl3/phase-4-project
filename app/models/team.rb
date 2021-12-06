class Team < ApplicationRecord
    has_many :courts
    has_many :referees, through: :courts
end
