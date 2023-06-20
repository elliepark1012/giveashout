class SignupSerializer < ActiveModel::Serializer
  attributes :price, :user, :volunteer
  has_one :user

  def production
    {title:object.production.title}
  end 
end
