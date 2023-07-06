class SignupsController < ApplicationController


    def index
        signups = current_user.signups
        render json: signups
    end

    def show
        signup = current_user.signups.find_by(id: params[:id])
        print "hello"
        render json: signup
    end


    def create
        signup = Signup.create(signup_params)
        print "SIGNUP TITLE GOES HERE OMG #{signup.title}"
        render json: signup, status: :created
    end

    def destroy
        signup = Signup.find_by(id: params[:id])
            if signup
                signup.destroy
                head :no_content
            else
                render json: { error: "Sign Up not found"}, status: :not_found
            end
     end


    private


    def signup_params
        params.permit(:volunteer_id, :user_id, :donation, :participants, :extras)
    end 
end