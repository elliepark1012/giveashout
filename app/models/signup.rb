class Signup < ApplicationRecord
  validates_presence_of :participants, :extras
  validates :participants, numericality: { only_integer: true, greater_than_or_equal_to: 0, less_than_or_equal_to: 100 }

  belongs_to :user
  belongs_to :opportunity
end
