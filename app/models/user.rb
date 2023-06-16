class User < ApplicationRecord
    has_many :signups 
    has_many :volunteers, through: :signups

    has_secure_password
    validates_presence_of :username, :email, :password, :password_confirmation
    validates :username, :email, :password, :password_confirmation, length: { in: 3...500}
    validates :username, :email, uniqueness:true

    validates :password, confirmation: true
    validates :password_confirmation, presence: true
end
