class Api::PostsController < ApplicationController
  def index
    @posts = current_user.received_posts
  end

  def show
    @post = Post.includes(:author).find(params[:id])
  end

  def create
    @post = Post.new({
      text: params[:post][:text]
    })
    @post.author_id = current_user.id
    @post.recipient_id = params[:user_id]

    notify!(@post.recipient, @post) if @post.save
  end

  def update
    @post = Post.find(params[:id])

    @post.update_attributes(params[:post])
  end

  def destroy
    @post = Post.find(params[:id])

    @post.destroy
  end
end
