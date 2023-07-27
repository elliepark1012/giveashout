Rails.application.routes.draw do
  resources :opportunities, only: [:index, :update, :show, :destroy, :create]
  resources :signups
  resources :users

post '/login', to: 'sessions#create'
get '/me', to: 'users#show'
delete '/logout', to: 'sessions#destroy'

# resources :users do
#   resources :signups, only: [:index, :update]
# end

end
