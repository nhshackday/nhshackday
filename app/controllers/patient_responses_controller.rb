class PatientResponsesController < ApplicationController
  def index  	
  	@patient_responses = PatientResponse.all
  	render :layout => false
  end
end
