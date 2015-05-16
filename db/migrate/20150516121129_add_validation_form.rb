class AddValidationForm < ActiveRecord::Migration
  def change
  	create_table :episodes do |t|
      t.date :discharge_date
	  t.string :sitetret
	  t.integer :disage
	  t.integer :gender
      t.string :postcode
      t.string :consultant_under
      t.timestamps null: false
    end

  	create_table :patient_responses do |t|
      t.integer :episode_id
      t.integer :pgic
      t.integer :vas
      t.integer :consultant_rating
      t.text :consultant_positive
 	  t.text :consultant_improving
      t.timestamps null: false
    end

    create_table :patient_extended_responses do |t|
      t.integer :episode_id
      t.string :response_type
      t.text :response_descrption
      t.timestamps null: false
    end

  end
end
