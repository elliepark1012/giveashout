class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]
  
    def show
      render json: current_user, status: :ok
    end
  
    def create
      user = User.create!(user_params)
      render json: user, status: :created
    end
  
    def user_params
      params.permit(:username, :email, :password, :password_confirmation)
    end
  
  end
  
  
  