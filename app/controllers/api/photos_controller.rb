class Api::PhotosController < ApplicationController
  def index
    @photos = current_user.photos
  end

  def show
    @photo = Photo.includes(:user).find(params[:id])
  end

  def create
    @photo = Photo.new(params[:photo])
    @photo.user = current_user

    notify!(@photo.user, @photo) if @photo.save
  end

  def update
    @photo = Post.find(params[:id])

    @photo.update_attributes(params[:photo])
  end

  def destroy
    @photo = Post.find(params[:id])

    @photo.destroy
  end
end
