class LandingController < ApplicationController
  content_security_policy(only: :index) do |policy|
    policy.script_src :unsafe_eval, *policy.script_src
  end

  def index
  end

  def contact
  end
end
