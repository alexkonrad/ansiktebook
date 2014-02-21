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
      @user = User.new
      flash.now[:errors] = ["invalid username or password"]
      render "static_pages/index"
    end
  end

  def destroy
    sign_out

    redirect_to static_pages_url
  end

  def demo
    sign_in(User.find_by_username("Alex Konrad"))
    redirect_to static_pages_url
  end
end
