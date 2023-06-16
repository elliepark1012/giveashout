class Volunteer < ApplicationRecord
    has_many :contacts ,dependent: :destroy
    has_many :signups ,dependent: :destroy
    has_many :users, through: :signups, dependent: :destroy
end
