class Site < ActiveRecord::Base

  def as_json(options = {})
    [self.organisation_code, self.name, self.address_line_1, self.address_line_4]
  end

end