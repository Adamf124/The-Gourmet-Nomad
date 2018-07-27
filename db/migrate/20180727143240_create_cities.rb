class CreateCities < ActiveRecord::Migration[5.2]
  def change
    create_table :cities do |t|
      t.string :name
      t.string :photo_url
      t.string :restaurants

      t.timestamps
    end
  end
end
