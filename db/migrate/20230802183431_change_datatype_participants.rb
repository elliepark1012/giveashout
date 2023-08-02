class ChangeDatatypeParticipants < ActiveRecord::Migration[7.0]
  def change
    change_column :signups, :participants, :integer
  end
end
