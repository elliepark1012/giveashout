Rails.application.routes.draw do
  resources :volunteers, only: [ :index, :show, :create, :update, :destroy]
end
