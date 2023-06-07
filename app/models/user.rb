class User < ApplicationRecord
    has_many :signups 
    has_many :volunteers, through: :signups

end