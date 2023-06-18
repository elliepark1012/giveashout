class SignupSerializer < ActiveModel::Serializer
  attributes :price, :user, :volunteer
  has_one :user
  
  def volunteer
    {title:object.volunteer.title}
  end
end
