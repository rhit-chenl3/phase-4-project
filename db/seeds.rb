# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Referee.destroy_all
Team.destroy_all
Court.destroy_all
Referee.reset_pk_sequence
Team.reset_pk_sequence
Court.reset_pk_sequence

Referee.create!(name: "bobby", rate: 5.0, email: "bob@yahoo.com", phone_number: "8122230816")
# 10.times do
#     Referee.create(
#         name: Faker::Name.name,
#         rate: rand(50.00..80.00),
#         email: Faker::Name.name.delete(' ') + "@gmail.com",
#         phone_number: Faker::PhoneNumber.phone_number
#     )
# end

# 10.times do
#     Team.create(
#         name: Faker::Team.name,
#         email: Faker::Team.name.delete(' ') + "@gmail.com",
#     )
# end

# 5.times do
#     Court.create(
#         name: Faker::Color.color_name + "court",
#         location: Faker::Address.community,
#         time: Faker::Time.forward(days: 5,  period: :evening, format: :long),
#         rate: rand(100.00..200.00),
#         team_id: nil,
#         referee_id: nil
#     )
# end

puts "Done seeding!!"