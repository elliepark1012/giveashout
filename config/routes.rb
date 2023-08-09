Rails.application.routes.draw do
  resources :opportunities
  resources :signups 
  resources :users, only: [:create]

post '/login', to: 'sessions#create'
get '/me', to: 'users#show'
delete '/logout', to: 'sessions#destroy'

get '/opportunities/:location', to: 'opportunities#location'


end

