class FriendRequestsController < ApplicationController
  def create
    @request = FriendRequest.create(params[:friend_request])

    flash[:notices] = ["friend request pending"]

    redirect_to :back
  end

  def destroy
    friending_id = params[:sender_id]

    @request = current_user
      .received_friend_requests
      .where(sender_id: friending_id)
      .first

    if params[:status] == "approve"
      Friendship.create({
        friended_id: current_user.id,
        friending_id: friending_id
      })
    end

    flash[:notices] = ["friend request approved"]

    @request.destroy

    redirect_to user_url(friending_id)

  end
end
