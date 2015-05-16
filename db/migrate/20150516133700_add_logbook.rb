class AddLogbook < ActiveRecord::Migration
  def change
  	create_table :logbook do |t|
      t.integer :episode_id
      t.string :sitetret
      t.date :opdate01
      t.datetime :operation_start
      t.datetime :operation_end
	  t.integer :gender
	  t.integer :admiage # 1-120 main age, 7001-7007
	  t.integer :mainspef
	  t.string :OPCS4
	  t.integer :anaesthetictype
	  t.integer :anaesthetictype_extra
	  t.integer :anaesthetic_extra_information	 
	  t.timestamps null: false
    end

  end
end
