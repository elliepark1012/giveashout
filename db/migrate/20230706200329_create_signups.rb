class CreateSignups < ActiveRecord::Migration[7.0]
  def change
    create_table :signups do |t|
      t.string :donation
      t.string :participants
      t.string :extras
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :opportunity, null: false, foreign_key: true

      t.timestamps
    end
  end
end
