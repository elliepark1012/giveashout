class SignupsController < ApplicationController
    def index
        signup = Signup.all
        render json: signup
    end

    def show
        signup = Signup.find_by(id: params[:id])
        render json: signup
    end


    def create
        signup = Signup.create(signup_params)
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
        params.permit(:volunteer_id, :user_id, :price)
    end
end
