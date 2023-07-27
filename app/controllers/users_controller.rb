class UsersController < ApplicationController
        skip_before_action :authorized, only: [:create]
       
        def show
          print "THIS IS THE CURRENT USER: #{current_user}"
          render json: current_user, status: :ok
        end
      
        def create
          user = User.create!(user_params)
          session[:user_id] = user.id
          render json: user, status: :created
        end
      
        def user_params
          params.permit(:username, :email, :password, :password_confirmation)
        end
      
      end
