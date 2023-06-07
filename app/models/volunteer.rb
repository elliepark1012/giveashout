class Volunteer < ApplicationRecord
    has_many :contacts 
    has_many :signups
    has_many :users, through: :signups
end
