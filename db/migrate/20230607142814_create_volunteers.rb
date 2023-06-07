class CreateVolunteers < ActiveRecord::Migration[7.0]
  def change
    create_table :volunteers do |t|
      t.string :title
      t.string :date
      t.string :location
      t.string :about
      t.string :img_url

      t.timestamps
    end
  end
end
