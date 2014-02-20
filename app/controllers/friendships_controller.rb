class FriendshipsController < ApplicationController
  def destroy
    @friendship = current_user
      .friendships
      .find_by_id(params[:id])

    @friendship.destroy

    flash[:notices] = ["friendship deleted"]

    redirect_to static_pages_url
  end
end