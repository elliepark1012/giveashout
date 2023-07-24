class SignupSerializer < ActiveModel::Serializer
  attributes :id, :donation, :participants, :extras, :title
  has_one :user
  has_one :opportunity

  def title
    object.opportunity.title 
  end 
end
