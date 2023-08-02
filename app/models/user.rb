class User < ApplicationRecord
    # validates :username, presence: true, uniqueness: true
    # validates :email, presence: true, uniqueness: true, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: "should be a valid email address" }
    # validates :password, presence: true, confirmation: true, length: { minimum: 3 }
    # validates :password_confirmation, presence: true

    has_many :signups
    has_many :opportunities, through: :signups

    has_secure_password 
end
