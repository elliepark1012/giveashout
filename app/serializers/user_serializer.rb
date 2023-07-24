class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :admin
  has_many :signups
end
