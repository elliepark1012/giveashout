class SignupSerializer < ActiveModel::Serializer
  attributes :price, :user, :volunteer
  has_one :user
  
end
