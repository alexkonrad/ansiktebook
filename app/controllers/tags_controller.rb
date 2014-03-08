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

    redirect_to :back
  end
end
