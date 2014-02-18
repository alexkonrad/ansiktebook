class PostsController < ApplicationController
  def index

  end

  def show
    @post = Post.includes(:author).find(params[:id])
  end

  def new
  end

  def create
    @post = Post.new({
      text: params[:post][:text]
    })
    @post.author_id = current_user.id
    @post.recipient_id = params[:user_id]

    if @post.save
      flash[:notices] = ["created post"]
      redirect_to user_url(@post.recipient_id)
    else
      flash.now[:errors] = @post.errors.full_messages
      render :new
    end
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])

    if @post.update_attributes(params[:post])
      flash[:notices] = ["created post"]
      redirect_to post_url(@post)
    else
      flash.now[:errors] = @post.errors.full_messages
      render :edit
    end
  end

  def destroy

  end
end
