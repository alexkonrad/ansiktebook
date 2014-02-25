class Api::UsersController < ApplicationController
  def show
    @user = User
      .includes(:received_posts)
      .find(params[:id])
  end

  def index
    if logged_in?
      @user = User
        .includes(:received_posts)
        .find(current_user.id)

      @status = @user
        .status

      @posts = Post.all.reverse

      @users = current_user.friend_requesters.all
    else
      @user = User.new
    end
  end

  def update
    @user = User.find(params[:id])

    @user.update_attributes(params[:user])
  end

  def destroy
    @user = User.find(params[:id])

    @user.destroy
  end
end
