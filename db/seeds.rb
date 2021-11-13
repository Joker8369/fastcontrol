# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


List.destroy_all
puts 'No List Existing !'


cake = List.create!(
  title: 'Cakes'
)

pastries = List.create!(
  title: 'pastries'
)
bread = List.create!(
  title: 'bread'
)
sweets = List.create!(
  title: 'sweets'
)
puts 'Lists create'

Product.destroy_all
puts 'No products'

Product.create!(
  name: 'Paris Brest',
  price: 20.5,
  list_id: "#{cake.id}"
)

Product.create!(
  name: 'croissant',
  price: 11.5,
  list_id: "#{pastries.id}"
)
Product.create!(
  name: 'baguette',
  price: 0.99,
  list_id: "#{bread.id}"
)
Product.create!(
  name: 'Carambar',
  price: 2.9,
  list_id: "#{sweets.id}"
)
Product.create!(
  name: 'Malabar',
  price: 2.9,
  list_id: "#{sweets.id}"
)
puts 'Products create'
