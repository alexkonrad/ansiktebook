class TagsController < ApplicationController
  def create
    @tag = Tag.new({
      photo_id: params[:photo_id],
      tagger_id: params[:user_id],
      tagged_id: params[:tagged_user_id]
    })

    if @tag.save
      notify!(@tag.tagged, @tag)

      flash[:notices] = ["tagged photo"]

    else

      flash[:errors] = ["cannot tag photo"]

    end

    redirect_to :back
  end

  def destroy
    @tag = Tag.find(params[:id])
    
    @tag.destroy
    # @tag = Tag.find_by_photo_id_and_tagged_id(params[:photo_id], params[:user_id])
    # 
    # if (current_user.id == @tag.tagger_id ||
    #     current_user.id == @tag.tagged_id ||
    #     current_user.id == @tag.photo.user_id)
    # 
    #   @tag.destroy
    # 
    #   flash[:notices] = ["untagged photo"]
    # end

    redirect_to :back
  end
end
