Rails.application.routes.draw do
  resources :signups
  resources :users, only: [:show,:new, :create]
  resources :volunteers, only: [ :index, :show, :create, :update, :destroy]

post '/login', to: 'sessions#create'
get '/authorized_user', to: 'users#show'
delete '/logout', to: 'sessions#destroy'

end
