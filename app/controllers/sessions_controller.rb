class SessionsController < ApplicationController
    skip_before_action :authorized
  
    def index
      signups = Signup.all
      if signups&.authenticate(params[:username])
        session[:user_id] = user.id
        render json: signups, status: :ok
      else
        render json: { error: "Invalid" }
      end
    end
  
    def create
      user = User.find_by(username:params[:username])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user, status: :ok
      else
        render json: { errors: "Invalid username or password" }
      end
    end
  
    def destroy
      session.delete(:user_id)
      head :no_content
    end
  
  end