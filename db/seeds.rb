# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


City.destroy_all
Restaurant.destroy_all
Review.destroy_all

atlanta = City.new
atlanta.name = "Atlanta"
atlanta.photo_url = "https://www.atlantaga.gov/Home/ShowImage?id=3272&t=636335665341170000"
atlanta.save

chicago = City.new
chicago.name = "Chicago"
chicago.photo_url = "https://secure.meetupstatic.com/photos/theme_body/a/6/a/0/preview_7122656.jpeg"
chicago.save

newyork = City.new
newyork.name = "New York"
newyork.photo_url = "http://www.thebraggingmommy.com/wp-content/uploads/2017/11/New_York_NYC-1100x550.jpg"
newyork.save

sanfran = City.new
sanfran.name = "San Francisco"
sanfran.photo_url ="http://www.dinothetourist.com/uploads/1/0/6/0/106035201/o-san-francisco-facebook_orig.jpg"
sanfran.save