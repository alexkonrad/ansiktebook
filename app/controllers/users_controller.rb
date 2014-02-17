class UsersController < ApplicationController
  def index
    # => TODO: figure out what this page is
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new({
      username: params[:user][:username],
      email:    params[:user][:email],
      birthday: params[:user][:birthday]
    })

    @user.password = params[:user][:password]

    if params[:user][:password] == params[:user][:password_confrimation] && @user.save
      sign_in(@user)

      flash[:notices] = ["created account"]

      redirect_to static_pages_url
    else
      flash.now[:errors] = @user.errors.full_messages || ["enter the same password in both fields"]

      render :new
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    user = User.find(params[:id])

    if user.update_attributes(params[:user])
      flash[:notices] = ["updated account"]

      redirect_to static_pages_url
    else
      flash.now[:errors] = user.errors.full_messages

      render :edit
    end
  end

  def destroy
    user = User.find(params[:id])
    user.destroy

    flash[:notices] = ["destroyed account"]

    redirect_to static_pages_url
  end
end
