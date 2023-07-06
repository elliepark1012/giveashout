class SignupSerializer < ActiveModel::Serializer
  attributes :id, :donation, :participants, :extras
  has_one :user
  has_one :opportunity
end
