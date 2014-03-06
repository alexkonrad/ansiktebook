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
    user = User.find_by_username("Dale Cooper")
    if user.nil?
      user = User.new({
        username: "Dale Cooper",
        email: "dale@example.com",
        birthday: 35.years.ago,
        about: "We're going to need some more coffee",
        profile_picture: File.new("test/fixtures/dale-cooper.jpg")
      })
      user.password = "amkamk"
      user.save
    end
    sign_in(user)
    redirect_to static_pages_url
  end
end
