class Referee < ApplicationRecord
    has_many :referees
    has_many :courts, through: :referees
end
