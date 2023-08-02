Rails.application.routes.draw do
  resources :opportunities
  resources :signups 
  resources :users, only: [:create]

post '/login', to: 'sessions#create'
get '/me', to: 'users#show'
delete '/logout', to: 'sessions#destroy'

get '/signups/participants/:num', to: 'signups#number'

# custom route - num look sign up - user least  - oppo connect object || error 

end
