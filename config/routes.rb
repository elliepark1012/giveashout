Rails.application.routes.draw do
  resources :opportunities
  resources :signups
  resources :users
  resources :volunteers

post '/login', to: 'sessions#create'
get '/me', to: 'users#show'
delete '/logout', to: 'sessions#destroy'

# resources :users do
#   resources :signups, only: [:index, :update]
# end

end
