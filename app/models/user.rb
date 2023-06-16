class User < ApplicationRecord
    has_many :signups 
    has_many :volunteers, through: :signups

    has_secure_password
    validates :password, confirmation: true
    validates :password_confirmation, presence: :true
end
