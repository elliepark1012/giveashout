class OpportunitySerializer < ActiveModel::Serializer
  attributes :id, :title, :date, :location, :about, :img_url, :contact_name, :contact_email
  has_many :users
end
