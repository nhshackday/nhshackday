class CreateSites < ActiveRecord::Migration
  def change
    create_table :sites do |t|
      t.string :organisation_code
      t.string :name
      t.string :address_line_1
      t.string :address_line_4
      t.timestamps
    end
  end
end
