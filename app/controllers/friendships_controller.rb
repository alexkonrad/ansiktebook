class FriendshipsController < ApplicationController
  def destroy
    @friendship = current_user
      .find_friendship_by_user_id(params[:friend_id])

    @friendship.destroy

    flash[:notices] = ["friendship deleted"]

    redirect_to static_pages_url
  end
end