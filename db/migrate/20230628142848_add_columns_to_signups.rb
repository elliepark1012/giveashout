class AddColumnsToSignups < ActiveRecord::Migration[7.0]
  def change
    add_column :signups, :participants, :integer
    add_column :signups, :experience, :integer
    add_column :signups, :names, :string
  end
end
