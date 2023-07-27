Rails.application.routes.draw do
  resources :opportunities
  resources :signups
  resources :users

post '/login', to: 'sessions#create'
get '/me', to: 'users#show'
delete '/logout', to: 'sessions#destroy'

end
