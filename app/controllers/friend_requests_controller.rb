class FriendRequestsController < ApplicationController
  def create
    current_user.sent_friend_requests.create({
      recipient_id: params[:recipient_id]
    })

    flash[:notices] = ["friend request pending"]

    redirect_to :back
  end

  def destroy
    @request = current_user
      .received_friend_requests
      .where(sender_id: params[:user_id])
      .first

    @request.destroy

    if params[:status] == "approve"
      friendship = current_user.friendships.create({
        friend_id: params[:user_id]
      })

      notify!(friendship.friend, friendship)

      flash[:notices] = ["approved friend request"]

      redirect_to user_url(params[:user_id])
    else
      flash[:notices] = ["denied friend request"]

      redirect_to :back
    end

  end
end
