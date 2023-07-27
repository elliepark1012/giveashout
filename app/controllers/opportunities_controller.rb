class OpportunitiesController < ApplicationController
    skip_before_action :authorized, only: [:index, :show] 
    before_action :authorize_admin, only: [:create, :update, :destroy]
    
    def index 
        render json: Opportunity.all, status: :ok
    end 

    def show
        opportunity = Opportunity.find(params[:id])
        render json: opportunity, status: :ok
    end 

    def create
        opportunity = Opportunity.create!(opportunity_params)
        render json: opportunity, status: :created
    end 

    def update 
        opportunity = Opportunity.find(params[:id])
        opportunity.update!(opportunity_params)
        render json: opportunity, status: :accepted
    end 

    def destroy
        opportunity = Opportunity.find(params[:id])
        opportunity.destroy
        head :no_content 
    end 

    private
    
    def opportunity_params
        params.permit(:title, :date, :location, :about, :img_url, :contact_name, :contact_email)
    end 

end
