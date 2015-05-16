class SitesController < ApplicationController

  def search
    name = params[:name].to_s
    sites = Site.where("name like ?", "%#{name}%").limit(12)
    render :json => sites.to_json
  end

end