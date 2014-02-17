class StaticPagesController < ApplicationController
  def index
    @user = User.new
  end
end
