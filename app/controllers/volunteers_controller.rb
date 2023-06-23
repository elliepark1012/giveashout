class VolunteersController < ApplicationController
    skip_before_action :authorized, only: [:index, :show] 
    before_action :authorize_admin, only: [:create, :update, :destroy]
    
    def index 
        render json: Volunteer.all, status: :ok
    end 

    def show
        volunteer = Volunteer.find(params[:id])
        render json: volunteer, status: :ok
    end 

    def create
        volunteer = Volunteer.create(volunteer_params)
        render json: volunteer, status: :created
    end 

    def update 
        volunteer = Volunteer.find(params[:id])
        volunteer.update!(volunteer_params)
        render json: volunteer, status: :accepted
    end 

    def destroy
        volunteer = Volunteer.find(params[:id])
        volunteer.destroy
        head :no_content 
    end 

    private
    
    def volunteer_params
        params.permit(:title, :date, :location, :about, :img_url)
    end 

end
