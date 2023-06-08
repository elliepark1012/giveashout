class VolunteersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index 
        render json: Volunteer.all, status: :ok
    end 

    def show
        volunteer = Volunteer.find(params[:id])
        render json: volunteer, include: :contacts, status: :ok
    end 

    def create
        volunteer = Volunteer.create!(volunteer_params)
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

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end 

     def render_not_found(error)
        render json: {errors: {error.model => "Not Found"}}, status: :not_found
    end 
end
