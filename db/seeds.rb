# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
users = []
users.push(User.new({
    username: "Dale Cooper",
    email: "dale@example.com",
    birthday: 35.years.ago,
    about: "We're going to need some more coffee",
    profile_picture: File.new("test/fixtures/dale-cooper.jpg")
}))
users.push(User.new({
    username: "Laura Palmer",
    email: "laura@example.com",
    birthday: 16.years.ago,
    about: "I have a secret",
    profile_picture: File.new("test/fixtures/laura-palmer.jpg")
}))
users.push(User.new({
    username: "Leo Johnson",
    email: "leo@example.com",
    birthday: 28.years.ago,
    about: "Leo needs a new pair of shoes!",
    profile_picture: File.new("test/fixtures/leo-johnson.jpg")
}))
users.push(User.new({
    username: "Bobby Briggs",
    email: "bobby@example.com",
    birthday: 17.years.ago,
    about: "Doc Hayward said you needed familiar stimulants, so we figured, what the hell, kazoos.",
    profile_picture: File.new("test/fixtures/bobby-briggs.jpg")
}))
users.push(User.new({
    username: "Log Lady",
    email: "log_lady@example.com",
    birthday: 54.years.ago,
    about: "One day my log will have something to say about this",
    profile_picture: File.new("test/fixtures/log-lady.jpg")
}))
users.push(User.new({
    username: "James Hurley",
    email: "james@example.com",
    birthday: 17.years.ago,
    about: "I just moved to Twin Peaks",
    profile_picture: File.new("test/fixtures/james-hurley.png")
}))
users.push(User.new({
    username: "Audrey Horne",
    email: "audrey@example.com",
    birthday: 16.years.ago,
    about: "I'm Audrey Horne and I get what I want.",
    profile_picture: File.new("test/fixtures/audrey-horne.jpg")
}))
users.push(User.new({
    username: "Donna Hayward",
    email: "donna@example.com",
    birthday: 16.years.ago,
    about: "Do you think that if you were falling in space... that you'd slow down after a while, or go faster and faster?",
    profile_picture: File.new("test/fixtures/donna-hayward.jpeg")
}))

users.each do |user|
  user.password = "amkamk"
  user.save
end

Photo.create([
  {
    filename: File.new("test/fixtures/laura-palmer.jpg"),
    user_id: 1
  },
  {
    filename: File.new("test/fixtures/leo-johnson.jpg"),
    user_id: 1
  },
  {
    filename: File.new("test/fixtures/bobby-briggs.jpg"),
    user_id: 1
  }
])