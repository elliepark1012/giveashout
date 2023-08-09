class CreateOpportunities < ActiveRecord::Migration[7.0]
  def change
    create_table :opportunities do |t|
      t.string :title
      t.string :date
      t.string :location
      t.string :about
      t.string :img_url
      t.integer :expected_donation
      t.string :contact_name
      t.string :contact_email

      t.timestamps
    end
  end
end
