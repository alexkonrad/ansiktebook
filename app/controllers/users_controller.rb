class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    confirmed_password = params[:user][:password] == params[:user][:password_confirmation]

    @user = User.new({
      username: params[:user][:username],
      email:    params[:user][:email],
      birthday: params[:user][:birthday]
    })

    @user.password = params[:user][:password]

    if confirmed_password && @user.save
      sign_in(@user)

      flash[:notices] = ["created account"]

      redirect_to static_pages_url
    else
      flash.now[:errors] = @user.errors.full_messages
      flash.now[:errors].push("Enter the same password in both fields") unless confirmed_password

      render :new
    end
  end

  def show
    @user = User.find(params[:id])
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
