class Opportunity < ApplicationRecord
    validates_presence_of :title, :date, :location, :about, :img_url
    validates :title, uniqueness: true, length: { maximum: 100 }
    # validates :date, :location, :about, :img_url, length: { in: 3...500}

    has_many :signups
    has_many :users, through: :signups
end
