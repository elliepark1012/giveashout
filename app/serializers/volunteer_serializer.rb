class VolunteerSerializer < ActiveModel::Serializer
  attributes :id, :title, :date, :location, :about, :img_url
  has_many :contacts
end
