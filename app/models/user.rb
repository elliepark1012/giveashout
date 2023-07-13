class User < ApplicationRecord
    has_many :signups
    has_many :opportunities, through: :signups

    has_secure_password 
end
