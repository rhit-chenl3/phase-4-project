
Referee.destroy_all
Team.destroy_all
Court.destroy_all
Referee.reset_pk_sequence
Team.reset_pk_sequence
Court.reset_pk_sequence

bobby= Referee.create(name: "bobby", rate: 5, email: "bob@yahoo.com", phone_number: "8122230816")
ale= Referee.create(name: "ale", rate: 60, email: "ale@gmail.com", phone_number: "3030300307")
will= Referee.create(name: "will", rate: 30, email: "will@gmail.com", phone_number: "2150300307")    
# end
bullhogs= Team.create(name: "bullhogs", email: "bullhogs@gmail.com")
walnuts=Team.create(name: "walnuts", email: "walnuts@gmail.com")
wonkies= Team.create(name: "wonkies", email: "wonkies@gmail.com")

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