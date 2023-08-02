class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :admin
  has_many :signups
  has_many :opportunities
end
