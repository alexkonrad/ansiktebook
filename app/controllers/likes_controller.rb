class LikesController < ApplicationController
  def create
    @like = current_user.likes.create({
      likeable_id: params[:post_id],
      likeable_type: "Post"
    })

    flash[:notices] = ["liked"]
    redirect_to(:back)
  end

  def destroy
    @like = current_user.likes.where(likeable_id: params[:post_id]).first!

    @like.destroy
    flash[:notices] = ["unliked"]
    redirect_to(:back)
  end
end
