class UsersController < ApplicationController

    
    def show 
        render json: current_user,  status: :ok
    end 

    def new 
        @user = User.new 
    end 

    def create 
        user = User.new(user_params)
        if @user.save
            redirect_to root_path, notice: "User created Successfully!"
        else 
            render :new
        end 
    end

    private 

    def user_params
        params.permit(:username, :email, :password, :password_confirmation)   
    end 
end
