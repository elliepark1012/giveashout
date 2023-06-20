Rails.application.routes.draw do
  resources :signups
  resources :users
  resources :volunteers
  # , only: [ :index, :show, :create, :update, :destroy]

post '/login', to: 'sessions#create'
get '/me', to: 'users#show'
delete '/logout', to: 'sessions#destroy'

end
