class SignupSerializer < ActiveModel::Serializer
  attributes :price, :user_id, :volunteer_id 
  belongs_to :user
end
