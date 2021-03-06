class CommentsController < ApplicationController
  def index
    @comments = Post.find(params[:post_id]).comments

    respond_to do |format|
      format.json do
        render json: render_to_string(
          template: 'comments/index.json.jbuilder',
          locals: { comments: @comments }
        )
      end
    end
  end

  def create
    @comment = current_user.comments.create(params[:comment])
    user = (@comment.commentable_type == "Post") ? @comment.commentable.author : @comment.commentable.user
    notify!(user, @comment)
    flash[:notices] = ["comment posted"]

    respond_to do |format|
      format.html { redirect_to :back }
      format.json do
        render json: render_to_string(
          template: 'shared/_comment.json.jbuilder',
          locals: { comment: @comment }
        )
      end
    end

    # respond_to do |format|
    #   format.html { redirect_to :back }
    #   format.json { render nothing: true }
    # end
  end

  def destroy
    @comment = Comment.find(params[:id])

    @comment.destroy

    flash[:notices] = ["comment deleted"]
    respond_to do |format|
      format.html { redirect_to :back }
      format.json { render nothing: true }
    end
  end
end
