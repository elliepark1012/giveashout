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
        signup = current_user.signups.create(signup_params)
        render json: signup, status: :created
    end

    def update 
        signup = current_users.signups.find(params[:id])
        signup.update!(signup_params)
        render json: signup, status: :accepted
    end 

    def destroy
        signup = current_user.signups.find_by(id: params[:id])
            if signup
                signup.destroy
                head :no_content
            else
                render json: { error: "Sign Up not found"}, status: :not_found
            end
     end


    private

    def signup_params
        params.permit(:opportunity_id, :participants, :extras, :donation)
    end 
end