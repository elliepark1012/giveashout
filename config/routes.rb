Rails.application.routes.draw do
  resources :users
  resources :users, only: [:show, :create]
  resources :volunteers, only: [ :index, :show, :create, :update, :destroy]
end
