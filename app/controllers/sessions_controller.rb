class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      flash[:notices] = ["logged in"]
      redirect_to static_pages_url
    else
      flash.now[:errors] = ["invalid username or password"]
      render :new
    end
  end

  def destroy
    sign_out

    redirect_to static_pages_url
  end
end
