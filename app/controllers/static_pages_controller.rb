class StaticPagesController < ApplicationController
  def index
    if logged_in?
      @user = User
        .includes(:received_posts)
        .find(current_user.id)

      @status = @user
        .status
    else
      @user = User.new
    end
  end
end
