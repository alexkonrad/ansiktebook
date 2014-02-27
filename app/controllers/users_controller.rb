class UsersController < ApplicationController
  def index
    if logged_in?
      @user = User
        .includes(:received_posts)
        .find(current_user.id)

      @status = @user
        .status

      @users = User.all

      @posts = Post.all.reverse

      @friend_requesters = current_user.friend_requesters.all
    else
      @user = User.new
    end
  end

  def new
    @user = User.new
  end

  def create
    confirmed_password = params[:user][:password] == params[:user][:password_confirmation]

    # => TODO: whitelist password & password_confirmation
    @user = User.new({
      username: params[:user][:username],
      email:    params[:user][:email],
      birthday: params[:user][:birthday],
      about:    params[:user][:about],
      profile_picture: params[:user][:profile_picture]
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
    @user = User
      .includes(:received_posts)
      .find(params[:id])
    @status = @user
      .status
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    confirmed_password = params[:user][:password] == params[:user][:password_confirmation]

    user = User.find(params[:id])
    user.password = params[:user][:password]

    if confirmed_password && user.update_attributes({
      username: params[:user][:username],
      email:    params[:user][:email],
      birthday: params[:user][:birthday],
      about:    params[:user][:about]
    })
      sign_in(user)
      flash[:notices] = ["updated account"]

      redirect_to static_pages_url
    else
      flash.now[:errors] = user.errors.full_messages
      flash.now[:errors].push("Enter the same password in both fields") unless confirmed_password

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
