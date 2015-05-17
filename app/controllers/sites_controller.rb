class SitesController < ApplicationController

  def search
    name = params[:name].to_s
    sites = Site.where("lcase(name) like lcase(?) and lcase(name) like '%hospital%'", "%#{name}%").limit(12)
    render :json => sites.to_json
  end

end