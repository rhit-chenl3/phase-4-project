class CourtSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :time, :rate
  has_one :team
  has_one :referee
end
