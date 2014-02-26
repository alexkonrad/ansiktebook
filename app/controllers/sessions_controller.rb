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
    user = User.find_by_username("Alex Konrad")
    if user.nil?
      user = User.create({
        username: "Alex Konrad",
        email: "alexkonrad08@gmail.com",
        birthday: "1990-01-26"
      })
      user.password = "amkamk"
    end
    sign_in(user)
    redirect_to static_pages_url
  end
end
