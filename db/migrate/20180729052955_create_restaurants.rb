class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :address
      t.string :photo_url
      t.string :description
      t.string :website
      t.references :city, foreign_key: true

      t.timestamps
    end
  end
end
