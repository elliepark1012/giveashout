class SignupSerializer < ActiveModel::Serializer
  attributes :price, :user, :volunteer, :participants, :experience, :names, :title, :id
  has_one :user

  def title 
    title = object.volunteer.title
    print "PRINTING TITLE #{title}"
  end 

end
