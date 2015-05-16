class FormsController < ApplicationController

  def submit
    episode = Episode.new
    episode.discharge_date = params[:discharge_date]
    episode.sitetret = params[:hospital_id]
    episode.disage = params[:age]
    episode.gender = params[:gender]
    episode.postcode = params[:postcode]
    episode.save

    patient_response = PatientResponse.new
    patient_response.episode_id = episode.id
    patient_response.pgic = params[:pgic]
    patient_response.vas = params[:vas]

    patient_response.consultant_rating = params[:doctor_rating]
    patient_response.consultant_positive = params[:doctor_good]
    patient_response.consultant_improving = params[:doctor_bad]

    patient_response.save

    PatientExtendedResponse.create(:episode_id => episode.id, :response_type => "Nurse Rating", :response_description => params[:nurse_rating])
    PatientExtendedResponse.create(:episode_id => episode.id, :response_type => "Nurse Good", :response_description => params[:nurse_good])
    PatientExtendedResponse.create(:episode_id => episode.id, :response_type => "Nurse Bad", :response_description => params[:nurse_bad])
    PatientExtendedResponse.create(:episode_id => episode.id, :response_type => "Food Rating", :response_description => params[:food_rating])
    PatientExtendedResponse.create(:episode_id => episode.id, :response_type => "Food Good", :response_description => params[:food_good])
    PatientExtendedResponse.create(:episode_id => episode.id, :response_type => "Food Bad", :response_description => params[:food_bad])

    return :status => 200, :json => "OK"

  end

end