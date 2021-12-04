class Court < ApplicationRecord
  belongs_to :team
  belongs_to :referee
end
