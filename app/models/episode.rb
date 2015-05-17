class Episode < ActiveRecord::Base
	has_many :patient_responses
end
