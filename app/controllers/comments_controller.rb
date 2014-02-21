class CommentsController < ApplicationController
  def create
    @comment = current_user.comments.create(params[:comment])

    flash[:notices] = ["comment posted"]
    redirect_to :back
  end

  def destroy
    @comment = Comment.find(params[:id])

    @comment.destroy

    flash[:notices] = ["comment deleted"]
    redirect_to :back
  end
end
