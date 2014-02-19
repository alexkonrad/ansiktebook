class PhotosController < ApplicationController
  # => TODO: add before_filter logged-in

  def index
    @photos = Photo.where(user_id: params[:user_id]).all

    #@user_id = params[:user_id]
    @user = User.find(params[:user_id])
  end

  def show
    @photo = Photo.includes(:user).find(params[:id])
  end

  def new
  end

  def create
    @photo = Photo.new(params[:photo])
    @photo.user = current_user

    if @photo.save
      flash[:notices] = ["uploaded photo"]
      redirect_to user_photo_url(current_user, @photo)
    else
      flash.now[:errors] = @photo.errors.full_messages
      render :new
    end
  end

  def destroy
    @photo = Photo.find(params[:id])

    @photo.destroy

    flash[:notices] = ["photo deleted"]

    redirect_to user_photos_url(current_user)
  end
end
