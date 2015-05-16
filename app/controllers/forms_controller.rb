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


  end

end