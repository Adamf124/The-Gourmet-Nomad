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
atlanta.name = 'Atlanta'
atlanta.photo_url = 'https://www.atlantaga.gov/Home/ShowImage?id=3272&t=636335665341170000'
atlanta.save

chicago = City.new
chicago.name = 'Chicago'
chicago.photo_url = 'https://secure.meetupstatic.com/photos/theme_body/a/6/a/0/preview_7122656.jpeg'
chicago.save

newyork = City.new
newyork.name = 'New York'
newyork.photo_url = 'http://www.thebraggingmommy.com/wp-content/uploads/2017/11/New_York_NYC-1100x550.jpg'
newyork.save

sanfran = City.new
sanfran.name = 'San Francisco'
sanfran.photo_url ='http://www.dinothetourist.com/uploads/1/0/6/0/106035201/o-san-francisco-facebook_orig.jpg'
sanfran.save

antico = Restaurant.create
antico.name = 'Antico Pizza Napoletana'
antico.address =  '1093 Hemphill Ave.'
antico.photo_url = 'https://static1.squarespace.com/static/577ff1b3b3db2bbb851abacc/t/5852e15829687f3d12a8ded7/1481826657517/?format=300w'
antico.description = 'Busy family-run pizzeria near Georgia Tech known for brick-oven pies, with communal seating & BYOB.'

gios = Restaurant.create
gios.name = 'Gio’s Chicken Amalfitano'
gios.address =  '1099 Hemphill Ave, '
gios.photo_url = 'https://static1.squarespace.com/static/577ff1b3b3db2bbb851abacc/t/5852f09115d5dbde15887746/1481830551371/?format=300w'
gios.description = "Chicken-based Amalfi Coast cuisine from Antico Pizza's chef, with communal tables & BYOB."
