class Site < ActiveRecord::Base

  def as_json(options = {})
    [self.organisation_code, self.name.titleize, self.address_line_1.titleize, self.address_line_4.titleize]
  end
end