class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :signups
  has_many :volunteers
end
