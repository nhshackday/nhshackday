class Site < ActiveRecord::Base

  def as_json(options = {})
    output = {}
    output[self.organisation_code] = {}
    output[self.organisation_code][:name] = self.name
    output[self.organisation_code][:address_line_1] = self.address_line_1
    output[self.organisation_code][:address_line_4] = self.address_line_4
    output
  end

end