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
        signup = current_user.signups.find(params[:id])
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

     def number
        #  /signups/3 => {partipants is at least 3 signups}
        # 1. map signups get the numbers of participants 2. compare it with number 3. return opportunity that related to the ones 
        signupsArray = current_user.signups.filter {|s| s.participants >= params[:num].to_i}
        opportunities = signupsArray.map{|s| s.opportunity}
        if  opportunities.empty?   
            render json: { error: "No Sign up matched"}
            
        else 
            render json: opportunities, status: :ok
        end
     end 


    private

    def signup_params
        params.permit(:opportunity_id, :participants, :extras, :donation)
    end 
end