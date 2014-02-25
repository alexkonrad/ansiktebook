class Api::UsersController < ApplicationController
  def show
    @user = User
      .includes(:received_posts)
      .find(params[:id])
  end

  def index
    @users = User.all
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
